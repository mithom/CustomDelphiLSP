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
 * Updated again by Thomas Michiels to correct mistakes/remove personal stuff
 */
options {
                             caseInsensitive = true;
}

@lexer::namespace {DelphiGrammar}
@parser::namespace {DelphiGrammar}
//****************************
//section start
//****************************
file
                             : program | library | unit | packageE
                             ;
//****************************
//section fileDefinition
//****************************

program
                             : programHead? usesFileClause? block DOT
                             ;
programHead
                             : PROGRAM namespaceName programParmSeq? SEMI
                             ;
programParmSeq
                             : LPAREN (ident (COMMA ident)*)? RPAREN
                             ;
library
                             : libraryHead usesFileClause? block DOT
                             ;
libraryHead
                             : LIBRARY namespaceName hintingDirective* SEMI
                             ;
packageE
                             : packageHead requiresClause containsClause? END DOT
                             ;
packageHead
                             : PACKAGE namespaceName SEMI
                             ;
unit
                             : unitHead unitInterface unitImplementation unitBlock DOT
                             ;
unitHead
                             : UNIT namespaceName hintingDirective* SEMI
                             ;
unitInterface
                             : INTERFACE usesClause? interfaceDecl*
                             ;
unitImplementation
                             : IMPLEMENTATION usesClause? declSection*
                             ;
unitBlock
                             : unitInitialization END | compoundStatement | END
                             ;
unitInitialization
                             : INITIALIZATION statementList unitFinalization?
                             ;
unitFinalization
                             : FINALIZATION statementList
                             ;
//****************************
//section fileUsage
//****************************
containsClause
                             : CONTAINS namespaceFileNameList
                             ;
requiresClause
                             : REQUIRES namespaceNameList
                             ;
usesClause
                             : USES namespaceNameList
                             ;
usesFileClause
                             : USES namespaceFileNameList
                             ;
namespaceFileNameList
                             : namespaceFileName (
                                                          COMMA namespaceFileName
                             )* SEMI
                             ;
namespaceFileName
                             : namespaceName (IN QuotedString)?
                             ;
namespaceNameList
                             : namespaceName (COMMA namespaceName)* SEMI
                             ;
//****************************
//section declaration
//****************************
block
                             : declSection* blockBody?
                             ;
blockBody
                             : compoundStatement | assemblerStatement
                             ;
declSection
                             : labelDeclSection
                             | constSection
                             | typeSection
                             | varSection
                             | exportedProcHeading
                             | methodDecl
                             | procDecl
                             | exportsSection
                             ;
interfaceDecl
                             : procDecl
                             | methodDecl
                             | typeSection
                             | varSection
                             | exportedProcHeading
                             | exportsSection
                             | constSection
                             ;
labelDeclSection
                             : LABEL label (COMMA label)* SEMI
                             ;
constSection
                             : constKey constDeclaration*
                             //CHANGED, erased one constDeclaration, for: "const {$include versioninfo.inc }"
                             ;
constKey
                             : CONST | RESOURCESTRING
                             ;
constDeclaration
                             : ident (COLON typeDecl)? EQUAL constExpression hintingDirective* SEMI
                             ;
typeSection
                             : TYPE typeDeclaration typeDeclaration*
                             ;
typeDeclaration
                             : genericTypeIdent EQUAL typeDecl hintingDirective* SEMI
                             ;
varSection
                             : varKey varDeclaration varDeclaration*
                             ;
varKey
                             : VAR | THREADVAR
                             ;
// threadvar geen initializations alleen globaal
varDeclaration
                             : identListFlat COLON typeDecl varValueSpec? hintingDirective* SEMI
                             ;
varValueSpec
                             : ABSOLUTE ident
                             | ABSOLUTE constExpression
                             | EQUAL constExpression
                             ;
exportsSection
                             : EXPORTS ident exportItem (
                                                          COMMA ident exportItem
                             )* SEMI
                             ;
exportItem
                             : (
                                                          LPAREN formalParameterList? RPAREN
                             )? (INDEX expression)? (
                                                          NAME expression
                             )? ('resident')?
                             ;
//****************************
//section type
//****************************
typeDecl
                             : strucType
                             | pointerType
                             | stringType
                             | procedureType
                             | variantType
                             | TYPE? typeId genericPostfix?
                             | simpleType
                             ;
strucType
                             : PACKED? strucTypePart
                             ;
strucTypePart
                             : arrayType | setType | fileType | classDecl
                             ;

