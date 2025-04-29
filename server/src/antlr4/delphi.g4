grammar delphi;

/*
 * Sonar Delphi Plugin
 * Copyright (C) 2010 SonarSource
 * dev@sonar.codehaus.org
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02

 * Updated from above original ANTLR3 to ANTLR4 by Jens Gotthardsen
 * https://github.com/gotthardsen/Delphi-ANTRL4-Grammar
 */
options {
	caseInsensitive = true;
}

@lexer::namespace{DelphiGrammar}
@parser::namespace{DelphiGrammar}
//****************************
//section start
//****************************
file                         : program | library | unit | packageE
                             ;
//****************************
//section fileDefinition
//****************************

program                      : (programHead)? (usesFileClause)? block DOT
                             ;
programHead                  : 'program' namespaceName (programParmSeq)? SEMI
                             ;
programParmSeq               : '(' (ident (COMMA ident)* )? ')'
                             ;
library                      : libraryHead (usesFileClause)? block DOT
                             ;
libraryHead                  : 'library' namespaceName (hintingDirective)* SEMI
                             ;
packageE                     : packageHead requiresClause (containsClause)? END DOT
                             ;
packageHead                  : 'package' namespaceName SEMI
                             ;
unit                         : unitHead unitInterface unitImplementation unitBlock DOT
                             ;
unitHead                     : 'unit' namespaceName (hintingDirective)* SEMI
                             ;
unitInterface                : 'interface' (usesClause)? (interfaceDecl)*
                             ;
unitImplementation           : 'implementation' (usesClause)? (declSection)*
                             ;
unitBlock                    : unitInitialization END
                             | compoundStatement
                             | END
                             ;
unitInitialization           : 'initialization' statementList (unitFinalization)?
                             ;
unitFinalization             : 'finalization' statementList
                             ;
//****************************
//section fileUsage
//****************************
containsClause               : 'contains' namespaceFileNameList
                             ;
requiresClause               : 'requires' namespaceNameList
                             ;
usesClause                   : 'uses' namespaceNameList 
                             ;
usesFileClause               : 'uses' namespaceFileNameList
                             ;
namespaceFileNameList        : namespaceFileName (COMMA namespaceFileName)* SEMI
                             ;
namespaceFileName            : namespaceName ('in' QuotedString)?
                             ;
namespaceNameList            : namespaceName (COMMA namespaceName)* SEMI
                             ;
//****************************
//section declaration
//****************************
block                        : (declSection)* (blockBody)?
                             ;
blockBody                    : compoundStatement
                             | assemblerStatement
                             ;
declSection                  : labelDeclSection
                             | constSection
                             | typeSection
                             | varSection
                             | exportedProcHeading
                             | methodDecl
                             | procDecl
                             | exportsSection
                             ;
interfaceDecl                : procDecl
                             | methodDecl
                             | typeSection
                             | varSection
                             | exportedProcHeading
                             | exportsSection
                             | constSection
                             ;
labelDeclSection             : 'label' label (COMMA label)* SEMI
                             ;
constSection                 : constKey (constDeclaration)*  //CHANGED, erased one constDeclaration, for: "const {$include versioninfo.inc }"
                             ;
constKey                     : 'const'
                             | 'resourcestring'
                             ;
constDeclaration             : (customAttribute)? ident (':' typeDecl)? '=' constExpression (hintingDirective)* SEMI
                             ;
typeSection                  : 'type' typeDeclaration (typeDeclaration)*
                             ;
typeDeclaration              : (customAttribute)? genericTypeIdent '=' typeDecl (hintingDirective)* SEMI
                             ;
varSection                   : varKey varDeclaration (varDeclaration)*
                             ;
varKey                       : 'var'
                             | 'threadvar'
                             ;
// threadvar geen initializations alleen globaal
varDeclaration               : (customAttribute)? identListFlat ':' typeDecl (varValueSpec)? (hintingDirective)* SEMI
                             ;
varValueSpec                 : 'absolute' ident
                             | 'absolute' constExpression
                             | '=' constExpression
                             ;
exportsSection               : 'exports' ident exportItem (COMMA ident exportItem)* SEMI
                             ;
exportItem                   : ('(' (formalParameterList)? ')')? (INDEX expression)? (NAME expression)? ('resident')?
                             ;
