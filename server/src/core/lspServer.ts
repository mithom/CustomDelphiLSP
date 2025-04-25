/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    CancellationToken,
    DidChangeConfigurationParams,
    ExecuteCommandParams,
    // GetConfigurationFromServerParams,
    InitializedParams,
    InitializeError,
    NotificationHandler,
    RequestHandler,
    ResponseError,
    RequestType,
    // showNotificationRequestType,
    // NotificationFollowupParams,
    // NotificationParams,
    ErrorCodes,
    // UpdateConfigurationParams,
    HandlerResult
} from 'vscode-languageserver'
import { Notification, NotificationFollowupParams } from './notification'

import { Connection } from 'vscode-languageserver/node'
import { InitializeResult, InitializeParams, ConfigurationParams } from "vscode-languageserver-protocol"
import log from '../log'

export class LspServer {
    readonly notification : Notification;
    private didChangeConfigurationHandler?: NotificationHandler<DidChangeConfigurationParams>
    private executeCommandHandler?: RequestHandler<ExecuteCommandParams, any | undefined | null, void>
    //private getServerConfigurationHandler?: RequestHandler<GetConfigurationFromServerParams, any, void>
    private initializeHandler?: RequestHandler<InitializeParams, InitializeResult, InitializeError>
    private initializedHandler?: NotificationHandler<InitializedParams>
    private updateConfigurationHandler?: RequestHandler<ConfigurationParams, void, void>

    // private clientSupportsNotifications?: boolean
    private initializeResult?: InitializeResult

    private notificationFollowupHandler?: NotificationHandler<NotificationFollowupParams>
    public clientInitializeParams?: InitializeParams;

    constructor(
    ) {
        this.notification = {
            showNotification: params => {
                // if (this.clientSupportsNotifications) {
                //     if (!this.notificationRouter) {
                //         log.write(`Notifications are not supported: serverInfo is not defined`)
                //     }
                //     this.notificationRouter?.send(
                //         params => this.lspConnection.sendNotification("showNotificationRequestType.method", params),
                //         params
                //     )
                // }
            },
            onNotificationFollowup: handler => {
                this.notificationFollowupHandler = handler
            },
        }
    }

    public setInitializedHandler = (handler: NotificationHandler<InitializedParams>): void => {
        this.initializedHandler = handler
    }

    public setDidChangeConfigurationHandler = (handler: NotificationHandler<DidChangeConfigurationParams>): void => {
        this.didChangeConfigurationHandler = handler
    }

    public setUpdateConfigurationHandler = (handler: RequestHandler<ConfigurationParams, void, void>): void => {
        this.updateConfigurationHandler = handler
    }

    public setInitializeHandler = (
        handler: RequestHandler<InitializeParams, InitializeResult, InitializeError>
    ): void => {
        this.initializeHandler = handler
    }

    public setExecuteCommandHandler = (
        handler: RequestHandler<ExecuteCommandParams, any | undefined | null, void>
    ): void => {
        this.executeCommandHandler = handler
    }

    // public setServerConfigurationHandler = (
    //     handler: RequestHandler<GetConfigurationFromServerParams, any, void>
    // ): void => {
    //     this.getServerConfigurationHandler = handler
    // }

    public initialize = async (
        params: InitializeParams,
        token: CancellationToken
    ): Promise<InitializeResult | ResponseError<InitializeError> | undefined> => {
        this.clientInitializeParams = params;
        // this.clientSupportsNotifications =
        //     params.initializationOptions?.aws?.awsClientCapabilities?.window?.notifications

        if (!this.initializeHandler) {
            return
        }
        try {
            const initializeResult = this.initializeHandler(params, token)
            if (!(initializeResult instanceof ResponseError)) {
                this.initializeResult = initializeResult.then((resolved: InitializeResult) => resolved, (error: Error) => {throw error})
                // if (initializeResult?.serverInfo) {
                //     this.notificationRouter = new RouterByServerName(initializeResult.serverInfo.name, this.encoding)
                // }
            }

            return initializeResult
        } catch (e) {
            log.write(
                `Runtime Initialization Error\nInitializationOptions: ${JSON.stringify(params.initializationOptions)}\n${e}`
            )
            return new ResponseError(
                ErrorCodes.ServerNotInitialized,
                `Runtime Initialization Error\nInitializationOptions: ${JSON.stringify(params.initializationOptions)}\n${e}`
            )
        }
    }

    public tryExecuteCommand = async (
        params: ExecuteCommandParams,
        token: CancellationToken
    ): Promise<[boolean, any | undefined | null]> => {
        if ( this.initializeResult?.capabilities?.executeCommandProvider?.commands.some(c => c === params.command) &&
                this.executeCommandHandler
        ) {
            const result = this.executeCommandHandler(params, token)
            // const result = await asPromise(this.executeCommandHandler(params, token))
            return [true, result]
        }

        return [false, undefined]
    }

    // public tryGetServerConfiguration = async (
    //     params: GetConfigurationFromServerParams,
    //     token: CancellationToken
    // ): Promise<[boolean, any | undefined | null]> => {
    //     if (
    //         this.initializeResult?.awsServerCapabilities?.configurationProvider?.sections.some(
    //             c => c === params.section
    //         ) &&
    //         this.getServerConfigurationHandler
    //     ) {
    //         const result = await this.getServerConfigurationHandler(params, token)
    //         // const result = await asPromise(this.getServerConfigurationHandler(params, token))
    //         return [true, result]
    //     }

    //     return [false, undefined]
    // }

    public sendDidChangeConfigurationNotification = (params: DidChangeConfigurationParams): void => {
        this.didChangeConfigurationHandler?.(params)
    }

    public sendUpdateConfigurationRequest = async (
        params: ConfigurationParams,
        token: CancellationToken
    ): Promise<HandlerResult<void, void>> => {
        if (this.updateConfigurationHandler) {
            // const result = await asPromise(this.updateConfigurationHandler?.(params, token))
            const result =this.updateConfigurationHandler?.(params, token)

            return result
        }
    }

    public sendInitializedNotification = (params: InitializedParams): void => {
        this.initializedHandler?.(params)
    }

    // public sendNotificationFollowup = (params: NotificationFollowupParams): void => {
    //     if (this.notificationFollowupHandler && this.notificationRouter) {
    //         this.notificationRouter.processFollowup(this.notificationFollowupHandler, params)
    //     }
    // }
}