arrayType
                             : ARRAY (
                                                          LBRACK arrayIndex? (
                                                                                       COMMA
                                                                                       arrayIndex?
                                                          )* RBRACK
                             )? OF arraySubType
                             //CHANGED we only need type info
                             ;

arrayIndex
                             : typeId | expression '..' expression
                             ;

arraySubType
                             : CONST | typeDecl
                             ;
setType
                             : SET OF typeDecl //CHANGED we only need type info
                             ;
// set type alleen ordinal of subrange type
fileType
                             : FILE (OF typeDecl)?
                             ;
pointerType
                             : POINTER2 typeDecl | POINTER
                             ;
stringType
                             : STRING (LBRACK expression RBRACK)?
                             | TYPE? ANSISTRING codePageNumber?
                             ;
codePageNumber
                             : LPAREN intNum RPAREN
                             ;
procedureType
                             : methodType
                             | simpleProcedureType
                             | procedureReference
                             ;
methodType
                             : procedureTypeHeading OF OBJECT
                             ;
simpleProcedureType
                             : procedureTypeHeading (
                                                          SEMI? callConventionNoSemi
                             )?
                             ;
procedureReference
                             : REFERENCE TO procedureTypeHeading
                             ;
procedureTypeHeading
                             : FUNCTION formalParameterSection? COLON typeDecl
                             | PROCEDURE formalParameterSection?
                             ;
variantType
                             : 'variant' // SzJ TODO TEMP
                             ;
simpleType
                             : ident | subRangeType | enumType
                             ;
subRangeType
                             : constExpression ('..' constExpression)?
                             ;
enumType
                             : LPAREN ident (EQUAL expression)? (
                                                          COMMA ident (
                                                                                       EQUAL
                                                                                       expression
                                                          )?
                             )* RPAREN
                             ;
typeId
                             : namespacedQualifiedIdent
                             ;
//****************************
//section generics
//****************************
genericTypeIdent
                             : qualifiedIdent genericDefinition?
                             //CHANGED we don't need <Type> data, it produced empty nodes
                             ;
genericDefinition
                             : simpleGenericDefinition
                             | constrainedGenericDefinition
                             ;
simpleGenericDefinition
                             : LT ident (COMMA ident)* GT
                             ;
constrainedGenericDefinition
                             : LT constrainedGeneric (
                                                          SEMI constrainedGeneric
                             )* GT
                             ;
constrainedGeneric
                             : ident (
                                                          COLON genericConstraint (
                                                                                       COMMA
                                                                                       genericConstraint
                                                          )*
                             )?
                             ;
genericConstraint
                             : ident | ( RECORD | CLASS | CONSTRUCTOR)
                             ;
genericPostfix
                             : LT typeDecl (COMMA typeDecl)* GT
                             ;
//****************************
//section class
//****************************
classDecl
                             : classTypeTypeDecl
                             | classTypeDecl
                             | classHelperDecl
                             | interfaceTypeDecl
                             | objectDecl
                             | recordDecl
                             | recordHelperDecl
                             ;
classTypeTypeDecl
                             : CLASS OF typeId
                             ;
classTypeDecl
                             : CLASS classState? classParent? classItem* END
                             | CLASS classParent?
                             ;
classState
                             : 'sealed' | ABSTRACT
                             ;
classParent
                             : LPAREN genericTypeIdent (
                                                          COMMA genericTypeIdent
                             )* RPAREN //CHANGEd from typeId to classParentId
                             ;
classItem
                             : visibility
                             | classMethod
                             | classField
                             | classProperty
                             | constSection
                             | typeSection
                             | CLASS? varSection
                             ;
classHelperDecl
                             : CLASS HELPER classParent? FOR typeId classHelperItem* END
                             //CHANGED, we only need "for" class name
                             ;
classHelperItem
                             : visibility
                             | classMethod
                             | classProperty
                             | CLASS? varSection
                             ;
interfaceTypeDecl
                             : interfaceKey classParent? interfaceGuid? interfaceItem* END
                             | interfaceKey classParent?
                             ;
interfaceKey
                             : INTERFACE | DISPINTERFACE
                             ;
interfaceGuid
                             : LBRACK QuotedString RBRACK
                             ;
interfaceItem
                             : classMethod | CLASS? classProperty
                             ;
objectDecl
                             : OBJECT classParent? objectItem* END
                             ;
objectItem
                             : visibility | classMethod | classField
                             ;
recordDecl
                             : simpleRecord | variantRecord
                             ;
simpleRecord
                             : RECORD recordField* recordItem* END
                             ;