//****************************
//section type
//****************************
typeDecl                     : strucType
                             | pointerType
                             | stringType
                             | procedureType 
                             | variantType
                             | ('type')? typeId (genericPostfix)?
                             | simpleType
                             ;
strucType                    : ('packed')? strucTypePart 
                             ;
strucTypePart                : arrayType
                             | setType
                             | fileType
                             | classDecl
                             ;

arrayType                    :  'array' ('[' (arrayIndex)? (COMMA (arrayIndex)?)* ']')? 'of' arraySubType
                                     //CHANGED we only need type info
                             ;

arrayIndex                   : typeId
                             | expression '..' expression
                             ;

arraySubType                 : 'const'
                             | typeDecl
                             ;
setType                      : 'set' 'of' typeDecl          //CHANGED we only need type info
                             ;
// set type alleen ordinal of subrange type
fileType                     : 'file' ('of' typeDecl)?
                             ;
pointerType                  : '^' typeDecl
                             | 'pointer'
                             ;
stringType                   : 'string' ('[' expression ']')? 
                             | ('type')? ANSISTRING (codePageNumber)?
                             ;
codePageNumber               : '(' intNum ')'
                             ;
procedureType                : methodType
                             | simpleProcedureType
                             | procedureReference
                             ;
methodType                   : procedureTypeHeading 'of' 'object'
                             ;
simpleProcedureType          : procedureTypeHeading ( (SEMI)? callConventionNoSemi)?
                             ;
procedureReference           : 'reference' 'to' procedureTypeHeading
                             ;
procedureTypeHeading         : 'function' (formalParameterSection)? ':' (customAttribute)? typeDecl 
                             | 'procedure' (formalParameterSection)?
                             ;
variantType                  : 'variant' // SzJ TODO TEMP
                             ;
simpleType                   : ident
                             | subRangeType
                             | enumType
                             ;
subRangeType                 : constExpression ('..' constExpression)?
                             ;
enumType                     : '(' ident ('=' expression)? (COMMA ident ('=' expression)? )* ')'
                             ;
typeId                       : namespacedQualifiedIdent
                             ;
//****************************
//section generics
//****************************
genericTypeIdent             : qualifiedIdent (genericDefinition)?     //CHANGED we don't need <Type> data, it produced empty nodes
                             ;
genericDefinition            : simpleGenericDefinition
                             | constrainedGenericDefinition
                             ;
simpleGenericDefinition      : '<' ident (COMMA ident)* '>'
                             ;
constrainedGenericDefinition : '<' constrainedGeneric (SEMI constrainedGeneric)* '>'
                             ;
constrainedGeneric           : ident (':' genericConstraint (COMMA genericConstraint)*)?
                             ;
genericConstraint            : ident
                             | ( 'record' | 'class' | 'constructor' )
                             ;
genericPostfix               : '<' typeDecl (COMMA typeDecl)* '>'
                             ;
//****************************
//section class
//****************************
classDecl                    : classTypeTypeDecl
                             | classTypeDecl 
                             | classHelperDecl 
                             | interfaceTypeDecl 
                             | objectDecl 
                             | recordDecl 
                             | recordHelperDecl 
                             ;
classTypeTypeDecl            : 'class' 'of' typeId 
                             ;
classTypeDecl                : 'class' (classState)? (classParent)? (classItem)* END 
                             | 'class' (classParent)? 
                             ;
classState                   : 'sealed'
                             | 'abstract'
                             ;
classParent                  : '(' genericTypeIdent (COMMA genericTypeIdent)* ')'    //CHANGEd from typeId to classParentId
                             ;
classItem                    : visibility
                             | classMethod
                             | classField
                             | classProperty
                             | constSection
                             | typeSection
                             | ('class')? varSection
                             ;
classHelperDecl              : 'class' 'helper' (classParent)? FOR typeId (classHelperItem)* END //CHANGED, we only need "for" class name
                             ;
classHelperItem              : visibility
                             | classMethod
                             | classProperty
                             | ('class')? varSection
                             ;
interfaceTypeDecl            : interfaceKey (classParent)? (interfaceGuid)? (interfaceItem)* END 
                             | interfaceKey (classParent)? 
                             ;