variantRecord
                             : RECORD recordField* recordVariantSection END
                             ;
recordItem
                             : visibility //ADDED
                             | classMethod
                             | classProperty
                             | constSection
                             | typeSection
                             | recordField
                             | CLASS? varSection
                             ;
recordField
                             : identList COLON typeDecl hintingDirective* SEMI?
                             //CHANGED not needed ; at the end
                             ;
recordVariantField
                             : identList COLON typeDecl hintingDirective* SEMI?
                             ;
recordVariantSection
                             : CASE (ident COLON)? typeDecl OF (
                                                          recordVariant
                                                          | SEMI
                             ) (recordVariant | SEMI)*
                             ;
recordVariant
                             : constExpression (
                                                          COMMA constExpression
                             )* COLON LPAREN recordVariantField* RPAREN
                             //CHANGED to recordVariantField from recordField
                             ;
recordHelperDecl
                             : RECORD HELPER FOR typeId recordHelperItem* END
                             ;
recordHelperItem
                             : visibility | classMethod | classProperty
                             ;
classMethod
                             : CLASS? methodKey ident genericDefinition? formalParameterSection?
                             SEMI methodDirective*
                             | CLASS? FUNCTION ident genericDefinition? formalParameterSection?
                             COLON typeDecl SEMI methodDirective*
                             | CLASS? OPERATOR ident genericDefinition? formalParameterSection?
                             COLON typeDecl SEMI
                             ;
classField
                             : identList COLON typeDecl SEMI hintingDirective*
                             ;
classProperty
                             : CLASS? PROPERTY ident classPropertyArray? (
                                                          COLON genericTypeIdent
                             )? classPropertyIndex? classPropertySpecifier* SEMI
                             classPropertyEndSpecifier*
                             // CHANGED added (classPropertySpecifier)* at end for "default;"
                             // CHANGEDD to genericTypeIdent for "property QueryBuilder : IQueryBuilder<GenericRecord>"
                             ;
classPropertyArray
                             : LBRACK formalParameterList RBRACK
                             ;
classPropertyIndex
                             : INDEX expression SEMI? //CHANGED to (SEMI)?
                             ;
classPropertySpecifier
                             : classPropertyReadWrite //CHANGED removed SEMI
                             | classPropertyDispInterface
                             | STORED expression
                             | DEFAULT expression
                             | (
                                                          DEFAULT
                                                          // for array properties only (1 per class)
                                                          | 'nodefault'
                             )
                             | IMPLEMENTS typeId
                             ;
classPropertyEndSpecifier
                             : STORED expression SEMI //ADDED used in classProperty at end
                             | DEFAULT expression SEMI
                             | DEFAULT SEMI
                             | 'nodefault' SEMI
                             ;

classPropertyReadWrite
                             : READ qualifiedIdent (
                                                          LBRACK expression RBRACK
                             )? // Waarom qualified ident???  //ADDED []
                             | WRITE qualifiedIdent (
                                                          LBRACK expression RBRACK
                             )? //ADDED []
                             ;
classPropertyDispInterface
                             : READONLY SEMI
                             | WRITEONLY SEMI
                             | dispIDDirective
                             ;
visibility
                             : STRICT? PROTECTED
                             | STRICT? PRIVATE
                             | (
                                                          PUBLIC
                                                          | PUBLISHED
                                                          | AUTOMATED
                             ) // win32 deprecated
                             ;
//****************************
//section procedure
//****************************
exportedProcHeading
                             : PROCEDURE ident formalParameterSection? COLON typeDecl SEMI
                             functionDirective*
                             | FUNCTION ident formalParameterSection? SEMI functionDirective*
                             ;
methodDecl
                             : methodDeclHeading SEMI methodDirective* methodBody?
                             ;
methodDeclHeading
                             : CLASS? methodKey methodName formalParameterSection?
                             | CLASS? FUNCTION methodName formalParameterSection? (
                                                          COLON typeDecl
                             )?
                             | CLASS OPERATOR methodName formalParameterSection? (
                                                          COLON typeDecl
                             )?
                             ;
methodKey
                             : PROCEDURE | CONSTRUCTOR | DESTRUCTOR
                             ;
methodName
                             : ident genericDefinition? (
                                                          DOT ident genericDefinition?
                             )? DOT ident genericDefinition?
                             ;
procDecl
                             : procDeclHeading SEMI functionDirective* procBody? //CHANGED
                             ;
procDeclHeading
                             : PROCEDURE ident formalParameterSection? //CHANGED
                             | FUNCTION ident formalParameterSection? COLON typeDecl
                             ;
formalParameterSection
                             : LPAREN formalParameterList? RPAREN
                             ;
formalParameterList
                             : formalParameter (SEMI formalParameter)*
                             ;
formalParameter
                             : parmType? identListFlat (
                                                          COLON typeDecl
                             )? (EQUAL expression)?
                             //expressions was cut out, beacause we dont have to know default variable values; they were causing troubles with DelphiCodeAnalyser
                             ;
parmType
                             : CONST | VAR | OUT
                             ;
methodBody
                             : block SEMI
                             ;
procBody
                             : FORWARD SEMI functionDirective* // CHECKEN ; en directive plaats!
                             | EXTERNAL (
                                                          NAME expression
                                                          | INDEX expression
                             )* functionDirective* // CHECKEN directive plaats
                             | block SEMI
                             ;

//****************************
//section expression
//****************************
expression
                             : anonymousExpression
                             | simpleExpression (
                                                          relOp simpleExpression
                             )? (EQUAL expression)?
                             //CHANGED, added expression for: "if( functionCall(x, 7+66) = true ) then" syntax
                             ;
anonymousExpression
                             : PROCEDURE formalParameterSection? block
                             | FUNCTION formalParameterSection? COLON typeDecl block
                             ;
simpleExpression
                             : factor (operator factor)*
                             ;
factor
                             : AT2 factor
                             | DOUBLEAT factor // used to get address of proc var
                             | NOT factor
                             | PLUS factor
                             | MINUS factor
                             | POINTER2 ident // geeft volgnummer van letter
                             | intNum
                             | realNum
                             | (
                                                          TkAsmHexNum // Alleen in asm statement
                                                          | TRUE
                                                          | FALSE
                                                          | NIL
                             )
                             | LPAREN expression RPAREN POINTER2? (
                                                          DOT expression
                             )?
                             //CHANGED, added  ('^')? (DOT qualifiedIdent)?
                             | stringFactor
                             | setSection
                             | designator
                             | typeId LPAREN expression RPAREN
                             ;
stringFactor
                             : ControlString (
                                                          QuotedString ControlString
                             )* QuotedString?
                             | QuotedString (
                                                          ControlString QuotedString
                             )* ControlString?
                             ;
setSection
                             : LBRACK (
                                                          expression (
                                                                                       (
                                                                                                                    COMMA
                                                                                                                    |
                                                                                                                    '..'
                                                                                       ) expression
                                                          )*
                             )? RBRACK
                             ;

designator
                             : INHERITED
                             // ('inherited')? ( (namespacedQualifiedIdent | typeId) )? (designatorItem)*
                             | typeId
                             | designatorItem+
                             ;
designatorItem
                             : POINTER2
                             | (DOT | AT2) ident //CHANGED added '@'
                             | LT genericTypeIdent (
                                                          COMMA genericTypeIdent
                             )* GT //ADDED for proc<sth, sth>.foo
                             | LBRACK expressionList RBRACK
                             | LPAREN (
                                                          expression colonConstruct? (
                                                                                       COMMA
                                                                                       expression
                                                                                       colonConstruct
                                                                                       ?
                                                          )*
                             )? RPAREN
                             ;
expressionList
                             : expression (COMMA expression)*
                             ;
colonConstruct
                             : COLON expression (COLON expression)?
                             ;
// Alleen voor Write/WriteLn.
operator
                             : PLUS
                             | MINUS
                             | OR
                             | XOR
                             | STAR
                             | SLASH
                             | DIV
                             | MOD
                             | AND
                             | SHL
                             | SHR
                             | AS
                             ;
relOp
                             : LT | GT | LE | GE | NOT_EQUAL | EQUAL | IN | IS
                             ;
//****************************
//section statement
//****************************

statement
                             : ifStatement
                             | caseStatement
                             | repeatStatement
                             | whileStatement
                             | forStatement
                             | withStatement
                             | tryStatement
                             | raiseStatement
                             | assemblerStatement
                             | compoundStatement
                             | label COLON statement
                             | simpleStatement
                             ;
ifStatement
                             : IF expression THEN statement (ELSE statement)?
                             ;
caseStatement
                             : CASE expression OF caseItem* (
                                                          ELSE statementList SEMI?
                             )? END
                             ;
caseItem
                             : caseLabel (COMMA caseLabel)* COLON statement SEMI?
                             // checken of ; sep of scheider is
                             ;
caseLabel
                             : expression ('..' expression)?
                             ;
repeatStatement
                             : REPEAT statementList? UNTIL expression
                             ;