interfaceKey                 : 'interface'
                             | 'dispinterface'
                             ;
interfaceGuid                : '[' QuotedString ']' 
                             ;
interfaceItem                : classMethod
                             | ('class')? classProperty
                             ;
objectDecl                   : 'object' (classParent)? (objectItem)* END 
                             ;
objectItem                   : visibility
                             | classMethod
                             | classField
                             ;
recordDecl                   : simpleRecord
                             | variantRecord
                             ;
simpleRecord                 : 'record' (recordField)* (recordItem)* END 
                             ;
variantRecord                : 'record' (recordField)* recordVariantSection END 
                             ;
recordItem                   : visibility     //ADDED
                             | classMethod
                             | classProperty
                             | constSection
                             | typeSection
                             | recordField
                             | ('class')? varSection
                             ;
recordField                  : identList ':' typeDecl (hintingDirective)* (SEMI)?  //CHANGED not needed ; at the end
                             ;
recordVariantField           : identList ':' typeDecl (hintingDirective)* (SEMI) ?
                             ;
recordVariantSection         : 'case' (ident ':')? typeDecl 'of' (recordVariant | SEMI) (recordVariant | SEMI)*
                             ;
recordVariant                : constExpression (COMMA constExpression)* ':' '(' (recordVariantField)* ')'   //CHANGED to recordVariantField from recordField
                             ;
recordHelperDecl             : 'record' 'helper' FOR typeId (recordHelperItem)* END
                             ;
recordHelperItem             : visibility
                             | classMethod
                             | classProperty
                             ;
classMethod                  : (customAttribute)? ('class')? methodKey ident (genericDefinition)? (formalParameterSection)? SEMI (methodDirective)* 
                             | (customAttribute)? ('class')? 'function' ident (genericDefinition)? (formalParameterSection)? ':' (customAttribute)? typeDecl SEMI (methodDirective)*
                             | (customAttribute)? ('class')? 'operator' ident (genericDefinition)? (formalParameterSection)? ':' (customAttribute)? typeDecl SEMI
                             ;                             
classField                   : (customAttribute)? identList ':' typeDecl SEMI (hintingDirective)* 
                             ;
classProperty                : (customAttribute)? ('class')? 'property' ident (classPropertyArray)? (':' genericTypeIdent)? (classPropertyIndex)? (classPropertySpecifier)* SEMI (classPropertyEndSpecifier)*
                              // CHANGED added (classPropertySpecifier)* at end for "default;"
                              // CHANGEDD to genericTypeIdent for "property QueryBuilder : IQueryBuilder<GenericRecord>"
                             ;
classPropertyArray           : '[' formalParameterList ']'
                             ;
classPropertyIndex           : 'index' expression (SEMI)?  //CHANGED to (SEMI)?
                             ;
classPropertySpecifier       : classPropertyReadWrite   //CHANGED removed SEMI
                             | classPropertyDispInterface
                             | STORED expression
                             | 'default' expression
                             | ( 'default'                // for array properties only (1 per class)
                             | 'nodefault' )
                             | IMPLEMENTS typeId
                             ;
classPropertyEndSpecifier    : STORED expression SEMI    //ADDED used in classProperty at end
                             | 'default' expression SEMI
                             | 'default' SEMI             
                             | 'nodefault' SEMI
                             ;

classPropertyReadWrite       : 'read' qualifiedIdent ('[' expression ']')?  // Waarom qualified ident???  //ADDED []
                             | 'write' qualifiedIdent ('[' expression ']')? //ADDED []
                             ;
classPropertyDispInterface   : 'readonly' SEMI
                             | 'writeonly' SEMI
                             | dispIDDirective
                             ;
visibility                   : (STRICT)? 'protected' 
                             | (STRICT)? 'private'
                             | ( 'public'
                             | 'published' 
                             | 'automated' )     // win32 deprecated
                             ;
//****************************
//section procedure
//****************************
exportedProcHeading          : 'procedure' ident (formalParameterSection)? ':' (customAttribute)? typeDecl SEMI (functionDirective)*
                             | 'function' ident (formalParameterSection)? SEMI (functionDirective)*
                             ;
methodDecl                   : methodDeclHeading SEMI (methodDirective)* (methodBody)? 
                             ;
methodDeclHeading            : (customAttribute)? ('class')?  methodKey methodName (formalParameterSection)?
                             | (customAttribute)? ('class')? 'function' methodName (formalParameterSection)? (':' (customAttribute)? typeDecl)?
                             | (customAttribute)? 'class' 'operator' methodName (formalParameterSection)? (':' (customAttribute)? typeDecl)?
                             ;              
methodKey                    : 'procedure'
                             | 'constructor'
                             | 'destructor'
                             ;
methodName                   : ident (genericDefinition)? (DOT ident (genericDefinition)?)? DOT ident (genericDefinition)?
                             ;                             
procDecl                     : procDeclHeading SEMI (functionDirective)* (procBody)?     //CHANGED
                             ;
procDeclHeading              : (customAttribute)? 'procedure' ident (formalParameterSection)?             //CHANGED
                             | (customAttribute)? 'function' ident (formalParameterSection)? ':' typeDecl
                             ;
formalParameterSection       : '(' (formalParameterList)? ')' 
                             ;
formalParameterList          : formalParameter (SEMI formalParameter)* 
                             ;
formalParameter              : //(customAttribute)? 
                               (parmType)? identListFlat (':' typeDecl)? ('=' expression)? 
               //expressions was cut out, beacause we dont have to know default variable values; they were causing troubles with DelphiCodeAnalyser
                             ;
parmType                     : 'const'
                             | 'var'
                             | 'out'
                             ;
methodBody                   : block SEMI 
                             ;
procBody                     : 'forward' SEMI (functionDirective)*   // CHECKEN ; en directive plaats!
                             | 'external' ('name' expression | 'index' expression)* (functionDirective)* // CHECKEN directive plaats
                             | block SEMI
                             ;
//****************************
//section customAttributes
//****************************
customAttribute              : 'abekat' //customAttributeList
                             ;
customAttributeList          : (customAttributeDecl)*
                             ;
customAttributeDecl          : '[' namespacedQualifiedIdent ('(' (expressionList)? ')')? ']'  
                             ;                             

//****************************
//section expression
//****************************
expression                   : anonymousExpression 
                             | simpleExpression (relOp simpleExpression)? ('=' expression)?   //CHANGED, added expression for: "if( functionCall(x, 7+66) = true ) then" syntax
                             ;                           
anonymousExpression          : 'procedure' (formalParameterSection)? block
                             | 'function' (formalParameterSection)? ':' typeDecl block
                             ;
simpleExpression             : factor (operator factor)*
                             ;
factor                       : '@' factor
                             | DOUBLEAT factor       // used to get address of proc var
                             | 'not' factor
                             | '+' factor
                             | '-' factor
                             | '^' ident           // geeft volgnummer van letter
                             | intNum
                             | realNum
                             | ( TkAsmHexNum          // Alleen in asm statement
                             | 'true'
                             | 'false'
                             | 'nil' )
                             | '(' expression ')' ('^')? (DOT expression)?        //CHANGED, added  ('^')? (DOT qualifiedIdent)?
                             | stringFactor
                             | setSection
                             | designator
                             | typeId '(' expression ')'
                             ;
stringFactor                 : ControlString (QuotedString ControlString)* (QuotedString)?
                             | QuotedString (ControlString QuotedString)* (ControlString)?
                             ;
setSection                   : '[' (expression ((COMMA | '..') expression)*)? ']'
                             ;

designator                   : INHERITED // ('inherited')? ( (namespacedQualifiedIdent | typeId) )? (designatorItem)*
                             | typeId
                             | designatorItem+
                             ;
designatorItem               : '^'
                             | (DOT | '@') ident              //CHANGED added '@'
                             | '<' genericTypeIdent (COMMA genericTypeIdent)* '>'       //ADDED for proc<sth, sth>.foo;
                             | '[' expressionList ']'
                             | '(' (expression (colonConstruct)? (COMMA expression (colonConstruct)?)*)? ')' 
                             ;
expressionList               : expression (COMMA expression)*
                             ;
colonConstruct               : ':' expression (':' expression)?
                             ;