whileStatement
                             : WHILE expression DO statement
                             ;
forStatement
                             : FOR designator ASSIGN expression TO expression DO statement
                             | FOR designator ASSIGN expression DOWNTO expression DO statement
                             | FOR designator IN expression DO statement
                             ;
withStatement
                             : WITH withItem DO statement
                             ;
withItem
                             : designator AS designator //ADDED
                             | designator (COMMA designator)*
                             ;
compoundStatement
                             : BEGIN statementList? END
                             ;
statementList
                             : statement (SEMI statement?)*
                             ;
simpleStatement
                             : designator ASSIGN expression
                             | designator // call
                             | gotoStatement
                             ;
gotoStatement
                             : GOTO label
                             | EXIT (LPAREN expression RPAREN)?
                             | ( BREAK | CONTINUE)
                             ;
//****************************
//section constExpression
//****************************
constExpression
                             : LPAREN recordConstExpression (
                                                          SEMI recordConstExpression
                             )* RPAREN //CHANGED reversed order
                             | LPAREN constExpression (
                                                          COMMA constExpression
                             )* RPAREN
                             | expression
                             ;
recordConstExpression
                             : ident COLON constExpression
                             ;
//****************************
//section exceptionStatement
//****************************
tryStatement
                             : TRY statementList? EXCEPT handlerList END
                             | TRY statementList? FINALLY statementList? END
                             ;
handlerList
                             : handler* (ELSE statementList)? | statementList
                             ;
handler
                             : ON handlerIdent? typeId DO handlerStatement
                             //CHANGED - ; is not required ; handlerIdent not required, example:  "on einvalidoperation do;"
                             ;
handlerIdent
                             : ident COLON
                             ;
handlerStatement
                             : statement SEMI? | SEMI
                             ;
raiseStatement
                             : RAISE designator? (AT designator)? // CHECKEN!
                             ;
//****************************
//section AssemblerStatement
//****************************
assemblerStatement
                             : ASM ~(END)* END
                             //ADDED we don't realy care about assembler statements, since they don't contribute to
                             ; //any measure, just skip, allow all
//****************************
//section directive
//****************************
methodDirective
                             : reintroduceDirective // 1
                             | overloadDirective // 2
                             | bindingDirective // 3
                             | abstractDirective // 3 virtual;
                             | inlineDirective // 4 niet virtual or dynamic
                             | callConvention // 4
                             | hintingDirective SEMI // 4 (niet abstract)
                             | oldCallConventionDirective // 1
                             | dispIDDirective
                             ;
functionDirective
                             : overloadDirective // 1
                             | inlineDirective // 1
                             | callConvention // 1
                             | oldCallConventionDirective // 1
                             | hintingDirective SEMI // 1
                             | callConventionNoSemi? externalDirective // 1
                             | UNSAFE SEMI // 1 .net?
                             ;
reintroduceDirective
                             : REINTRODUCE SEMI
                             ;
overloadDirective
                             : OVERLOAD SEMI? //CHANGE ; not needed
                             ;
bindingDirective
                             : MESSAGE expression SEMI
                             | STATIC SEMI
                             | DYNAMIC SEMI
                             | OVERRIDE SEMI
                             | VIRTUAL SEMI
                             ;
abstractDirective
                             : ABSTRACT SEMI | FINAL SEMI
                             ;
inlineDirective
                             : INLINE SEMI
                             | ASSEMBLER SEMI // deprecated
                             ;
callConvention
                             : CDECL SEMI //
                             | PASCAL SEMI //
                             | REGISTER SEMI //
                             | SAFECALL SEMI //
                             | STDCALL SEMI //
                             | EXPORT SEMI // deprecated
                             ;
callConventionNoSemi
                             : CDECL
                             //    //ADDED for procedureType error fixing, without SEMI at the end
                             | PASCAL //
                             | REGISTER //
                             | SAFECALL //
                             | STDCALL //
                             | EXPORT // deprecated
                             ;
oldCallConventionDirective
                             : FAR SEMI // deprecated
                             | LOCAL SEMI // niet in windows maakt functie niet exporteerbaar
                             | NEAR SEMI // deprecated
                             ;
hintingDirective
                             : DEPRECATED stringFactor?
                             | (
                                                          EXPERIMENTAL // added 2006
                                                          | PLATFORM
                                                          | LIBRARY
                             )
                             ;
externalDirective
                             : VARARGS SEMI // alleen bij external cdecl
                             | EXTERNAL SEMI
                             | EXTERNAL constExpression externalSpecifier* SEMI
                             // expression : dll name
                             ;