// Alleen voor Write/WriteLn.
operator                     : '+'
                             | '-'
                             | 'or'
                             | 'xor'
                             | '*'
                             | '/'
                             | 'div'
                             | 'mod'
                             | 'and'
                             | 'shl'
                             | 'shr'
                             | 'as'
                             ;
relOp                        : '<'
                             | '>'
                             | '<='
                             | '>='
                             | '<>'
                             | '='
                             | 'in'
                             | 'is'
                             ;
//****************************
//section statement
//****************************

statement                    : ifStatement
                             | caseStatement
                             | repeatStatement
                             | whileStatement
                             | forStatement
                             | withStatement
                             | tryStatement
                             | raiseStatement
                             | assemblerStatement
                             | compoundStatement
                             | label ':' statement
                             | simpleStatement
                             ;
ifStatement                  : 'if' expression 'then' statement ('else' statement)? 
                             ;
caseStatement                : 'case' expression 'of' (caseItem)* ('else' statementList (SEMI)?)? END
                             ;
caseItem                     : caseLabel (COMMA caseLabel)* ':' statement (SEMI)? // checken of ; sep of scheider is
                             ;
caseLabel                    : expression ('..' expression)?
                             ;
repeatStatement              : 'repeat' (statementList)? 'until' expression
                             ;
whileStatement               : 'while' expression DO statement
                             ;
forStatement                 : FOR designator ASSIGN expression 'to' expression DO statement
                             | FOR designator ASSIGN expression 'downto' expression DO statement
                             | FOR designator 'in' expression DO statement
                             ;
withStatement                : 'with' withItem DO statement
                             ;
withItem                     : designator 'as' designator       //ADDED
                             | designator (COMMA designator)*
                             ;
compoundStatement            : 'begin' (statementList)? END 
                             ;
statementList                : statement (SEMI (statement)?)*
                             ;
simpleStatement              : designator ASSIGN expression
                             | designator // call
                             | gotoStatement
                             ;
gotoStatement                : 'goto' label
                             | 'exit' ('(' expression ')')?   
                             | ( 'break'                          
                             | 'continue' )
                             ;
//****************************
//section constExpression
//****************************
constExpression              : '(' recordConstExpression (SEMI recordConstExpression)* ')' //CHANGED reversed order
                             | '(' constExpression (COMMA constExpression)* ')'
                             | expression
                             ;
recordConstExpression        : ident ':' constExpression
                             ;
//****************************
//section exceptionStatement
//****************************
tryStatement                 : TRY (statementList)? EXCEPT handlerList END  
                             | TRY (statementList)? FINALLY (statementList)? END
                             ;
handlerList                  : (handler)* ('else' statementList)?
                             | statementList
                             ;
handler                      : 'on' (handlerIdent)? typeId DO handlerStatement  //CHANGED - ; is not required ; handlerIdent not required, example:  "on einvalidoperation do;"
                             ;
handlerIdent                 : ident ':'
                             ;
handlerStatement             : statement (SEMI)?
                             | SEMI
                             ;
raiseStatement               : 'raise' (designator)? (AT designator)? // CHECKEN!
                             ;           
//****************************
//section AssemblerStatement
//****************************
assemblerStatement           : 'asm' ~(END)* END    //ADDED we don't realy care about assembler statements, since they don't contribute to
                             ;                //any measure, just skip, allow all
//****************************
//section directive
//****************************
methodDirective              : reintroduceDirective         // 1
                             | overloadDirective            // 2
                             | bindingDirective             // 3
                             | abstractDirective            // 3 virtual;
                             | inlineDirective              // 4 niet virtual or dynamic
                             | callConvention               // 4
                             | hintingDirective SEMI       // 4 (niet abstract)
                             | oldCallConventionDirective   // 1
                             | dispIDDirective
                             ;
functionDirective            : overloadDirective          // 1
                             | inlineDirective            // 1
                             | callConvention             // 1
                             | oldCallConventionDirective // 1
                             | hintingDirective SEMI      // 1
                             | (callConventionNoSemi)? externalDirective          // 1
                             | 'unsafe' SEMI              // 1 .net?
                             ;
reintroduceDirective         : 'reintroduce' SEMI
                             ;
overloadDirective            : 'overload' (SEMI)?    //CHANGE ; not needed
                             ;
bindingDirective             : 'message' expression SEMI
                             | 'static' SEMI
                             | 'dynamic' SEMI
                             | 'override' SEMI
                             | 'virtual' SEMI
                             ;
abstractDirective            : 'abstract' SEMI
                             | 'final' SEMI
                             ;
inlineDirective              : 'inline' SEMI
                             | 'assembler' SEMI // deprecated
                             ;
callConvention               : 'cdecl' SEMI    //
                             | 'pascal' SEMI   //
                             | 'register' SEMI //
                             | 'safecall' SEMI //
                             | 'stdcall' SEMI  //
                             | 'export' SEMI   // deprecated
                             ;
callConventionNoSemi         : 'cdecl'    //    //ADDED for procedureType error fixing, without SEMI at the end
                             | 'pascal'   //
                             | 'register' //
                             | 'safecall' //
                             | 'stdcall'  //
                             | 'export'   // deprecated
                             ;
oldCallConventionDirective   : 'far' SEMI      // deprecated
                             | 'local' SEMI    // niet in windows maakt functie niet exporteerbaar
                             | 'near' SEMI     // deprecated
                             ;
hintingDirective             : 'deprecated' (stringFactor)?
                             | ( 'experimental'  // added 2006
                             | 'platform'
                             | 'library' )
                             ;
externalDirective            : 'varargs' SEMI   // alleen bij external cdecl
                             | 'external' SEMI
                             | 'external' constExpression (externalSpecifier)* SEMI // expression : dll name
                             ;
externalSpecifier            : 'name' constExpression
                             | 'index' constExpression   // specific to a platform
                             ;
dispIDDirective              : 'dispid' expression SEMI
                             ;
//****************************
////section general
//****************************
ident                        : TkIdentifier
                             | AMBER TkIdentifier
                             | usedKeywordsAsNames
                             ;                 
usedKeywordsAsNames          : (NAME | READONLY | ADD | AT | MESSAGE | POINTER | INDEX | DEFAULT | STRING | CONTINUE)
                             | (READ | WRITE | REGISTER | VARIANT | OPERATOR | REMOVE | LOCAL | REFERENCE | CONTAINS | FINAL)
                             | (BREAK | EXIT | STRICT | OUT | OBJECT | EXPORT | ANSISTRING | IMPLEMENTS | STORED)
                             ;                           
identList                    : ident (COMMA ident)* 
                             ;
identListFlat                : ident (COMMA ident)*    //ADDED used in formalParemeter
                             ;                                                          
label                        : ( TkIdentifier | TkIntNum | TkHexNum ) | usedKeywordsAsNames 
                             ;
intNum                       : TkIntNum
                             | TkHexNum
                             ;                             
realNum                      : TkRealNum
                             ;                             
namespacedQualifiedIdent     : (namespaceName DOT)? qualifiedIdent
                             ;
namespaceName                : ident (DOT ident)*
                             ;
qualifiedIdent               :  (ident DOT)*  ident   //must stay the way it is, with DOT for proper class method identyfication
                             ;
                                   