externalSpecifier
                             : NAME constExpression
                             | INDEX constExpression // specific to a platform
                             ;
dispIDDirective
                             : DISPID expression SEMI
                             ;
//****************************
////section general
//****************************
ident
                             : TkIdentifier | AMBER TkIdentifier | usedKeywordsAsNames
                             ;
usedKeywordsAsNames
                             : (
                                                          NAME
                                                          | READONLY
                                                          | ADD
                                                          | AT
                                                          | MESSAGE
                                                          | POINTER
                                                          | INDEX
                                                          | DEFAULT
                                                          | STRING
                                                          | CONTINUE
                             )
                             | (
                                                          READ
                                                          | WRITE
                                                          | REGISTER
                                                          | VARIANT
                                                          | OPERATOR
                                                          | REMOVE
                                                          | LOCAL
                                                          | REFERENCE
                                                          | CONTAINS
                                                          | FINAL
                             )
                             | (
                                                          BREAK
                                                          | EXIT
                                                          | STRICT
                                                          | OUT
                                                          | OBJECT
                                                          | EXPORT
                                                          | ANSISTRING
                                                          | IMPLEMENTS
                                                          | STORED
                             )
                             ;
identList
                             : ident (COMMA ident)*
                             ;
identListFlat
                             : ident (COMMA ident)* //ADDED used in formalParemeter
                             ;
label
                             : (
                                                          TkIdentifier
                                                          | TkIntNum
                                                          | TkHexNum
                             )
                             | usedKeywordsAsNames
                             ;
intNum
                             : TkIntNum | TkHexNum
                             ;
realNum
                             : TkRealNum
                             ;
namespacedQualifiedIdent
                             : (namespaceName DOT)? qualifiedIdent
                             ;
namespaceName
                             : ident (DOT ident)*
                             ;
qualifiedIdent
                             : (ident DOT)* ident
                             //must stay the way it is, with DOT for proper class method identyfication
                             ;

// KEYWORDS
ABSOLUTE
                             : 'absolute'
                             ;
ABSTRACT
                             : 'abstract'
                             ;
ADD
                             : 'add'
                             ;
AND
                             : 'and'
                             ;
ANSISTRING
                             : 'ansistring'
                             ;
ARRAY
                             : 'array'
                             ;
AS
                             : 'as'
                             ;
ASM
                             : 'asm'
                             ;
ASSEMBLER
                             : 'assembler'
                             ;
ASSEMBLY
                             : 'assembly'
                             ;
AT
                             : 'at'
                             ;
AUTOMATED
                             : 'automated'
                             ;
BEGIN
                             : 'begin'
                             ;
BREAK
                             : 'break'
                             ;
CASE
                             : 'case'
                             ;
CDECL
                             : 'cdecl'
                             ;
CLASS
                             : 'class'
                             ;
CONST
                             : 'const'
                             ;
CONSTRUCTOR
                             : 'constructor'
                             ;
CONTAINS
                             : 'contains'
                             ;
CONTINUE
                             : 'continue'
                             ;
DEFAULT
                             : 'default'
                             ;
DEPRECATED
                             : 'deprecated'
                             ;
DESTRUCTOR
                             : 'destructor'
                             ;
DISPID
                             : 'dispid'
                             ;
DISPINTERFACE
                             : 'dispinterface'
                             ;
DIV
                             : 'div'
                             ;
DO
                             : 'do'
                             ;
DOWNTO
                             : 'downto'
                             ;
DQ
                             : 'dq'
                             ;
DW
                             : 'dw'
                             ;
DYNAMIC
                             : 'dynamic'
                             ;
ELSE
                             : 'else'
                             ;
END
                             : 'end'
                             ;
EXCEPT
                             : 'except'
                             ;
EXIT
                             : 'exit'
                             ;
EXPERIMENTAL
                             : 'experimental'
                             ;
EXPORT
                             : 'export'
                             ;
EXPORTS
                             : 'exports'
                             ;
EXTERNAL
                             : 'external'
                             ;
FAR
                             : 'far'
                             ;
FILE
                             : 'file'
                             ;
FINAL
                             : 'final'
                             ;
FINALIZATION
                             : 'finalization'
                             ;
FINALLY
                             : 'finally'
                             ;
FOR
                             : 'for'
                             ;
FORWARD
                             : 'forward'
                             ;
FUNCTION
                             : 'function'
                             ;
GOTO
                             : 'goto'
                             ;