// KEYWORDS
ABSOLUTE          : 'absolute'       ;
ABSTRACT          : 'abstract'       ;
ADD               : 'add'            ;
AND               : 'and'            ;
ANSISTRING        : 'ansistring'     ;
ARRAY             : 'array'          ;
AS                : 'as'             ;
ASM               : 'asm'            ;
ASSEMBLER         : 'assembler'      ;
ASSEMBLY          : 'assembly'       ;
AT                : 'at'             ;
AUTOMATED         : 'automated'      ;
BEGIN             : 'begin'          ;
BREAK             : 'break'          ;
CASE              : 'case'           ;
CDECL             : 'cdecl'          ;
CLASS             : 'class'          ;
CONST             : 'const'          ;
CONSTRUCTOR       : 'constructor'    ;
CONTAINS          : 'contains'       ;
CONTINUE          : 'continue'       ;
DEFAULT           : 'default'        ;
DEPRECATED        : 'deprecated'     ;
DESTRUCTOR        : 'destructor'     ;
DISPID            : 'dispid'         ;
DISPINTERFACE     : 'dispinterface'  ;
DIV               : 'div'            ;
DO                : 'do'             ;
DOWNTO            : 'downto'         ;
DQ                : 'dq'             ;
DW                : 'dw'             ;
DYNAMIC           : 'dynamic'        ;
ELSE              : 'else'           ;
END               : 'end'            ;
EXCEPT            : 'except'         ;
EXIT              : 'exit'           ;
EXPERIMENTAL      : 'experimental'   ;
EXPORT            : 'export'         ;
EXPORTS           : 'exports'        ;
EXTERNAL          : 'external'       ;
FAR               : 'far'            ;
FILE              : 'file'           ;
FINAL             : 'final'          ;
FINALIZATION      : 'finalization'   ;
FINALLY           : 'finally'        ;
FOR               : 'for'            ;
FORWARD           : 'forward'        ;
FUNCTION          : 'function'       ;
GOTO              : 'goto'           ;
HELPER            : 'helper'         ;
IF                : 'if'             ;
IMPLEMENTATION    : 'implementation' ;
IMPLEMENTS        : 'implements'     ;
IN                : 'in'             ;
INDEX             : 'index'          ;
INHERITED         : 'inherited'      ;
INITIALIZATION    : 'initialization' ;
INLINE            : 'inline'         ;
INTERFACE         : 'interface'      ;
IS                : 'is'             ;
LABEL             : 'label'          ;
LIBRARY           : 'library'        ;
LOCAL             : 'local'          ;
MESSAGE           : 'message'        ;
MOD               : 'mod'            ;
NAME              : 'name'           ;
NEAR              : 'near'           ;
NIL               : 'nil'            ;
NODEFAULT         : 'nodefault'      ;
NOT               : 'not'            ;
OBJECT            : 'object'         ;
OF                : 'of'             ;
ON                : 'on'             ;
OPERATOR          : 'operator'       ;
OR                : 'or'             ;
OUT               : 'out'            ;
OVERLOAD          : 'overload'       ;
OVERRIDE          : 'override'       ;
PACKAGE           : 'package'        ;
PACKED            : 'packed'         ;
PASCAL            : 'pascal'         ;
PLATFORM          : 'platform'       ;
POINTER           : 'pointer'        ;
PRIVATE           : 'private'        ;
PROCEDURE         : 'procedure'      ;
PROGRAM           : 'program'        ;
PROPERTY          : 'property'       ;
PROTECTED         : 'protected'      ;
PUBLIC            : 'public'         ;
PUBLISHED         : 'published'      ;
RAISE             : 'raise'          ;
READ              : 'read'           ;
READONLY          : 'readonly'       ;
RECORD            : 'record'         ;
REFERENCE         : 'reference'      ;
REGISTER          : 'register'       ;
REINTRODUCE       : 'reintroduce'    ;
REMOVE            : 'remove'         ;
REPEAT            : 'repeat'         ;
REQUIRES          : 'requires'       ;
RESIDENT          : 'resident'       ;
RESOURCESTRING    : 'resourcestring' ;
SAFECALL          : 'safecall'       ;
SEALED            : 'sealed'         ;
SET               : 'set'            ;
SHL               : 'shl'            ;
SHR               : 'shr'            ;
STATIC            : 'static'         ;
STDCALL           : 'stdcall'        ;
STORED            : 'stored'         ;
STRICT            : 'strict'         ;
STRING            : 'string'         ;
THEN              : 'then'           ;
THREADVAR         : 'threadvar'      ;
TO                : 'to'             ;
TRY               : 'try'            ;
TYPE              : 'type'           ;
UNIT              : 'unit'           ;
UNSAFE            : 'unsafe'         ;
UNTIL             : 'until'          ;
USES              : 'uses'           ;
VAR               : 'var'            ;
VARARGS           : 'varargs'        ;
VARIANT           : 'variant'        ;
VIRTUAL           : 'virtual'        ;
WHILE             : 'while'          ;
WITH              : 'with'           ;
WRITE             : 'write'          ;
WRITEONLY         : 'writeonly'      ;
XOR               : 'xor'            ;
FALSE             : 'false'          ;
TRUE              : 'true'           ;