HELPER
                             : 'helper'
                             ;
IF
                             : 'if'
                             ;
IMPLEMENTATION
                             : 'implementation'
                             ;
IMPLEMENTS
                             : 'implements'
                             ;
IN
                             : 'in'
                             ;
INDEX
                             : 'index'
                             ;
INHERITED
                             : 'inherited'
                             ;
INITIALIZATION
                             : 'initialization'
                             ;
INLINE
                             : 'inline'
                             ;
INTERFACE
                             : 'interface'
                             ;
IS
                             : 'is'
                             ;
LABEL
                             : 'label'
                             ;
LIBRARY
                             : 'library'
                             ;
LOCAL
                             : 'local'
                             ;
MESSAGE
                             : 'message'
                             ;
MOD
                             : 'mod'
                             ;
NAME
                             : 'name'
                             ;
NEAR
                             : 'near'
                             ;
NIL
                             : 'nil'
                             ;
NODEFAULT
                             : 'nodefault'
                             ;
NOT
                             : 'not'
                             ;
OBJECT
                             : 'object'
                             ;
OF
                             : 'of'
                             ;
ON
                             : 'on'
                             ;
OPERATOR
                             : 'operator'
                             ;
OR
                             : 'or'
                             ;
OUT
                             : 'out'
                             ;
OVERLOAD
                             : 'overload'
                             ;
OVERRIDE
                             : 'override'
                             ;
PACKAGE
                             : 'package'
                             ;
PACKED
                             : 'packed'
                             ;
PASCAL
                             : 'pascal'
                             ;
PLATFORM
                             : 'platform'
                             ;
POINTER
                             : 'pointer'
                             ;
PRIVATE
                             : 'private'
                             ;
PROCEDURE
                             : 'procedure'
                             ;
PROGRAM
                             : 'program'
                             ;
PROPERTY
                             : 'property'
                             ;
PROTECTED
                             : 'protected'
                             ;
PUBLIC
                             : 'public'
                             ;
PUBLISHED
                             : 'published'
                             ;
RAISE
                             : 'raise'
                             ;
READ
                             : 'read'
                             ;
READONLY
                             : 'readonly'
                             ;
RECORD
                             : 'record'
                             ;
REFERENCE
                             : 'reference'
                             ;
REGISTER
                             : 'register'
                             ;
REINTRODUCE
                             : 'reintroduce'
                             ;
REMOVE
                             : 'remove'
                             ;
REPEAT
                             : 'repeat'
                             ;
REQUIRES
                             : 'requires'
                             ;
RESIDENT
                             : 'resident'
                             ;
RESOURCESTRING
                             : 'resourcestring'
                             ;
SAFECALL
                             : 'safecall'
                             ;
SEALED
                             : 'sealed'
                             ;
SET
                             : 'set'
                             ;
SHL
                             : 'shl'
                             ;
SHR
                             : 'shr'
                             ;
STATIC
                             : 'static'
                             ;
STDCALL
                             : 'stdcall'
                             ;
STORED
                             : 'stored'
                             ;
STRICT
                             : 'strict'
                             ;
STRING
                             : 'string'
                             ;
THEN
                             : 'then'
                             ;
THREADVAR
                             : 'threadvar'
                             ;
TO
                             : 'to'
                             ;
TRY
                             : 'try'
                             ;
TYPE
                             : 'type'
                             ;
UNIT
                             : 'unit'
                             ;
UNSAFE
                             : 'unsafe'
                             ;
UNTIL
                             : 'until'
                             ;
USES
                             : 'uses'
                             ;
VAR
                             : 'var'
                             ;
VARARGS
                             : 'varargs'
                             ;
VARIANT
                             : 'variant'
                             ;
VIRTUAL
                             : 'virtual'
                             ;
WHILE
                             : 'while'
                             ;
WITH
                             : 'with'
                             ;
WRITE
                             : 'write'
                             ;
WRITEONLY
                             : 'writeonly'
                             ;
XOR
                             : 'xor'
                             ;
FALSE
                             : 'false'
                             ;
TRUE
                             : 'true'
                             ;

//----------------------------------------------------------------------------
// OPERATORS
//----------------------------------------------------------------------------
PLUS
                             : '+'
                             ;
MINUS
                             : '-'
                             ;
STAR
                             : '*'
                             ;
SLASH
                             : '/'
                             ;
ASSIGN
                             : ':='
                             ;
COMMA
                             : ','
                             ;
SEMI
                             : ';'
                             ;
COLON
                             : ':'
                             ;
EQUAL
                             : '='
                             ;