//----------------------------------------------------------------------------
// OPERATORS
//----------------------------------------------------------------------------
PLUS              : '+'   ;
MINUS             : '-'   ;
STAR              : '*'   ;
SLASH             : '/'   ;
ASSIGN            : ':='  ;
COMMA             : ','   ;
SEMI              : ';'   ;
COLON             : ':'   ;
EQUAL             : '='   ;
NOT_EQUAL         : '<>'  ;
LT                : '<'   ;
LE                : '<='  ;
GE                : '>='  ;
GT                : '>'   ;
LPAREN            : '('   ;
RPAREN            : ')'   ;
LBRACK            : '['   ; // line_tab[line]
LBRACK2           : '(.'  ; // line_tab(.line.)
RBRACK            : ']'   ;
RBRACK2           : '.)'  ;
POINTER2          : '^'   ;
AT2               : '@'   ;
DOT               : '.'   ;// ('.' {$setType(DOTDOT);})?  ;
DOTDOT            : '..'  ;
LCURLY            : '{'   ;
RCURLY            : '}'   ;     

AMBER             : '&'   ;
DOUBLEAT          : '@@'  ;

//****************************
//section token
//****************************
TkGlobalFunction        : 'FUNCTION_GLOBAL'
                        ;
TkFunctionName          : 'FUNCTION_NAME'
                        ;
TkFunctionArgs          : 'FUNCTION_ARGS'
                        ;
TkFunctionBody          : 'FUNCTION_BODY'
                        ;
TkFunctionReturn        : 'FUNCTION_RETURN'
                        ;
TkCustomAttribute       : 'CUSTOM_ATTRIBUTE'
                        ;
TkCustomAttributeArgs   : 'CUSTOM_ATTRIBUTE_ARGS'
                        ;
TkNewType               : 'NEW_TYPE'
                        ;
TkClass                 : 'CLASS'
                        ;
TkRecord                : 'RECORD_TYPE'
                        ;
TkRecordHelper          : 'RECORD_HELPER'
                        ;
TkInterface             : 'INTERFACE_TYPE'
                        ;
TkObject                : 'OBJECT_TYPE'
                        ;
TkClassOfType           : 'CLASS_OF_TYPE'
                        ;
TkVariableType          : 'VARIABLE_TYPE'
                        ;
TkVariableIdents        : 'VARIABLE_IDENTS'
                        ;
TkVariableParam         : 'VARIABLE_PARAM'
                        ;
TkGuid                  : 'INTERFACE_GUID'
                        ;
TkClassParents          : 'CLASS_PARENTS'
                        ;
TkClassField            : 'CLASS_FIELD'
                        ;
TkAnonymousExpression   : 'ANONYMOUS_EXPRESSION'
                        ;
TkIdentifier            : (Alpha | '_') (Alpha | Digit | '_')*
                        ;  
TkIntNum                : Digitseq
                        ;
TkRealNum               : Digitseq (DOT Digitseq)? ('e' ('+'|'-')? Digitseq)?  //CHANGED
                        ;
TkHexNum                : '$' Hexdigitseq
                        ;
TkAsmHexNum             : Hexdigitseq ('h')
                        ;
TkAsmHexLabel           : Hexdigitseq ':'
                        ;
QuotedString            : '\'' ('\'\'' | ~('\''))* '\''   //taken from PASCAL grammar
                        ;
ControlString           : Controlchar (Controlchar)*
                        ;
                        
fragment                
Controlchar             : '#' Digitseq
                        | '#' '$' Hexdigitseq
                        ;
fragment                
Alpha                   : 'a'..'z'
                        | 'A'..'Z'
                        | '\u0080'..'\uFFFE' ~('\uFEFF') //ADDED unicode support
                        ;
fragment                
Digit                   : '0'..'9'
                        ;
fragment                
Digitseq                : Digit (Digit)*
                        ;
fragment                
Hexdigit                : Digit | 'a'..'f' | 'A'..'F'
                        ;
Hexdigitseq             : Hexdigit (Hexdigit)*
                        ;
COMMENT                 :  ( '//' ~('\n'|'\r')* '\r'? '\n'           
                        |  '(*' .*? '*)'  
                        |  '{' .*? '}')    -> skip
                        ;                 
WS                      : (' '|'\t'|'\r'|'\n'|'\f')+ -> skip
                        ;
UnicodeBOM              : '\uFEFF' -> skip 
                        ;                             