NOT_EQUAL
                             : '<>'
                             ;
LT
                             : '<'
                             ;
LE
                             : '<='
                             ;
GE
                             : '>='
                             ;
GT
                             : '>'
                             ;
LPAREN
                             : '('
                             ;
RPAREN
                             : ')'
                             ;
LBRACK
                             : '['
                             ; // line_tab[line]
LBRACK2
                             : '(.'
                             ; // line_tab(.line.)
RBRACK
                             : ']'
                             ;
RBRACK2
                             : '.)'
                             ;
POINTER2
                             : '^'
                             ;
AT2
                             : '@'
                             ;
DOT
                             : '.'
                             ; // ('.' {$setType(DOTDOT);})?  ;
DOTDOT
                             : '..'
                             ;
LCURLY
                             : '{'
                             ;
RCURLY
                             : '}'
                             ;

AMBER
                             : '&'
                             ;
DOUBLEAT
                             : '@@'
                             ;

//****************************
//section token
//****************************
TkGlobalFunction
                             : 'FUNCTION_GLOBAL'
                             ;
TkFunctionName
                             : 'FUNCTION_NAME'
                             ;
TkFunctionArgs
                             : 'FUNCTION_ARGS'
                             ;
TkFunctionBody
                             : 'FUNCTION_BODY'
                             ;
TkFunctionReturn
                             : 'FUNCTION_RETURN'
                             ;
TkCustomAttribute
                             : 'CUSTOM_ATTRIBUTE'
                             ;
TkCustomAttributeArgs
                             : 'CUSTOM_ATTRIBUTE_ARGS'
                             ;
TkNewType
                             : 'NEW_TYPE'
                             ;
TkClass
                             : 'CLASS'
                             ;
TkRecord
                             : 'RECORD_TYPE'
                             ;
TkRecordHelper
                             : 'RECORD_HELPER'
                             ;
TkInterface
                             : 'INTERFACE_TYPE'
                             ;
TkObject
                             : 'OBJECT_TYPE'
                             ;
TkClassOfType
                             : 'CLASS_OF_TYPE'
                             ;
TkVariableType
                             : 'VARIABLE_TYPE'
                             ;
TkVariableIdents
                             : 'VARIABLE_IDENTS'
                             ;
TkVariableParam
                             : 'VARIABLE_PARAM'
                             ;
TkGuid
                             : 'INTERFACE_GUID'
                             ;
TkClassParents
                             : 'CLASS_PARENTS'
                             ;
TkClassField
                             : 'CLASS_FIELD'
                             ;
TkAnonymousExpression
                             : 'ANONYMOUS_EXPRESSION'
                             ;
TkIdentifier
                             : (Alpha | '_') (Alpha | Digit | '_')*
                             ;
TkIntNum
                             : Digitseq
                             ;
TkRealNum
                             : Digitseq (DOT Digitseq)? (
                                                          'e' (
                                                                                       PLUS
                                                                                       | MINUS
                                                          )? Digitseq
                             )? //CHANGED
                             ;
TkHexNum
                             : '$' Hexdigitseq
                             ;
TkAsmHexNum
                             : Hexdigitseq ('h')
                             ;
TkAsmHexLabel
                             : Hexdigitseq COLON
                             ;
QuotedString
                             : '\'' ('\'\'' | ~('\''))* '\'' //taken from PASCAL grammar
                             ;
ControlString
                             : Controlchar Controlchar*
                             ;

fragment Controlchar
                             : '#' Digitseq | '#' '$' Hexdigitseq
                             ;
fragment Alpha
                             : 'a' ..'z'
                             | 'A' ..'Z'
                             | '\u0080' ..'\uFFFE' ~(
                                                          '\uFEFF'
                             ) //ADDED unicode support
                             ;
fragment Digit
                             : '0' ..'9'
                             ;
fragment Digitseq
                             : Digit Digit*
                             ;
fragment Hexdigit
                             : Digit | 'a' ..'f' | 'A' ..'F'
                             ;
Hexdigitseq
                             : Hexdigit Hexdigit*
                             ;
COMMENT
                             : (
                                                          '//' ~(
                                                                                       '\n'
                                                                                       | '\r'
                                                          )* '\r'? '\n'
                                                          | '(*' .*? '*)'
                                                          | '{' .*? '}'
                             ) -> skip
                             ;
WS
                             : (' ' | '\t' | '\r' | '\n' | '\f')+ -> skip
                             ;
UnicodeBOM
                             : '\uFEFF' -> skip
                             ;