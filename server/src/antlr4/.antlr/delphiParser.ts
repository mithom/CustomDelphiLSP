// Generated from c:/Git/LSP/server/src/antlr4/delphi.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class delphiParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly ABSOLUTE = 2;
    public static readonly ABSTRACT = 3;
    public static readonly ADD = 4;
    public static readonly AND = 5;
    public static readonly ANSISTRING = 6;
    public static readonly ARRAY = 7;
    public static readonly AS = 8;
    public static readonly ASM = 9;
    public static readonly ASSEMBLER = 10;
    public static readonly ASSEMBLY = 11;
    public static readonly AT = 12;
    public static readonly AUTOMATED = 13;
    public static readonly BEGIN = 14;
    public static readonly BREAK = 15;
    public static readonly CASE = 16;
    public static readonly CDECL = 17;
    public static readonly CLASS = 18;
    public static readonly CONST = 19;
    public static readonly CONSTRUCTOR = 20;
    public static readonly CONTAINS = 21;
    public static readonly CONTINUE = 22;
    public static readonly DEFAULT = 23;
    public static readonly DEPRECATED = 24;
    public static readonly DESTRUCTOR = 25;
    public static readonly DISPID = 26;
    public static readonly DISPINTERFACE = 27;
    public static readonly DIV = 28;
    public static readonly DO = 29;
    public static readonly DOWNTO = 30;
    public static readonly DQ = 31;
    public static readonly DW = 32;
    public static readonly DYNAMIC = 33;
    public static readonly ELSE = 34;
    public static readonly END = 35;
    public static readonly EXCEPT = 36;
    public static readonly EXIT = 37;
    public static readonly EXPERIMENTAL = 38;
    public static readonly EXPORT = 39;
    public static readonly EXPORTS = 40;
    public static readonly EXTERNAL = 41;
    public static readonly FAR = 42;
    public static readonly FILE = 43;
    public static readonly FINAL = 44;
    public static readonly FINALIZATION = 45;
    public static readonly FINALLY = 46;
    public static readonly FOR = 47;
    public static readonly FORWARD = 48;
    public static readonly FUNCTION = 49;
    public static readonly GOTO = 50;
    public static readonly HELPER = 51;
    public static readonly IF = 52;
    public static readonly IMPLEMENTATION = 53;
    public static readonly IMPLEMENTS = 54;
    public static readonly IN = 55;
    public static readonly INDEX = 56;
    public static readonly INHERITED = 57;
    public static readonly INITIALIZATION = 58;
    public static readonly INLINE = 59;
    public static readonly INTERFACE = 60;
    public static readonly IS = 61;
    public static readonly LABEL = 62;
    public static readonly LIBRARY = 63;
    public static readonly LOCAL = 64;
    public static readonly MESSAGE = 65;
    public static readonly MOD = 66;
    public static readonly NAME = 67;
    public static readonly NEAR = 68;
    public static readonly NIL = 69;
    public static readonly NODEFAULT = 70;
    public static readonly NOT = 71;
    public static readonly OBJECT = 72;
    public static readonly OF = 73;
    public static readonly ON = 74;
    public static readonly OPERATOR = 75;
    public static readonly OR = 76;
    public static readonly OUT = 77;
    public static readonly OVERLOAD = 78;
    public static readonly OVERRIDE = 79;
    public static readonly PACKAGE = 80;
    public static readonly PACKED = 81;
    public static readonly PASCAL = 82;
    public static readonly PLATFORM = 83;
    public static readonly POINTER = 84;
    public static readonly PRIVATE = 85;
    public static readonly PROCEDURE = 86;
    public static readonly PROGRAM = 87;
    public static readonly PROPERTY = 88;
    public static readonly PROTECTED = 89;
    public static readonly PUBLIC = 90;
    public static readonly PUBLISHED = 91;
    public static readonly RAISE = 92;
    public static readonly READ = 93;
    public static readonly READONLY = 94;
    public static readonly RECORD = 95;
    public static readonly REFERENCE = 96;
    public static readonly REGISTER = 97;
    public static readonly REINTRODUCE = 98;
    public static readonly REMOVE = 99;
    public static readonly REPEAT = 100;
    public static readonly REQUIRES = 101;
    public static readonly RESIDENT = 102;
    public static readonly RESOURCESTRING = 103;
    public static readonly SAFECALL = 104;
    public static readonly SEALED = 105;
    public static readonly SET = 106;
    public static readonly SHL = 107;
    public static readonly SHR = 108;
    public static readonly STATIC = 109;
    public static readonly STDCALL = 110;
    public static readonly STORED = 111;
    public static readonly STRICT = 112;
    public static readonly STRING = 113;
    public static readonly THEN = 114;
    public static readonly THREADVAR = 115;
    public static readonly TO = 116;
    public static readonly TRY = 117;
    public static readonly TYPE = 118;
    public static readonly UNIT = 119;
    public static readonly UNSAFE = 120;
    public static readonly UNTIL = 121;
    public static readonly USES = 122;
    public static readonly VAR = 123;
    public static readonly VARARGS = 124;
    public static readonly VARIANT = 125;
    public static readonly VIRTUAL = 126;
    public static readonly WHILE = 127;
    public static readonly WITH = 128;
    public static readonly WRITE = 129;
    public static readonly WRITEONLY = 130;
    public static readonly XOR = 131;
    public static readonly FALSE = 132;
    public static readonly TRUE = 133;
    public static readonly PLUS = 134;
    public static readonly MINUS = 135;
    public static readonly STAR = 136;
    public static readonly SLASH = 137;
    public static readonly ASSIGN = 138;
    public static readonly COMMA = 139;
    public static readonly SEMI = 140;
    public static readonly COLON = 141;
    public static readonly EQUAL = 142;
    public static readonly NOT_EQUAL = 143;
    public static readonly LT = 144;
    public static readonly LE = 145;
    public static readonly GE = 146;
    public static readonly GT = 147;
    public static readonly LPAREN = 148;
    public static readonly RPAREN = 149;
    public static readonly LBRACK = 150;
    public static readonly LBRACK2 = 151;
    public static readonly RBRACK = 152;
    public static readonly RBRACK2 = 153;
    public static readonly POINTER2 = 154;
    public static readonly AT2 = 155;
    public static readonly DOT = 156;
    public static readonly DOTDOT = 157;
    public static readonly LCURLY = 158;
    public static readonly RCURLY = 159;
    public static readonly AMBER = 160;
    public static readonly DOUBLEAT = 161;
    public static readonly TkGlobalFunction = 162;
    public static readonly TkFunctionName = 163;
    public static readonly TkFunctionArgs = 164;
    public static readonly TkFunctionBody = 165;
    public static readonly TkFunctionReturn = 166;
    public static readonly TkCustomAttribute = 167;
    public static readonly TkCustomAttributeArgs = 168;
    public static readonly TkNewType = 169;
    public static readonly TkClass = 170;
    public static readonly TkRecord = 171;
    public static readonly TkRecordHelper = 172;
    public static readonly TkInterface = 173;
    public static readonly TkObject = 174;
    public static readonly TkClassOfType = 175;
    public static readonly TkVariableType = 176;
    public static readonly TkVariableIdents = 177;
    public static readonly TkVariableParam = 178;
    public static readonly TkGuid = 179;
    public static readonly TkClassParents = 180;
    public static readonly TkClassField = 181;
    public static readonly TkAnonymousExpression = 182;
    public static readonly TkIdentifier = 183;
    public static readonly TkIntNum = 184;
    public static readonly TkRealNum = 185;
    public static readonly TkHexNum = 186;
    public static readonly TkAsmHexNum = 187;
    public static readonly TkAsmHexLabel = 188;
    public static readonly QuotedString = 189;
    public static readonly ControlString = 190;
    public static readonly Hexdigitseq = 191;
    public static readonly COMMENT = 192;
    public static readonly WS = 193;
    public static readonly UnicodeBOM = 194;
    public static readonly RULE_file = 0;
    public static readonly RULE_program = 1;
    public static readonly RULE_programHead = 2;
    public static readonly RULE_programParmSeq = 3;
    public static readonly RULE_library = 4;
    public static readonly RULE_libraryHead = 5;
    public static readonly RULE_packageE = 6;
    public static readonly RULE_packageHead = 7;
    public static readonly RULE_unit = 8;
    public static readonly RULE_unitHead = 9;
    public static readonly RULE_unitInterface = 10;
    public static readonly RULE_unitImplementation = 11;
    public static readonly RULE_unitBlock = 12;
    public static readonly RULE_unitInitialization = 13;
    public static readonly RULE_unitFinalization = 14;
    public static readonly RULE_containsClause = 15;
    public static readonly RULE_requiresClause = 16;
    public static readonly RULE_usesClause = 17;
    public static readonly RULE_usesFileClause = 18;
    public static readonly RULE_namespaceFileNameList = 19;
    public static readonly RULE_namespaceFileName = 20;
    public static readonly RULE_namespaceNameList = 21;
    public static readonly RULE_block = 22;
    public static readonly RULE_blockBody = 23;
    public static readonly RULE_declSection = 24;
    public static readonly RULE_interfaceDecl = 25;
    public static readonly RULE_labelDeclSection = 26;
    public static readonly RULE_constSection = 27;
    public static readonly RULE_constKey = 28;
    public static readonly RULE_constDeclaration = 29;
    public static readonly RULE_typeSection = 30;
    public static readonly RULE_typeDeclaration = 31;
    public static readonly RULE_varSection = 32;
    public static readonly RULE_varKey = 33;
    public static readonly RULE_varDeclaration = 34;
    public static readonly RULE_varValueSpec = 35;
    public static readonly RULE_exportsSection = 36;
    public static readonly RULE_exportItem = 37;
    public static readonly RULE_typeDecl = 38;
    public static readonly RULE_strucType = 39;
    public static readonly RULE_strucTypePart = 40;
    public static readonly RULE_arrayType = 41;
    public static readonly RULE_arrayIndex = 42;
    public static readonly RULE_arraySubType = 43;
    public static readonly RULE_setType = 44;
    public static readonly RULE_fileType = 45;
    public static readonly RULE_pointerType = 46;
    public static readonly RULE_stringType = 47;
    public static readonly RULE_codePageNumber = 48;
    public static readonly RULE_procedureType = 49;
    public static readonly RULE_methodType = 50;
    public static readonly RULE_simpleProcedureType = 51;
    public static readonly RULE_procedureReference = 52;
    public static readonly RULE_procedureTypeHeading = 53;
    public static readonly RULE_variantType = 54;
    public static readonly RULE_simpleType = 55;
    public static readonly RULE_subRangeType = 56;
    public static readonly RULE_enumType = 57;
    public static readonly RULE_typeId = 58;
    public static readonly RULE_genericTypeIdent = 59;
    public static readonly RULE_genericDefinition = 60;
    public static readonly RULE_simpleGenericDefinition = 61;
    public static readonly RULE_constrainedGenericDefinition = 62;
    public static readonly RULE_constrainedGeneric = 63;
    public static readonly RULE_genericConstraint = 64;
    public static readonly RULE_genericPostfix = 65;
    public static readonly RULE_classDecl = 66;
    public static readonly RULE_classTypeTypeDecl = 67;
    public static readonly RULE_classTypeDecl = 68;
    public static readonly RULE_classState = 69;
    public static readonly RULE_classParent = 70;
    public static readonly RULE_classItem = 71;
    public static readonly RULE_classHelperDecl = 72;
    public static readonly RULE_classHelperItem = 73;
    public static readonly RULE_interfaceTypeDecl = 74;
    public static readonly RULE_interfaceKey = 75;
    public static readonly RULE_interfaceGuid = 76;
    public static readonly RULE_interfaceItem = 77;
    public static readonly RULE_objectDecl = 78;
    public static readonly RULE_objectItem = 79;
    public static readonly RULE_recordDecl = 80;
    public static readonly RULE_simpleRecord = 81;
    public static readonly RULE_variantRecord = 82;
    public static readonly RULE_recordItem = 83;
    public static readonly RULE_recordField = 84;
    public static readonly RULE_recordVariantField = 85;
    public static readonly RULE_recordVariantSection = 86;
    public static readonly RULE_recordVariant = 87;
    public static readonly RULE_recordHelperDecl = 88;
    public static readonly RULE_recordHelperItem = 89;
    public static readonly RULE_classMethod = 90;
    public static readonly RULE_classField = 91;
    public static readonly RULE_classProperty = 92;
    public static readonly RULE_classPropertyArray = 93;
    public static readonly RULE_classPropertyIndex = 94;
    public static readonly RULE_classPropertySpecifier = 95;
    public static readonly RULE_classPropertyEndSpecifier = 96;
    public static readonly RULE_classPropertyReadWrite = 97;
    public static readonly RULE_classPropertyDispInterface = 98;
    public static readonly RULE_visibility = 99;
    public static readonly RULE_exportedProcHeading = 100;
    public static readonly RULE_methodDecl = 101;
    public static readonly RULE_methodDeclHeading = 102;
    public static readonly RULE_methodKey = 103;
    public static readonly RULE_methodName = 104;
    public static readonly RULE_procDecl = 105;
    public static readonly RULE_procDeclHeading = 106;
    public static readonly RULE_formalParameterSection = 107;
    public static readonly RULE_formalParameterList = 108;
    public static readonly RULE_formalParameter = 109;
    public static readonly RULE_parmType = 110;
    public static readonly RULE_methodBody = 111;
    public static readonly RULE_procBody = 112;
    public static readonly RULE_customAttribute = 113;
    public static readonly RULE_customAttributeList = 114;
    public static readonly RULE_customAttributeDecl = 115;
    public static readonly RULE_expression = 116;
    public static readonly RULE_anonymousExpression = 117;
    public static readonly RULE_simpleExpression = 118;
    public static readonly RULE_factor = 119;
    public static readonly RULE_stringFactor = 120;
    public static readonly RULE_setSection = 121;
    public static readonly RULE_designator = 122;
    public static readonly RULE_designatorItem = 123;
    public static readonly RULE_expressionList = 124;
    public static readonly RULE_colonConstruct = 125;
    public static readonly RULE_operator = 126;
    public static readonly RULE_relOp = 127;
    public static readonly RULE_statement = 128;
    public static readonly RULE_ifStatement = 129;
    public static readonly RULE_caseStatement = 130;
    public static readonly RULE_caseItem = 131;
    public static readonly RULE_caseLabel = 132;
    public static readonly RULE_repeatStatement = 133;
    public static readonly RULE_whileStatement = 134;
    public static readonly RULE_forStatement = 135;
    public static readonly RULE_withStatement = 136;
    public static readonly RULE_withItem = 137;
    public static readonly RULE_compoundStatement = 138;
    public static readonly RULE_statementList = 139;
    public static readonly RULE_simpleStatement = 140;
    public static readonly RULE_gotoStatement = 141;
    public static readonly RULE_constExpression = 142;
    public static readonly RULE_recordConstExpression = 143;
    public static readonly RULE_tryStatement = 144;
    public static readonly RULE_handlerList = 145;
    public static readonly RULE_handler = 146;
    public static readonly RULE_handlerIdent = 147;
    public static readonly RULE_handlerStatement = 148;
    public static readonly RULE_raiseStatement = 149;
    public static readonly RULE_assemblerStatement = 150;
    public static readonly RULE_methodDirective = 151;
    public static readonly RULE_functionDirective = 152;
    public static readonly RULE_reintroduceDirective = 153;
    public static readonly RULE_overloadDirective = 154;
    public static readonly RULE_bindingDirective = 155;
    public static readonly RULE_abstractDirective = 156;
    public static readonly RULE_inlineDirective = 157;
    public static readonly RULE_callConvention = 158;
    public static readonly RULE_callConventionNoSemi = 159;
    public static readonly RULE_oldCallConventionDirective = 160;
    public static readonly RULE_hintingDirective = 161;
    public static readonly RULE_externalDirective = 162;
    public static readonly RULE_externalSpecifier = 163;
    public static readonly RULE_dispIDDirective = 164;
    public static readonly RULE_ident = 165;
    public static readonly RULE_usedKeywordsAsNames = 166;
    public static readonly RULE_identList = 167;
    public static readonly RULE_identListFlat = 168;
    public static readonly RULE_label = 169;
    public static readonly RULE_intNum = 170;
    public static readonly RULE_realNum = 171;
    public static readonly RULE_namespacedQualifiedIdent = 172;
    public static readonly RULE_namespaceName = 173;
    public static readonly RULE_qualifiedIdent = 174;

    public static readonly literalNames = [
        null, "'abekat'", "'absolute'", "'abstract'", "'add'", "'and'", 
        "'ansistring'", "'array'", "'as'", "'asm'", "'assembler'", "'assembly'", 
        "'at'", "'automated'", "'begin'", "'break'", "'case'", "'cdecl'", 
        "'class'", "'const'", "'constructor'", "'contains'", "'continue'", 
        "'default'", "'deprecated'", "'destructor'", "'dispid'", "'dispinterface'", 
        "'div'", "'do'", "'downto'", "'dq'", "'dw'", "'dynamic'", "'else'", 
        "'end'", "'except'", "'exit'", "'experimental'", "'export'", "'exports'", 
        "'external'", "'far'", "'file'", "'final'", "'finalization'", "'finally'", 
        "'for'", "'forward'", "'function'", "'goto'", "'helper'", "'if'", 
        "'implementation'", "'implements'", "'in'", "'index'", "'inherited'", 
        "'initialization'", "'inline'", "'interface'", "'is'", "'label'", 
        "'library'", "'local'", "'message'", "'mod'", "'name'", "'near'", 
        "'nil'", "'nodefault'", "'not'", "'object'", "'of'", "'on'", "'operator'", 
        "'or'", "'out'", "'overload'", "'override'", "'package'", "'packed'", 
        "'pascal'", "'platform'", "'pointer'", "'private'", "'procedure'", 
        "'program'", "'property'", "'protected'", "'public'", "'published'", 
        "'raise'", "'read'", "'readonly'", "'record'", "'reference'", "'register'", 
        "'reintroduce'", "'remove'", "'repeat'", "'requires'", "'resident'", 
        "'resourcestring'", "'safecall'", "'sealed'", "'set'", "'shl'", 
        "'shr'", "'static'", "'stdcall'", "'stored'", "'strict'", "'string'", 
        "'then'", "'threadvar'", "'to'", "'try'", "'type'", "'unit'", "'unsafe'", 
        "'until'", "'uses'", "'var'", "'varargs'", "'variant'", "'virtual'", 
        "'while'", "'with'", "'write'", "'writeonly'", "'xor'", "'false'", 
        "'true'", "'+'", "'-'", "'*'", "'/'", "':='", "','", "';'", "':'", 
        "'='", "'<>'", "'<'", "'<='", "'>='", "'>'", "'('", "')'", "'['", 
        "'(.'", "']'", "'.)'", "'^'", "'@'", "'.'", "'..'", "'{'", "'}'", 
        "'&'", "'@@'", "'FUNCTION_GLOBAL'", "'FUNCTION_NAME'", "'FUNCTION_ARGS'", 
        "'FUNCTION_BODY'", "'FUNCTION_RETURN'", "'CUSTOM_ATTRIBUTE'", "'CUSTOM_ATTRIBUTE_ARGS'", 
        "'NEW_TYPE'", "'CLASS'", "'RECORD_TYPE'", "'RECORD_HELPER'", "'INTERFACE_TYPE'", 
        "'OBJECT_TYPE'", "'CLASS_OF_TYPE'", "'VARIABLE_TYPE'", "'VARIABLE_IDENTS'", 
        "'VARIABLE_PARAM'", "'INTERFACE_GUID'", "'CLASS_PARENTS'", "'CLASS_FIELD'", 
        "'ANONYMOUS_EXPRESSION'", null, null, null, null, null, null, null, 
        null, null, null, null, "'\\uFEFF'"
    ];

    public static readonly symbolicNames = [
        null, null, "ABSOLUTE", "ABSTRACT", "ADD", "AND", "ANSISTRING", 
        "ARRAY", "AS", "ASM", "ASSEMBLER", "ASSEMBLY", "AT", "AUTOMATED", 
        "BEGIN", "BREAK", "CASE", "CDECL", "CLASS", "CONST", "CONSTRUCTOR", 
        "CONTAINS", "CONTINUE", "DEFAULT", "DEPRECATED", "DESTRUCTOR", "DISPID", 
        "DISPINTERFACE", "DIV", "DO", "DOWNTO", "DQ", "DW", "DYNAMIC", "ELSE", 
        "END", "EXCEPT", "EXIT", "EXPERIMENTAL", "EXPORT", "EXPORTS", "EXTERNAL", 
        "FAR", "FILE", "FINAL", "FINALIZATION", "FINALLY", "FOR", "FORWARD", 
        "FUNCTION", "GOTO", "HELPER", "IF", "IMPLEMENTATION", "IMPLEMENTS", 
        "IN", "INDEX", "INHERITED", "INITIALIZATION", "INLINE", "INTERFACE", 
        "IS", "LABEL", "LIBRARY", "LOCAL", "MESSAGE", "MOD", "NAME", "NEAR", 
        "NIL", "NODEFAULT", "NOT", "OBJECT", "OF", "ON", "OPERATOR", "OR", 
        "OUT", "OVERLOAD", "OVERRIDE", "PACKAGE", "PACKED", "PASCAL", "PLATFORM", 
        "POINTER", "PRIVATE", "PROCEDURE", "PROGRAM", "PROPERTY", "PROTECTED", 
        "PUBLIC", "PUBLISHED", "RAISE", "READ", "READONLY", "RECORD", "REFERENCE", 
        "REGISTER", "REINTRODUCE", "REMOVE", "REPEAT", "REQUIRES", "RESIDENT", 
        "RESOURCESTRING", "SAFECALL", "SEALED", "SET", "SHL", "SHR", "STATIC", 
        "STDCALL", "STORED", "STRICT", "STRING", "THEN", "THREADVAR", "TO", 
        "TRY", "TYPE", "UNIT", "UNSAFE", "UNTIL", "USES", "VAR", "VARARGS", 
        "VARIANT", "VIRTUAL", "WHILE", "WITH", "WRITE", "WRITEONLY", "XOR", 
        "FALSE", "TRUE", "PLUS", "MINUS", "STAR", "SLASH", "ASSIGN", "COMMA", 
        "SEMI", "COLON", "EQUAL", "NOT_EQUAL", "LT", "LE", "GE", "GT", "LPAREN", 
        "RPAREN", "LBRACK", "LBRACK2", "RBRACK", "RBRACK2", "POINTER2", 
        "AT2", "DOT", "DOTDOT", "LCURLY", "RCURLY", "AMBER", "DOUBLEAT", 
        "TkGlobalFunction", "TkFunctionName", "TkFunctionArgs", "TkFunctionBody", 
        "TkFunctionReturn", "TkCustomAttribute", "TkCustomAttributeArgs", 
        "TkNewType", "TkClass", "TkRecord", "TkRecordHelper", "TkInterface", 
        "TkObject", "TkClassOfType", "TkVariableType", "TkVariableIdents", 
        "TkVariableParam", "TkGuid", "TkClassParents", "TkClassField", "TkAnonymousExpression", 
        "TkIdentifier", "TkIntNum", "TkRealNum", "TkHexNum", "TkAsmHexNum", 
        "TkAsmHexLabel", "QuotedString", "ControlString", "Hexdigitseq", 
        "COMMENT", "WS", "UnicodeBOM"
    ];
    public static readonly ruleNames = [
        "file", "program", "programHead", "programParmSeq", "library", "libraryHead", 
        "packageE", "packageHead", "unit", "unitHead", "unitInterface", 
        "unitImplementation", "unitBlock", "unitInitialization", "unitFinalization", 
        "containsClause", "requiresClause", "usesClause", "usesFileClause", 
        "namespaceFileNameList", "namespaceFileName", "namespaceNameList", 
        "block", "blockBody", "declSection", "interfaceDecl", "labelDeclSection", 
        "constSection", "constKey", "constDeclaration", "typeSection", "typeDeclaration", 
        "varSection", "varKey", "varDeclaration", "varValueSpec", "exportsSection", 
        "exportItem", "typeDecl", "strucType", "strucTypePart", "arrayType", 
        "arrayIndex", "arraySubType", "setType", "fileType", "pointerType", 
        "stringType", "codePageNumber", "procedureType", "methodType", "simpleProcedureType", 
        "procedureReference", "procedureTypeHeading", "variantType", "simpleType", 
        "subRangeType", "enumType", "typeId", "genericTypeIdent", "genericDefinition", 
        "simpleGenericDefinition", "constrainedGenericDefinition", "constrainedGeneric", 
        "genericConstraint", "genericPostfix", "classDecl", "classTypeTypeDecl", 
        "classTypeDecl", "classState", "classParent", "classItem", "classHelperDecl", 
        "classHelperItem", "interfaceTypeDecl", "interfaceKey", "interfaceGuid", 
        "interfaceItem", "objectDecl", "objectItem", "recordDecl", "simpleRecord", 
        "variantRecord", "recordItem", "recordField", "recordVariantField", 
        "recordVariantSection", "recordVariant", "recordHelperDecl", "recordHelperItem", 
        "classMethod", "classField", "classProperty", "classPropertyArray", 
        "classPropertyIndex", "classPropertySpecifier", "classPropertyEndSpecifier", 
        "classPropertyReadWrite", "classPropertyDispInterface", "visibility", 
        "exportedProcHeading", "methodDecl", "methodDeclHeading", "methodKey", 
        "methodName", "procDecl", "procDeclHeading", "formalParameterSection", 
        "formalParameterList", "formalParameter", "parmType", "methodBody", 
        "procBody", "customAttribute", "customAttributeList", "customAttributeDecl", 
        "expression", "anonymousExpression", "simpleExpression", "factor", 
        "stringFactor", "setSection", "designator", "designatorItem", "expressionList", 
        "colonConstruct", "operator", "relOp", "statement", "ifStatement", 
        "caseStatement", "caseItem", "caseLabel", "repeatStatement", "whileStatement", 
        "forStatement", "withStatement", "withItem", "compoundStatement", 
        "statementList", "simpleStatement", "gotoStatement", "constExpression", 
        "recordConstExpression", "tryStatement", "handlerList", "handler", 
        "handlerIdent", "handlerStatement", "raiseStatement", "assemblerStatement", 
        "methodDirective", "functionDirective", "reintroduceDirective", 
        "overloadDirective", "bindingDirective", "abstractDirective", "inlineDirective", 
        "callConvention", "callConventionNoSemi", "oldCallConventionDirective", 
        "hintingDirective", "externalDirective", "externalSpecifier", "dispIDDirective", 
        "ident", "usedKeywordsAsNames", "identList", "identListFlat", "label", 
        "intNum", "realNum", "namespacedQualifiedIdent", "namespaceName", 
        "qualifiedIdent",
    ];

    public get grammarFileName(): string { return "delphi.g4"; }
    public get literalNames(): (string | null)[] { return delphiParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return delphiParser.symbolicNames; }
    public get ruleNames(): string[] { return delphiParser.ruleNames; }
    public get serializedATN(): number[] { return delphiParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, delphiParser._ATN, delphiParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public file(): FileContext {
        let localContext = new FileContext(this.context, this.state);
        this.enterRule(localContext, 0, delphiParser.RULE_file);
        try {
            this.state = 354;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.T__0:
            case delphiParser.ASM:
            case delphiParser.BEGIN:
            case delphiParser.CLASS:
            case delphiParser.CONST:
            case delphiParser.CONSTRUCTOR:
            case delphiParser.DESTRUCTOR:
            case delphiParser.EXPORTS:
            case delphiParser.FUNCTION:
            case delphiParser.LABEL:
            case delphiParser.PROCEDURE:
            case delphiParser.PROGRAM:
            case delphiParser.RESOURCESTRING:
            case delphiParser.THREADVAR:
            case delphiParser.TYPE:
            case delphiParser.USES:
            case delphiParser.VAR:
            case delphiParser.DOT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 350;
                this.program();
                }
                break;
            case delphiParser.LIBRARY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 351;
                this.library();
                }
                break;
            case delphiParser.UNIT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 352;
                this.unit();
                }
                break;
            case delphiParser.PACKAGE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 353;
                this.packageE();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 2, delphiParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 357;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 87) {
                {
                this.state = 356;
                this.programHead();
                }
            }

            this.state = 360;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 122) {
                {
                this.state = 359;
                this.usesFileClause();
                }
            }

            this.state = 362;
            this.block();
            this.state = 363;
            this.match(delphiParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public programHead(): ProgramHeadContext {
        let localContext = new ProgramHeadContext(this.context, this.state);
        this.enterRule(localContext, 4, delphiParser.RULE_programHead);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 365;
            this.match(delphiParser.PROGRAM);
            this.state = 366;
            this.namespaceName();
            this.state = 368;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 148) {
                {
                this.state = 367;
                this.programParmSeq();
                }
            }

            this.state = 370;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public programParmSeq(): ProgramParmSeqContext {
        let localContext = new ProgramParmSeqContext(this.context, this.state);
        this.enterRule(localContext, 6, delphiParser.RULE_programParmSeq);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 372;
            this.match(delphiParser.LPAREN);
            this.state = 381;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14717008) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1477050501) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 190844969) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 278535) !== 0) || _la === 160 || _la === 183) {
                {
                this.state = 373;
                this.ident();
                this.state = 378;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 139) {
                    {
                    {
                    this.state = 374;
                    this.match(delphiParser.COMMA);
                    this.state = 375;
                    this.ident();
                    }
                    }
                    this.state = 380;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 383;
            this.match(delphiParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public library(): LibraryContext {
        let localContext = new LibraryContext(this.context, this.state);
        this.enterRule(localContext, 8, delphiParser.RULE_library);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 385;
            this.libraryHead();
            this.state = 387;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 122) {
                {
                this.state = 386;
                this.usesFileClause();
                }
            }

            this.state = 389;
            this.block();
            this.state = 390;
            this.match(delphiParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public libraryHead(): LibraryHeadContext {
        let localContext = new LibraryHeadContext(this.context, this.state);
        this.enterRule(localContext, 10, delphiParser.RULE_libraryHead);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 392;
            this.match(delphiParser.LIBRARY);
            this.state = 393;
            this.namespaceName();
            this.state = 397;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 24 || _la === 38 || _la === 63 || _la === 83) {
                {
                {
                this.state = 394;
                this.hintingDirective();
                }
                }
                this.state = 399;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 400;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public packageE(): PackageEContext {
        let localContext = new PackageEContext(this.context, this.state);
        this.enterRule(localContext, 12, delphiParser.RULE_packageE);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 402;
            this.packageHead();
            this.state = 403;
            this.requiresClause();
            this.state = 405;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 404;
                this.containsClause();
                }
            }

            this.state = 407;
            this.match(delphiParser.END);
            this.state = 408;
            this.match(delphiParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public packageHead(): PackageHeadContext {
        let localContext = new PackageHeadContext(this.context, this.state);
        this.enterRule(localContext, 14, delphiParser.RULE_packageHead);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 410;
            this.match(delphiParser.PACKAGE);
            this.state = 411;
            this.namespaceName();
            this.state = 412;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unit(): UnitContext {
        let localContext = new UnitContext(this.context, this.state);
        this.enterRule(localContext, 16, delphiParser.RULE_unit);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 414;
            this.unitHead();
            this.state = 415;
            this.unitInterface();
            this.state = 416;
            this.unitImplementation();
            this.state = 417;
            this.unitBlock();
            this.state = 418;
            this.match(delphiParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unitHead(): UnitHeadContext {
        let localContext = new UnitHeadContext(this.context, this.state);
        this.enterRule(localContext, 18, delphiParser.RULE_unitHead);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 420;
            this.match(delphiParser.UNIT);
            this.state = 421;
            this.namespaceName();
            this.state = 425;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 24 || _la === 38 || _la === 63 || _la === 83) {
                {
                {
                this.state = 422;
                this.hintingDirective();
                }
                }
                this.state = 427;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 428;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unitInterface(): UnitInterfaceContext {
        let localContext = new UnitInterfaceContext(this.context, this.state);
        this.enterRule(localContext, 20, delphiParser.RULE_unitInterface);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 430;
            this.match(delphiParser.INTERFACE);
            this.state = 432;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 122) {
                {
                this.state = 431;
                this.usesClause();
                }
            }

            this.state = 437;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 35389442) !== 0) || _la === 40 || _la === 49 || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 537001985) !== 0) || _la === 118 || _la === 123) {
                {
                {
                this.state = 434;
                this.interfaceDecl();
                }
                }
                this.state = 439;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unitImplementation(): UnitImplementationContext {
        let localContext = new UnitImplementationContext(this.context, this.state);
        this.enterRule(localContext, 22, delphiParser.RULE_unitImplementation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 440;
            this.match(delphiParser.IMPLEMENTATION);
            this.state = 442;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 122) {
                {
                this.state = 441;
                this.usesClause();
                }
            }

            this.state = 447;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 35389442) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 4194817) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 537001985) !== 0) || _la === 118 || _la === 123) {
                {
                {
                this.state = 444;
                this.declSection();
                }
                }
                this.state = 449;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unitBlock(): UnitBlockContext {
        let localContext = new UnitBlockContext(this.context, this.state);
        this.enterRule(localContext, 24, delphiParser.RULE_unitBlock);
        try {
            this.state = 455;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.INITIALIZATION:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 450;
                this.unitInitialization();
                this.state = 451;
                this.match(delphiParser.END);
                }
                break;
            case delphiParser.BEGIN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 453;
                this.compoundStatement();
                }
                break;
            case delphiParser.END:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 454;
                this.match(delphiParser.END);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unitInitialization(): UnitInitializationContext {
        let localContext = new UnitInitializationContext(this.context, this.state);
        this.enterRule(localContext, 26, delphiParser.RULE_unitInitialization);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 457;
            this.match(delphiParser.INITIALIZATION);
            this.state = 458;
            this.statementList();
            this.state = 460;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 459;
                this.unitFinalization();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unitFinalization(): UnitFinalizationContext {
        let localContext = new UnitFinalizationContext(this.context, this.state);
        this.enterRule(localContext, 28, delphiParser.RULE_unitFinalization);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 462;
            this.match(delphiParser.FINALIZATION);
            this.state = 463;
            this.statementList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public containsClause(): ContainsClauseContext {
        let localContext = new ContainsClauseContext(this.context, this.state);
        this.enterRule(localContext, 30, delphiParser.RULE_containsClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 465;
            this.match(delphiParser.CONTAINS);
            this.state = 466;
            this.namespaceFileNameList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public requiresClause(): RequiresClauseContext {
        let localContext = new RequiresClauseContext(this.context, this.state);
        this.enterRule(localContext, 32, delphiParser.RULE_requiresClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 468;
            this.match(delphiParser.REQUIRES);
            this.state = 469;
            this.namespaceNameList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public usesClause(): UsesClauseContext {
        let localContext = new UsesClauseContext(this.context, this.state);
        this.enterRule(localContext, 34, delphiParser.RULE_usesClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 471;
            this.match(delphiParser.USES);
            this.state = 472;
            this.namespaceNameList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public usesFileClause(): UsesFileClauseContext {
        let localContext = new UsesFileClauseContext(this.context, this.state);
        this.enterRule(localContext, 36, delphiParser.RULE_usesFileClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 474;
            this.match(delphiParser.USES);
            this.state = 475;
            this.namespaceFileNameList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namespaceFileNameList(): NamespaceFileNameListContext {
        let localContext = new NamespaceFileNameListContext(this.context, this.state);
        this.enterRule(localContext, 38, delphiParser.RULE_namespaceFileNameList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 477;
            this.namespaceFileName();
            this.state = 482;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 478;
                this.match(delphiParser.COMMA);
                this.state = 479;
                this.namespaceFileName();
                }
                }
                this.state = 484;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 485;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namespaceFileName(): NamespaceFileNameContext {
        let localContext = new NamespaceFileNameContext(this.context, this.state);
        this.enterRule(localContext, 40, delphiParser.RULE_namespaceFileName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 487;
            this.namespaceName();
            this.state = 490;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 55) {
                {
                this.state = 488;
                this.match(delphiParser.IN);
                this.state = 489;
                this.match(delphiParser.QuotedString);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namespaceNameList(): NamespaceNameListContext {
        let localContext = new NamespaceNameListContext(this.context, this.state);
        this.enterRule(localContext, 42, delphiParser.RULE_namespaceNameList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 492;
            this.namespaceName();
            this.state = 497;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 493;
                this.match(delphiParser.COMMA);
                this.state = 494;
                this.namespaceName();
                }
                }
                this.state = 499;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 500;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 44, delphiParser.RULE_block);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 505;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 502;
                    this.declSection();
                    }
                    }
                }
                this.state = 507;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            }
            this.state = 509;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 508;
                this.blockBody();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockBody(): BlockBodyContext {
        let localContext = new BlockBodyContext(this.context, this.state);
        this.enterRule(localContext, 46, delphiParser.RULE_blockBody);
        try {
            this.state = 513;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.BEGIN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 511;
                this.compoundStatement();
                }
                break;
            case delphiParser.ASM:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 512;
                this.assemblerStatement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public declSection(): DeclSectionContext {
        let localContext = new DeclSectionContext(this.context, this.state);
        this.enterRule(localContext, 48, delphiParser.RULE_declSection);
        try {
            this.state = 523;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 515;
                this.labelDeclSection();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 516;
                this.constSection();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 517;
                this.typeSection();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 518;
                this.varSection();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 519;
                this.exportedProcHeading();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 520;
                this.methodDecl();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 521;
                this.procDecl();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 522;
                this.exportsSection();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceDecl(): InterfaceDeclContext {
        let localContext = new InterfaceDeclContext(this.context, this.state);
        this.enterRule(localContext, 50, delphiParser.RULE_interfaceDecl);
        try {
            this.state = 532;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 525;
                this.procDecl();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 526;
                this.methodDecl();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 527;
                this.typeSection();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 528;
                this.varSection();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 529;
                this.exportedProcHeading();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 530;
                this.exportsSection();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 531;
                this.constSection();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public labelDeclSection(): LabelDeclSectionContext {
        let localContext = new LabelDeclSectionContext(this.context, this.state);
        this.enterRule(localContext, 52, delphiParser.RULE_labelDeclSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 534;
            this.match(delphiParser.LABEL);
            this.state = 535;
            this.label();
            this.state = 540;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 536;
                this.match(delphiParser.COMMA);
                this.state = 537;
                this.label();
                }
                }
                this.state = 542;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 543;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constSection(): ConstSectionContext {
        let localContext = new ConstSectionContext(this.context, this.state);
        this.enterRule(localContext, 54, delphiParser.RULE_constSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 545;
            this.constKey();
            this.state = 549;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 546;
                    this.constDeclaration();
                    }
                    }
                }
                this.state = 551;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constKey(): ConstKeyContext {
        let localContext = new ConstKeyContext(this.context, this.state);
        this.enterRule(localContext, 56, delphiParser.RULE_constKey);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 552;
            _la = this.tokenStream.LA(1);
            if(!(_la === 19 || _la === 103)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constDeclaration(): ConstDeclarationContext {
        let localContext = new ConstDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 58, delphiParser.RULE_constDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 555;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 554;
                this.customAttribute();
                }
            }

            this.state = 557;
            this.ident();
            this.state = 560;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 141) {
                {
                this.state = 558;
                this.match(delphiParser.COLON);
                this.state = 559;
                this.typeDecl();
                }
            }

            this.state = 562;
            this.match(delphiParser.EQUAL);
            this.state = 563;
            this.constExpression();
            this.state = 567;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 24 || _la === 38 || _la === 63 || _la === 83) {
                {
                {
                this.state = 564;
                this.hintingDirective();
                }
                }
                this.state = 569;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 570;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeSection(): TypeSectionContext {
        let localContext = new TypeSectionContext(this.context, this.state);
        this.enterRule(localContext, 60, delphiParser.RULE_typeSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 572;
            this.match(delphiParser.TYPE);
            this.state = 573;
            this.typeDeclaration();
            this.state = 577;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 574;
                    this.typeDeclaration();
                    }
                    }
                }
                this.state = 579;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeDeclaration(): TypeDeclarationContext {
        let localContext = new TypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 62, delphiParser.RULE_typeDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 581;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 580;
                this.customAttribute();
                }
            }

            this.state = 583;
            this.genericTypeIdent();
            this.state = 584;
            this.match(delphiParser.EQUAL);
            this.state = 585;
            this.typeDecl();
            this.state = 589;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 24 || _la === 38 || _la === 63 || _la === 83) {
                {
                {
                this.state = 586;
                this.hintingDirective();
                }
                }
                this.state = 591;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 592;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varSection(): VarSectionContext {
        let localContext = new VarSectionContext(this.context, this.state);
        this.enterRule(localContext, 64, delphiParser.RULE_varSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 594;
            this.varKey();
            this.state = 595;
            this.varDeclaration();
            this.state = 599;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 596;
                    this.varDeclaration();
                    }
                    }
                }
                this.state = 601;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varKey(): VarKeyContext {
        let localContext = new VarKeyContext(this.context, this.state);
        this.enterRule(localContext, 66, delphiParser.RULE_varKey);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 602;
            _la = this.tokenStream.LA(1);
            if(!(_la === 115 || _la === 123)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varDeclaration(): VarDeclarationContext {
        let localContext = new VarDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 68, delphiParser.RULE_varDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 605;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 604;
                this.customAttribute();
                }
            }

            this.state = 607;
            this.identListFlat();
            this.state = 608;
            this.match(delphiParser.COLON);
            this.state = 609;
            this.typeDecl();
            this.state = 611;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2 || _la === 142) {
                {
                this.state = 610;
                this.varValueSpec();
                }
            }

            this.state = 616;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 24 || _la === 38 || _la === 63 || _la === 83) {
                {
                {
                this.state = 613;
                this.hintingDirective();
                }
                }
                this.state = 618;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 619;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varValueSpec(): VarValueSpecContext {
        let localContext = new VarValueSpecContext(this.context, this.state);
        this.enterRule(localContext, 70, delphiParser.RULE_varValueSpec);
        try {
            this.state = 627;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 621;
                this.match(delphiParser.ABSOLUTE);
                this.state = 622;
                this.ident();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 623;
                this.match(delphiParser.ABSOLUTE);
                this.state = 624;
                this.constExpression();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 625;
                this.match(delphiParser.EQUAL);
                this.state = 626;
                this.constExpression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exportsSection(): ExportsSectionContext {
        let localContext = new ExportsSectionContext(this.context, this.state);
        this.enterRule(localContext, 72, delphiParser.RULE_exportsSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 629;
            this.match(delphiParser.EXPORTS);
            this.state = 630;
            this.ident();
            this.state = 631;
            this.exportItem();
            this.state = 638;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 632;
                this.match(delphiParser.COMMA);
                this.state = 633;
                this.ident();
                this.state = 634;
                this.exportItem();
                }
                }
                this.state = 640;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 641;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exportItem(): ExportItemContext {
        let localContext = new ExportItemContext(this.context, this.state);
        this.enterRule(localContext, 74, delphiParser.RULE_exportItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 648;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 148) {
                {
                this.state = 643;
                this.match(delphiParser.LPAREN);
                this.state = 645;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 15241296) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1477050501) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 190844969) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 282631) !== 0) || _la === 160 || _la === 183) {
                    {
                    this.state = 644;
                    this.formalParameterList();
                    }
                }

                this.state = 647;
                this.match(delphiParser.RPAREN);
                }
            }

            this.state = 652;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 650;
                this.match(delphiParser.INDEX);
                this.state = 651;
                this.expression();
                }
            }

            this.state = 656;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 67) {
                {
                this.state = 654;
                this.match(delphiParser.NAME);
                this.state = 655;
                this.expression();
                }
            }

            this.state = 659;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 102) {
                {
                this.state = 658;
                this.match(delphiParser.RESIDENT);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeDecl(): TypeDeclContext {
        let localContext = new TypeDeclContext(this.context, this.state);
        this.enterRule(localContext, 76, delphiParser.RULE_typeDecl);
        let _la: number;
        try {
            this.state = 674;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 661;
                this.strucType();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 662;
                this.pointerType();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 663;
                this.stringType();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 664;
                this.procedureType();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 665;
                this.variantType();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 667;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                    this.state = 666;
                    this.match(delphiParser.TYPE);
                    }
                }

                this.state = 669;
                this.typeId();
                this.state = 671;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
                case 1:
                    {
                    this.state = 670;
                    this.genericPostfix();
                    }
                    break;
                }
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 673;
                this.simpleType();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public strucType(): StrucTypeContext {
        let localContext = new StrucTypeContext(this.context, this.state);
        this.enterRule(localContext, 78, delphiParser.RULE_strucType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 677;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 81) {
                {
                this.state = 676;
                this.match(delphiParser.PACKED);
                }
            }

            this.state = 679;
            this.strucTypePart();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public strucTypePart(): StrucTypePartContext {
        let localContext = new StrucTypePartContext(this.context, this.state);
        this.enterRule(localContext, 80, delphiParser.RULE_strucTypePart);
        try {
            this.state = 685;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.ARRAY:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 681;
                this.arrayType();
                }
                break;
            case delphiParser.SET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 682;
                this.setType();
                }
                break;
            case delphiParser.FILE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 683;
                this.fileType();
                }
                break;
            case delphiParser.CLASS:
            case delphiParser.DISPINTERFACE:
            case delphiParser.INTERFACE:
            case delphiParser.OBJECT:
            case delphiParser.RECORD:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 684;
                this.classDecl();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayType(): ArrayTypeContext {
        let localContext = new ArrayTypeContext(this.context, this.state);
        this.enterRule(localContext, 82, delphiParser.RULE_arrayType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 687;
            this.match(delphiParser.ARRAY);
            this.state = 702;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 150) {
                {
                this.state = 688;
                this.match(delphiParser.LBRACK);
                this.state = 690;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14717008) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478103173) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1526890829) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 31735815) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 203857) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 223) !== 0)) {
                    {
                    this.state = 689;
                    this.arrayIndex();
                    }
                }

                this.state = 698;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 139) {
                    {
                    {
                    this.state = 692;
                    this.match(delphiParser.COMMA);
                    this.state = 694;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14717008) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478103173) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1526890829) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 31735815) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 203857) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 223) !== 0)) {
                        {
                        this.state = 693;
                        this.arrayIndex();
                        }
                    }

                    }
                    }
                    this.state = 700;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 701;
                this.match(delphiParser.RBRACK);
                }
            }

            this.state = 704;
            this.match(delphiParser.OF);
            this.state = 705;
            this.arraySubType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayIndex(): ArrayIndexContext {
        let localContext = new ArrayIndexContext(this.context, this.state);
        this.enterRule(localContext, 84, delphiParser.RULE_arrayIndex);
        try {
            this.state = 712;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 707;
                this.typeId();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 708;
                this.expression();
                this.state = 709;
                this.match(delphiParser.DOTDOT);
                this.state = 710;
                this.expression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arraySubType(): ArraySubTypeContext {
        let localContext = new ArraySubTypeContext(this.context, this.state);
        this.enterRule(localContext, 86, delphiParser.RULE_arraySubType);
        try {
            this.state = 716;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.CONST:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 714;
                this.match(delphiParser.CONST);
                }
                break;
            case delphiParser.ADD:
            case delphiParser.ANSISTRING:
            case delphiParser.ARRAY:
            case delphiParser.AT:
            case delphiParser.BREAK:
            case delphiParser.CLASS:
            case delphiParser.CONTAINS:
            case delphiParser.CONTINUE:
            case delphiParser.DEFAULT:
            case delphiParser.DISPINTERFACE:
            case delphiParser.EXIT:
            case delphiParser.EXPORT:
            case delphiParser.FILE:
            case delphiParser.FINAL:
            case delphiParser.FUNCTION:
            case delphiParser.IMPLEMENTS:
            case delphiParser.INDEX:
            case delphiParser.INHERITED:
            case delphiParser.INTERFACE:
            case delphiParser.LOCAL:
            case delphiParser.MESSAGE:
            case delphiParser.NAME:
            case delphiParser.NIL:
            case delphiParser.NOT:
            case delphiParser.OBJECT:
            case delphiParser.OPERATOR:
            case delphiParser.OUT:
            case delphiParser.PACKED:
            case delphiParser.POINTER:
            case delphiParser.PROCEDURE:
            case delphiParser.READ:
            case delphiParser.READONLY:
            case delphiParser.RECORD:
            case delphiParser.REFERENCE:
            case delphiParser.REGISTER:
            case delphiParser.REMOVE:
            case delphiParser.SET:
            case delphiParser.STORED:
            case delphiParser.STRICT:
            case delphiParser.STRING:
            case delphiParser.TYPE:
            case delphiParser.VARIANT:
            case delphiParser.WRITE:
            case delphiParser.FALSE:
            case delphiParser.TRUE:
            case delphiParser.PLUS:
            case delphiParser.MINUS:
            case delphiParser.LT:
            case delphiParser.LPAREN:
            case delphiParser.LBRACK:
            case delphiParser.POINTER2:
            case delphiParser.AT2:
            case delphiParser.DOT:
            case delphiParser.AMBER:
            case delphiParser.DOUBLEAT:
            case delphiParser.TkIdentifier:
            case delphiParser.TkIntNum:
            case delphiParser.TkRealNum:
            case delphiParser.TkHexNum:
            case delphiParser.TkAsmHexNum:
            case delphiParser.QuotedString:
            case delphiParser.ControlString:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 715;
                this.typeDecl();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setType(): SetTypeContext {
        let localContext = new SetTypeContext(this.context, this.state);
        this.enterRule(localContext, 88, delphiParser.RULE_setType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 718;
            this.match(delphiParser.SET);
            this.state = 719;
            this.match(delphiParser.OF);
            this.state = 720;
            this.typeDecl();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fileType(): FileTypeContext {
        let localContext = new FileTypeContext(this.context, this.state);
        this.enterRule(localContext, 90, delphiParser.RULE_fileType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 722;
            this.match(delphiParser.FILE);
            this.state = 725;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 54, this.context) ) {
            case 1:
                {
                this.state = 723;
                this.match(delphiParser.OF);
                this.state = 724;
                this.typeDecl();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pointerType(): PointerTypeContext {
        let localContext = new PointerTypeContext(this.context, this.state);
        this.enterRule(localContext, 92, delphiParser.RULE_pointerType);
        try {
            this.state = 730;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.POINTER2:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 727;
                this.match(delphiParser.POINTER2);
                this.state = 728;
                this.typeDecl();
                }
                break;
            case delphiParser.POINTER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 729;
                this.match(delphiParser.POINTER);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringType(): StringTypeContext {
        let localContext = new StringTypeContext(this.context, this.state);
        this.enterRule(localContext, 94, delphiParser.RULE_stringType);
        let _la: number;
        try {
            this.state = 746;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 732;
                this.match(delphiParser.STRING);
                this.state = 737;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
                case 1:
                    {
                    this.state = 733;
                    this.match(delphiParser.LBRACK);
                    this.state = 734;
                    this.expression();
                    this.state = 735;
                    this.match(delphiParser.RBRACK);
                    }
                    break;
                }
                }
                break;
            case delphiParser.ANSISTRING:
            case delphiParser.TYPE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 740;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                    this.state = 739;
                    this.match(delphiParser.TYPE);
                    }
                }

                this.state = 742;
                this.match(delphiParser.ANSISTRING);
                this.state = 744;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context) ) {
                case 1:
                    {
                    this.state = 743;
                    this.codePageNumber();
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public codePageNumber(): CodePageNumberContext {
        let localContext = new CodePageNumberContext(this.context, this.state);
        this.enterRule(localContext, 96, delphiParser.RULE_codePageNumber);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 748;
            this.match(delphiParser.LPAREN);
            this.state = 749;
            this.intNum();
            this.state = 750;
            this.match(delphiParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public procedureType(): ProcedureTypeContext {
        let localContext = new ProcedureTypeContext(this.context, this.state);
        this.enterRule(localContext, 98, delphiParser.RULE_procedureType);
        try {
            this.state = 755;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 752;
                this.methodType();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 753;
                this.simpleProcedureType();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 754;
                this.procedureReference();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodType(): MethodTypeContext {
        let localContext = new MethodTypeContext(this.context, this.state);
        this.enterRule(localContext, 100, delphiParser.RULE_methodType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 757;
            this.procedureTypeHeading();
            this.state = 758;
            this.match(delphiParser.OF);
            this.state = 759;
            this.match(delphiParser.OBJECT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleProcedureType(): SimpleProcedureTypeContext {
        let localContext = new SimpleProcedureTypeContext(this.context, this.state);
        this.enterRule(localContext, 102, delphiParser.RULE_simpleProcedureType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 761;
            this.procedureTypeHeading();
            this.state = 766;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
            case 1:
                {
                this.state = 763;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 140) {
                    {
                    this.state = 762;
                    this.match(delphiParser.SEMI);
                    }
                }

                this.state = 765;
                this.callConventionNoSemi();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public procedureReference(): ProcedureReferenceContext {
        let localContext = new ProcedureReferenceContext(this.context, this.state);
        this.enterRule(localContext, 104, delphiParser.RULE_procedureReference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 768;
            this.match(delphiParser.REFERENCE);
            this.state = 769;
            this.match(delphiParser.TO);
            this.state = 770;
            this.procedureTypeHeading();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public procedureTypeHeading(): ProcedureTypeHeadingContext {
        let localContext = new ProcedureTypeHeadingContext(this.context, this.state);
        this.enterRule(localContext, 106, delphiParser.RULE_procedureTypeHeading);
        let _la: number;
        try {
            this.state = 785;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.FUNCTION:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 772;
                this.match(delphiParser.FUNCTION);
                this.state = 774;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 773;
                    this.formalParameterSection();
                    }
                }

                this.state = 776;
                this.match(delphiParser.COLON);
                this.state = 778;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 777;
                    this.customAttribute();
                    }
                }

                this.state = 780;
                this.typeDecl();
                }
                break;
            case delphiParser.PROCEDURE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 781;
                this.match(delphiParser.PROCEDURE);
                this.state = 783;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context) ) {
                case 1:
                    {
                    this.state = 782;
                    this.formalParameterSection();
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variantType(): VariantTypeContext {
        let localContext = new VariantTypeContext(this.context, this.state);
        this.enterRule(localContext, 108, delphiParser.RULE_variantType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 787;
            this.match(delphiParser.VARIANT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleType(): SimpleTypeContext {
        let localContext = new SimpleTypeContext(this.context, this.state);
        this.enterRule(localContext, 110, delphiParser.RULE_simpleType);
        try {
            this.state = 792;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 67, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 789;
                this.ident();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 790;
                this.subRangeType();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 791;
                this.enumType();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public subRangeType(): SubRangeTypeContext {
        let localContext = new SubRangeTypeContext(this.context, this.state);
        this.enterRule(localContext, 112, delphiParser.RULE_subRangeType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 794;
            this.constExpression();
            this.state = 797;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 68, this.context) ) {
            case 1:
                {
                this.state = 795;
                this.match(delphiParser.DOTDOT);
                this.state = 796;
                this.constExpression();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumType(): EnumTypeContext {
        let localContext = new EnumTypeContext(this.context, this.state);
        this.enterRule(localContext, 114, delphiParser.RULE_enumType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 799;
            this.match(delphiParser.LPAREN);
            this.state = 800;
            this.ident();
            this.state = 803;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 142) {
                {
                this.state = 801;
                this.match(delphiParser.EQUAL);
                this.state = 802;
                this.expression();
                }
            }

            this.state = 813;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 805;
                this.match(delphiParser.COMMA);
                this.state = 806;
                this.ident();
                this.state = 809;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 142) {
                    {
                    this.state = 807;
                    this.match(delphiParser.EQUAL);
                    this.state = 808;
                    this.expression();
                    }
                }

                }
                }
                this.state = 815;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 816;
            this.match(delphiParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeId(): TypeIdContext {
        let localContext = new TypeIdContext(this.context, this.state);
        this.enterRule(localContext, 116, delphiParser.RULE_typeId);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 818;
            this.namespacedQualifiedIdent();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericTypeIdent(): GenericTypeIdentContext {
        let localContext = new GenericTypeIdentContext(this.context, this.state);
        this.enterRule(localContext, 118, delphiParser.RULE_genericTypeIdent);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 820;
            this.qualifiedIdent();
            this.state = 822;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 144) {
                {
                this.state = 821;
                this.genericDefinition();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericDefinition(): GenericDefinitionContext {
        let localContext = new GenericDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 120, delphiParser.RULE_genericDefinition);
        try {
            this.state = 826;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 824;
                this.simpleGenericDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 825;
                this.constrainedGenericDefinition();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleGenericDefinition(): SimpleGenericDefinitionContext {
        let localContext = new SimpleGenericDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 122, delphiParser.RULE_simpleGenericDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 828;
            this.match(delphiParser.LT);
            this.state = 829;
            this.ident();
            this.state = 834;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 830;
                this.match(delphiParser.COMMA);
                this.state = 831;
                this.ident();
                }
                }
                this.state = 836;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 837;
            this.match(delphiParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constrainedGenericDefinition(): ConstrainedGenericDefinitionContext {
        let localContext = new ConstrainedGenericDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 124, delphiParser.RULE_constrainedGenericDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 839;
            this.match(delphiParser.LT);
            this.state = 840;
            this.constrainedGeneric();
            this.state = 845;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 140) {
                {
                {
                this.state = 841;
                this.match(delphiParser.SEMI);
                this.state = 842;
                this.constrainedGeneric();
                }
                }
                this.state = 847;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 848;
            this.match(delphiParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constrainedGeneric(): ConstrainedGenericContext {
        let localContext = new ConstrainedGenericContext(this.context, this.state);
        this.enterRule(localContext, 126, delphiParser.RULE_constrainedGeneric);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 850;
            this.ident();
            this.state = 860;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 141) {
                {
                this.state = 851;
                this.match(delphiParser.COLON);
                this.state = 852;
                this.genericConstraint();
                this.state = 857;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 139) {
                    {
                    {
                    this.state = 853;
                    this.match(delphiParser.COMMA);
                    this.state = 854;
                    this.genericConstraint();
                    }
                    }
                    this.state = 859;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericConstraint(): GenericConstraintContext {
        let localContext = new GenericConstraintContext(this.context, this.state);
        this.enterRule(localContext, 128, delphiParser.RULE_genericConstraint);
        let _la: number;
        try {
            this.state = 864;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.ADD:
            case delphiParser.ANSISTRING:
            case delphiParser.AT:
            case delphiParser.BREAK:
            case delphiParser.CONTAINS:
            case delphiParser.CONTINUE:
            case delphiParser.DEFAULT:
            case delphiParser.EXIT:
            case delphiParser.EXPORT:
            case delphiParser.FINAL:
            case delphiParser.IMPLEMENTS:
            case delphiParser.INDEX:
            case delphiParser.LOCAL:
            case delphiParser.MESSAGE:
            case delphiParser.NAME:
            case delphiParser.OBJECT:
            case delphiParser.OPERATOR:
            case delphiParser.OUT:
            case delphiParser.POINTER:
            case delphiParser.READ:
            case delphiParser.READONLY:
            case delphiParser.REFERENCE:
            case delphiParser.REGISTER:
            case delphiParser.REMOVE:
            case delphiParser.STORED:
            case delphiParser.STRICT:
            case delphiParser.STRING:
            case delphiParser.VARIANT:
            case delphiParser.WRITE:
            case delphiParser.AMBER:
            case delphiParser.TkIdentifier:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 862;
                this.ident();
                }
                break;
            case delphiParser.CLASS:
            case delphiParser.CONSTRUCTOR:
            case delphiParser.RECORD:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 863;
                _la = this.tokenStream.LA(1);
                if(!(_la === 18 || _la === 20 || _la === 95)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericPostfix(): GenericPostfixContext {
        let localContext = new GenericPostfixContext(this.context, this.state);
        this.enterRule(localContext, 130, delphiParser.RULE_genericPostfix);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 866;
            this.match(delphiParser.LT);
            this.state = 867;
            this.typeDecl();
            this.state = 872;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 868;
                this.match(delphiParser.COMMA);
                this.state = 869;
                this.typeDecl();
                }
                }
                this.state = 874;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 875;
            this.match(delphiParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classDecl(): ClassDeclContext {
        let localContext = new ClassDeclContext(this.context, this.state);
        this.enterRule(localContext, 132, delphiParser.RULE_classDecl);
        try {
            this.state = 884;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 877;
                this.classTypeTypeDecl();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 878;
                this.classTypeDecl();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 879;
                this.classHelperDecl();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 880;
                this.interfaceTypeDecl();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 881;
                this.objectDecl();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 882;
                this.recordDecl();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 883;
                this.recordHelperDecl();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classTypeTypeDecl(): ClassTypeTypeDeclContext {
        let localContext = new ClassTypeTypeDeclContext(this.context, this.state);
        this.enterRule(localContext, 134, delphiParser.RULE_classTypeTypeDecl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 886;
            this.match(delphiParser.CLASS);
            this.state = 887;
            this.match(delphiParser.OF);
            this.state = 888;
            this.typeId();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classTypeDecl(): ClassTypeDeclContext {
        let localContext = new ClassTypeDeclContext(this.context, this.state);
        this.enterRule(localContext, 136, delphiParser.RULE_classTypeDecl);
        let _la: number;
        try {
            this.state = 908;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 890;
                this.match(delphiParser.CLASS);
                this.state = 892;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 105) {
                    {
                    this.state = 891;
                    this.classState();
                    }
                }

                this.state = 895;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 894;
                    this.classParent();
                    }
                }

                this.state = 900;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 50114642) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1477054597) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 2339336233) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 282775) !== 0) || _la === 160 || _la === 183) {
                    {
                    {
                    this.state = 897;
                    this.classItem();
                    }
                    }
                    this.state = 902;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 903;
                this.match(delphiParser.END);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 904;
                this.match(delphiParser.CLASS);
                this.state = 906;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context) ) {
                case 1:
                    {
                    this.state = 905;
                    this.classParent();
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classState(): ClassStateContext {
        let localContext = new ClassStateContext(this.context, this.state);
        this.enterRule(localContext, 138, delphiParser.RULE_classState);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 910;
            _la = this.tokenStream.LA(1);
            if(!(_la === 3 || _la === 105)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classParent(): ClassParentContext {
        let localContext = new ClassParentContext(this.context, this.state);
        this.enterRule(localContext, 140, delphiParser.RULE_classParent);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 912;
            this.match(delphiParser.LPAREN);
            this.state = 913;
            this.genericTypeIdent();
            this.state = 918;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 914;
                this.match(delphiParser.COMMA);
                this.state = 915;
                this.genericTypeIdent();
                }
                }
                this.state = 920;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 921;
            this.match(delphiParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classItem(): ClassItemContext {
        let localContext = new ClassItemContext(this.context, this.state);
        this.enterRule(localContext, 142, delphiParser.RULE_classItem);
        let _la: number;
        try {
            this.state = 933;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 923;
                this.visibility();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 924;
                this.classMethod();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 925;
                this.classField();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 926;
                this.classProperty();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 927;
                this.constSection();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 928;
                this.typeSection();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 930;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                    this.state = 929;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 932;
                this.varSection();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classHelperDecl(): ClassHelperDeclContext {
        let localContext = new ClassHelperDeclContext(this.context, this.state);
        this.enterRule(localContext, 144, delphiParser.RULE_classHelperDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 935;
            this.match(delphiParser.CLASS);
            this.state = 936;
            this.match(delphiParser.HELPER);
            this.state = 938;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 148) {
                {
                this.state = 937;
                this.classParent();
                }
            }

            this.state = 940;
            this.match(delphiParser.FOR);
            this.state = 941;
            this.typeId();
            this.state = 945;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 34873346) !== 0) || _la === 49 || _la === 75 || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 1207959675) !== 0) || _la === 123) {
                {
                {
                this.state = 942;
                this.classHelperItem();
                }
                }
                this.state = 947;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 948;
            this.match(delphiParser.END);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classHelperItem(): ClassHelperItemContext {
        let localContext = new ClassHelperItemContext(this.context, this.state);
        this.enterRule(localContext, 146, delphiParser.RULE_classHelperItem);
        let _la: number;
        try {
            this.state = 957;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 950;
                this.visibility();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 951;
                this.classMethod();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 952;
                this.classProperty();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 954;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                    this.state = 953;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 956;
                this.varSection();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceTypeDecl(): InterfaceTypeDeclContext {
        let localContext = new InterfaceTypeDeclContext(this.context, this.state);
        this.enterRule(localContext, 148, delphiParser.RULE_interfaceTypeDecl);
        let _la: number;
        try {
            this.state = 978;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 959;
                this.interfaceKey();
                this.state = 961;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 960;
                    this.classParent();
                    }
                }

                this.state = 964;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 150) {
                    {
                    this.state = 963;
                    this.interfaceGuid();
                    }
                }

                this.state = 969;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 34865154) !== 0) || _la === 49 || _la === 75 || _la === 86 || _la === 88) {
                    {
                    {
                    this.state = 966;
                    this.interfaceItem();
                    }
                    }
                    this.state = 971;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 972;
                this.match(delphiParser.END);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 974;
                this.interfaceKey();
                this.state = 976;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 96, this.context) ) {
                case 1:
                    {
                    this.state = 975;
                    this.classParent();
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceKey(): InterfaceKeyContext {
        let localContext = new InterfaceKeyContext(this.context, this.state);
        this.enterRule(localContext, 150, delphiParser.RULE_interfaceKey);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 980;
            _la = this.tokenStream.LA(1);
            if(!(_la === 27 || _la === 60)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceGuid(): InterfaceGuidContext {
        let localContext = new InterfaceGuidContext(this.context, this.state);
        this.enterRule(localContext, 152, delphiParser.RULE_interfaceGuid);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 982;
            this.match(delphiParser.LBRACK);
            this.state = 983;
            this.match(delphiParser.QuotedString);
            this.state = 984;
            this.match(delphiParser.RBRACK);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceItem(): InterfaceItemContext {
        let localContext = new InterfaceItemContext(this.context, this.state);
        this.enterRule(localContext, 154, delphiParser.RULE_interfaceItem);
        try {
            this.state = 991;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 99, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 986;
                this.classMethod();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 988;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 98, this.context) ) {
                case 1:
                    {
                    this.state = 987;
                    this.match(delphiParser.CLASS);
                    }
                    break;
                }
                this.state = 990;
                this.classProperty();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectDecl(): ObjectDeclContext {
        let localContext = new ObjectDeclContext(this.context, this.state);
        this.enterRule(localContext, 156, delphiParser.RULE_objectDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 993;
            this.match(delphiParser.OBJECT);
            this.state = 995;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 148) {
                {
                this.state = 994;
                this.classParent();
                }
            }

            this.state = 1000;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 49590354) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1477054597) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 191787049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 278535) !== 0) || _la === 160 || _la === 183) {
                {
                {
                this.state = 997;
                this.objectItem();
                }
                }
                this.state = 1002;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1003;
            this.match(delphiParser.END);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectItem(): ObjectItemContext {
        let localContext = new ObjectItemContext(this.context, this.state);
        this.enterRule(localContext, 158, delphiParser.RULE_objectItem);
        try {
            this.state = 1008;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1005;
                this.visibility();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1006;
                this.classMethod();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1007;
                this.classField();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordDecl(): RecordDeclContext {
        let localContext = new RecordDeclContext(this.context, this.state);
        this.enterRule(localContext, 160, delphiParser.RULE_recordDecl);
        try {
            this.state = 1012;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1010;
                this.simpleRecord();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1011;
                this.variantRecord();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleRecord(): SimpleRecordContext {
        let localContext = new SimpleRecordContext(this.context, this.state);
        this.enterRule(localContext, 162, delphiParser.RULE_simpleRecord);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1014;
            this.match(delphiParser.RECORD);
            this.state = 1018;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 104, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1015;
                    this.recordField();
                    }
                    }
                }
                this.state = 1020;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 104, this.context);
            }
            this.state = 1024;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 50114642) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1477054597) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 2339336233) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 282775) !== 0) || _la === 160 || _la === 183) {
                {
                {
                this.state = 1021;
                this.recordItem();
                }
                }
                this.state = 1026;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1027;
            this.match(delphiParser.END);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variantRecord(): VariantRecordContext {
        let localContext = new VariantRecordContext(this.context, this.state);
        this.enterRule(localContext, 164, delphiParser.RULE_variantRecord);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1029;
            this.match(delphiParser.RECORD);
            this.state = 1033;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14717008) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1477050501) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 190844969) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 278535) !== 0) || _la === 160 || _la === 183) {
                {
                {
                this.state = 1030;
                this.recordField();
                }
                }
                this.state = 1035;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1036;
            this.recordVariantSection();
            this.state = 1037;
            this.match(delphiParser.END);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordItem(): RecordItemContext {
        let localContext = new RecordItemContext(this.context, this.state);
        this.enterRule(localContext, 166, delphiParser.RULE_recordItem);
        let _la: number;
        try {
            this.state = 1049;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 108, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1039;
                this.visibility();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1040;
                this.classMethod();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1041;
                this.classProperty();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1042;
                this.constSection();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1043;
                this.typeSection();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1044;
                this.recordField();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1046;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                    this.state = 1045;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 1048;
                this.varSection();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordField(): RecordFieldContext {
        let localContext = new RecordFieldContext(this.context, this.state);
        this.enterRule(localContext, 168, delphiParser.RULE_recordField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1051;
            this.identList();
            this.state = 1052;
            this.match(delphiParser.COLON);
            this.state = 1053;
            this.typeDecl();
            this.state = 1057;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 24 || _la === 38 || _la === 63 || _la === 83) {
                {
                {
                this.state = 1054;
                this.hintingDirective();
                }
                }
                this.state = 1059;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1061;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140) {
                {
                this.state = 1060;
                this.match(delphiParser.SEMI);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordVariantField(): RecordVariantFieldContext {
        let localContext = new RecordVariantFieldContext(this.context, this.state);
        this.enterRule(localContext, 170, delphiParser.RULE_recordVariantField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1063;
            this.identList();
            this.state = 1064;
            this.match(delphiParser.COLON);
            this.state = 1065;
            this.typeDecl();
            this.state = 1069;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 24 || _la === 38 || _la === 63 || _la === 83) {
                {
                {
                this.state = 1066;
                this.hintingDirective();
                }
                }
                this.state = 1071;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1073;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140) {
                {
                this.state = 1072;
                this.match(delphiParser.SEMI);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordVariantSection(): RecordVariantSectionContext {
        let localContext = new RecordVariantSectionContext(this.context, this.state);
        this.enterRule(localContext, 172, delphiParser.RULE_recordVariantSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1075;
            this.match(delphiParser.CASE);
            this.state = 1079;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 113, this.context) ) {
            case 1:
                {
                this.state = 1076;
                this.ident();
                this.state = 1077;
                this.match(delphiParser.COLON);
                }
                break;
            }
            this.state = 1081;
            this.typeDecl();
            this.state = 1082;
            this.match(delphiParser.OF);
            this.state = 1085;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.ADD:
            case delphiParser.ANSISTRING:
            case delphiParser.AT:
            case delphiParser.BREAK:
            case delphiParser.CONTAINS:
            case delphiParser.CONTINUE:
            case delphiParser.DEFAULT:
            case delphiParser.EXIT:
            case delphiParser.EXPORT:
            case delphiParser.FINAL:
            case delphiParser.FUNCTION:
            case delphiParser.IMPLEMENTS:
            case delphiParser.INDEX:
            case delphiParser.INHERITED:
            case delphiParser.LOCAL:
            case delphiParser.MESSAGE:
            case delphiParser.NAME:
            case delphiParser.NIL:
            case delphiParser.NOT:
            case delphiParser.OBJECT:
            case delphiParser.OPERATOR:
            case delphiParser.OUT:
            case delphiParser.POINTER:
            case delphiParser.PROCEDURE:
            case delphiParser.READ:
            case delphiParser.READONLY:
            case delphiParser.REFERENCE:
            case delphiParser.REGISTER:
            case delphiParser.REMOVE:
            case delphiParser.STORED:
            case delphiParser.STRICT:
            case delphiParser.STRING:
            case delphiParser.VARIANT:
            case delphiParser.WRITE:
            case delphiParser.FALSE:
            case delphiParser.TRUE:
            case delphiParser.PLUS:
            case delphiParser.MINUS:
            case delphiParser.LT:
            case delphiParser.LPAREN:
            case delphiParser.LBRACK:
            case delphiParser.POINTER2:
            case delphiParser.AT2:
            case delphiParser.DOT:
            case delphiParser.AMBER:
            case delphiParser.DOUBLEAT:
            case delphiParser.TkIdentifier:
            case delphiParser.TkIntNum:
            case delphiParser.TkRealNum:
            case delphiParser.TkHexNum:
            case delphiParser.TkAsmHexNum:
            case delphiParser.QuotedString:
            case delphiParser.ControlString:
                {
                this.state = 1083;
                this.recordVariant();
                }
                break;
            case delphiParser.SEMI:
                {
                this.state = 1084;
                this.match(delphiParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1091;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14717008) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478103173) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1526890829) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 568606727) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 203857) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 223) !== 0)) {
                {
                this.state = 1089;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case delphiParser.ADD:
                case delphiParser.ANSISTRING:
                case delphiParser.AT:
                case delphiParser.BREAK:
                case delphiParser.CONTAINS:
                case delphiParser.CONTINUE:
                case delphiParser.DEFAULT:
                case delphiParser.EXIT:
                case delphiParser.EXPORT:
                case delphiParser.FINAL:
                case delphiParser.FUNCTION:
                case delphiParser.IMPLEMENTS:
                case delphiParser.INDEX:
                case delphiParser.INHERITED:
                case delphiParser.LOCAL:
                case delphiParser.MESSAGE:
                case delphiParser.NAME:
                case delphiParser.NIL:
                case delphiParser.NOT:
                case delphiParser.OBJECT:
                case delphiParser.OPERATOR:
                case delphiParser.OUT:
                case delphiParser.POINTER:
                case delphiParser.PROCEDURE:
                case delphiParser.READ:
                case delphiParser.READONLY:
                case delphiParser.REFERENCE:
                case delphiParser.REGISTER:
                case delphiParser.REMOVE:
                case delphiParser.STORED:
                case delphiParser.STRICT:
                case delphiParser.STRING:
                case delphiParser.VARIANT:
                case delphiParser.WRITE:
                case delphiParser.FALSE:
                case delphiParser.TRUE:
                case delphiParser.PLUS:
                case delphiParser.MINUS:
                case delphiParser.LT:
                case delphiParser.LPAREN:
                case delphiParser.LBRACK:
                case delphiParser.POINTER2:
                case delphiParser.AT2:
                case delphiParser.DOT:
                case delphiParser.AMBER:
                case delphiParser.DOUBLEAT:
                case delphiParser.TkIdentifier:
                case delphiParser.TkIntNum:
                case delphiParser.TkRealNum:
                case delphiParser.TkHexNum:
                case delphiParser.TkAsmHexNum:
                case delphiParser.QuotedString:
                case delphiParser.ControlString:
                    {
                    this.state = 1087;
                    this.recordVariant();
                    }
                    break;
                case delphiParser.SEMI:
                    {
                    this.state = 1088;
                    this.match(delphiParser.SEMI);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 1093;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordVariant(): RecordVariantContext {
        let localContext = new RecordVariantContext(this.context, this.state);
        this.enterRule(localContext, 174, delphiParser.RULE_recordVariant);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1094;
            this.constExpression();
            this.state = 1099;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 1095;
                this.match(delphiParser.COMMA);
                this.state = 1096;
                this.constExpression();
                }
                }
                this.state = 1101;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1102;
            this.match(delphiParser.COLON);
            this.state = 1103;
            this.match(delphiParser.LPAREN);
            this.state = 1107;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14717008) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1477050501) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 190844969) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 278535) !== 0) || _la === 160 || _la === 183) {
                {
                {
                this.state = 1104;
                this.recordVariantField();
                }
                }
                this.state = 1109;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1110;
            this.match(delphiParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordHelperDecl(): RecordHelperDeclContext {
        let localContext = new RecordHelperDeclContext(this.context, this.state);
        this.enterRule(localContext, 176, delphiParser.RULE_recordHelperDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1112;
            this.match(delphiParser.RECORD);
            this.state = 1113;
            this.match(delphiParser.HELPER);
            this.state = 1114;
            this.match(delphiParser.FOR);
            this.state = 1115;
            this.typeId();
            this.state = 1119;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 34873346) !== 0) || _la === 49 || _la === 75 || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 134217851) !== 0)) {
                {
                {
                this.state = 1116;
                this.recordHelperItem();
                }
                }
                this.state = 1121;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1122;
            this.match(delphiParser.END);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordHelperItem(): RecordHelperItemContext {
        let localContext = new RecordHelperItemContext(this.context, this.state);
        this.enterRule(localContext, 178, delphiParser.RULE_recordHelperItem);
        try {
            this.state = 1127;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1124;
                this.visibility();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1125;
                this.classMethod();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1126;
                this.classProperty();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classMethod(): ClassMethodContext {
        let localContext = new ClassMethodContext(this.context, this.state);
        this.enterRule(localContext, 180, delphiParser.RULE_classMethod);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1197;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 137, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1130;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 1129;
                    this.customAttribute();
                    }
                }

                this.state = 1133;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                    this.state = 1132;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 1135;
                this.methodKey();
                this.state = 1136;
                this.ident();
                this.state = 1138;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 144) {
                    {
                    this.state = 1137;
                    this.genericDefinition();
                    }
                }

                this.state = 1141;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1140;
                    this.formalParameterSection();
                    }
                }

                this.state = 1143;
                this.match(delphiParser.SEMI);
                this.state = 1147;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 125, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1144;
                        this.methodDirective();
                        }
                        }
                    }
                    this.state = 1149;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 125, this.context);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1151;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 1150;
                    this.customAttribute();
                    }
                }

                this.state = 1154;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                    this.state = 1153;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 1156;
                this.match(delphiParser.FUNCTION);
                this.state = 1157;
                this.ident();
                this.state = 1159;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 144) {
                    {
                    this.state = 1158;
                    this.genericDefinition();
                    }
                }

                this.state = 1162;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1161;
                    this.formalParameterSection();
                    }
                }

                this.state = 1164;
                this.match(delphiParser.COLON);
                this.state = 1166;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 1165;
                    this.customAttribute();
                    }
                }

                this.state = 1168;
                this.typeDecl();
                this.state = 1169;
                this.match(delphiParser.SEMI);
                this.state = 1173;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 131, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1170;
                        this.methodDirective();
                        }
                        }
                    }
                    this.state = 1175;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 131, this.context);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1177;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 1176;
                    this.customAttribute();
                    }
                }

                this.state = 1180;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                    this.state = 1179;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 1182;
                this.match(delphiParser.OPERATOR);
                this.state = 1183;
                this.ident();
                this.state = 1185;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 144) {
                    {
                    this.state = 1184;
                    this.genericDefinition();
                    }
                }

                this.state = 1188;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1187;
                    this.formalParameterSection();
                    }
                }

                this.state = 1190;
                this.match(delphiParser.COLON);
                this.state = 1192;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 1191;
                    this.customAttribute();
                    }
                }

                this.state = 1194;
                this.typeDecl();
                this.state = 1195;
                this.match(delphiParser.SEMI);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classField(): ClassFieldContext {
        let localContext = new ClassFieldContext(this.context, this.state);
        this.enterRule(localContext, 182, delphiParser.RULE_classField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1200;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 1199;
                this.customAttribute();
                }
            }

            this.state = 1202;
            this.identList();
            this.state = 1203;
            this.match(delphiParser.COLON);
            this.state = 1204;
            this.typeDecl();
            this.state = 1205;
            this.match(delphiParser.SEMI);
            this.state = 1209;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 24 || _la === 38 || _la === 63 || _la === 83) {
                {
                {
                this.state = 1206;
                this.hintingDirective();
                }
                }
                this.state = 1211;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classProperty(): ClassPropertyContext {
        let localContext = new ClassPropertyContext(this.context, this.state);
        this.enterRule(localContext, 184, delphiParser.RULE_classProperty);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1213;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 1212;
                this.customAttribute();
                }
            }

            this.state = 1216;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 1215;
                this.match(delphiParser.CLASS);
                }
            }

            this.state = 1218;
            this.match(delphiParser.PROPERTY);
            this.state = 1219;
            this.ident();
            this.state = 1221;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 150) {
                {
                this.state = 1220;
                this.classPropertyArray();
                }
            }

            this.state = 1225;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 141) {
                {
                this.state = 1223;
                this.match(delphiParser.COLON);
                this.state = 1224;
                this.genericTypeIdent();
                }
            }

            this.state = 1228;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 1227;
                this.classPropertyIndex();
                }
            }

            this.state = 1233;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 2147483657) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 25165825) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 786433) !== 0)) {
                {
                {
                this.state = 1230;
                this.classPropertySpecifier();
                }
                }
                this.state = 1235;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1236;
            this.match(delphiParser.SEMI);
            this.state = 1240;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 146, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1237;
                    this.classPropertyEndSpecifier();
                    }
                    }
                }
                this.state = 1242;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 146, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classPropertyArray(): ClassPropertyArrayContext {
        let localContext = new ClassPropertyArrayContext(this.context, this.state);
        this.enterRule(localContext, 186, delphiParser.RULE_classPropertyArray);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1243;
            this.match(delphiParser.LBRACK);
            this.state = 1244;
            this.formalParameterList();
            this.state = 1245;
            this.match(delphiParser.RBRACK);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classPropertyIndex(): ClassPropertyIndexContext {
        let localContext = new ClassPropertyIndexContext(this.context, this.state);
        this.enterRule(localContext, 188, delphiParser.RULE_classPropertyIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1247;
            this.match(delphiParser.INDEX);
            this.state = 1248;
            this.expression();
            this.state = 1250;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 147, this.context) ) {
            case 1:
                {
                this.state = 1249;
                this.match(delphiParser.SEMI);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classPropertySpecifier(): ClassPropertySpecifierContext {
        let localContext = new ClassPropertySpecifierContext(this.context, this.state);
        this.enterRule(localContext, 190, delphiParser.RULE_classPropertySpecifier);
        let _la: number;
        try {
            this.state = 1261;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 148, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1252;
                this.classPropertyReadWrite();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1253;
                this.classPropertyDispInterface();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1254;
                this.match(delphiParser.STORED);
                this.state = 1255;
                this.expression();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1256;
                this.match(delphiParser.DEFAULT);
                this.state = 1257;
                this.expression();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1258;
                _la = this.tokenStream.LA(1);
                if(!(_la === 23 || _la === 70)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1259;
                this.match(delphiParser.IMPLEMENTS);
                this.state = 1260;
                this.typeId();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classPropertyEndSpecifier(): ClassPropertyEndSpecifierContext {
        let localContext = new ClassPropertyEndSpecifierContext(this.context, this.state);
        this.enterRule(localContext, 192, delphiParser.RULE_classPropertyEndSpecifier);
        try {
            this.state = 1275;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 149, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1263;
                this.match(delphiParser.STORED);
                this.state = 1264;
                this.expression();
                this.state = 1265;
                this.match(delphiParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1267;
                this.match(delphiParser.DEFAULT);
                this.state = 1268;
                this.expression();
                this.state = 1269;
                this.match(delphiParser.SEMI);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1271;
                this.match(delphiParser.DEFAULT);
                this.state = 1272;
                this.match(delphiParser.SEMI);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1273;
                this.match(delphiParser.NODEFAULT);
                this.state = 1274;
                this.match(delphiParser.SEMI);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classPropertyReadWrite(): ClassPropertyReadWriteContext {
        let localContext = new ClassPropertyReadWriteContext(this.context, this.state);
        this.enterRule(localContext, 194, delphiParser.RULE_classPropertyReadWrite);
        let _la: number;
        try {
            this.state = 1293;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.READ:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1277;
                this.match(delphiParser.READ);
                this.state = 1278;
                this.qualifiedIdent();
                this.state = 1283;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 150) {
                    {
                    this.state = 1279;
                    this.match(delphiParser.LBRACK);
                    this.state = 1280;
                    this.expression();
                    this.state = 1281;
                    this.match(delphiParser.RBRACK);
                    }
                }

                }
                break;
            case delphiParser.WRITE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1285;
                this.match(delphiParser.WRITE);
                this.state = 1286;
                this.qualifiedIdent();
                this.state = 1291;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 150) {
                    {
                    this.state = 1287;
                    this.match(delphiParser.LBRACK);
                    this.state = 1288;
                    this.expression();
                    this.state = 1289;
                    this.match(delphiParser.RBRACK);
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classPropertyDispInterface(): ClassPropertyDispInterfaceContext {
        let localContext = new ClassPropertyDispInterfaceContext(this.context, this.state);
        this.enterRule(localContext, 196, delphiParser.RULE_classPropertyDispInterface);
        try {
            this.state = 1300;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.READONLY:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1295;
                this.match(delphiParser.READONLY);
                this.state = 1296;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.WRITEONLY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1297;
                this.match(delphiParser.WRITEONLY);
                this.state = 1298;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.DISPID:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1299;
                this.dispIDDirective();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public visibility(): VisibilityContext {
        let localContext = new VisibilityContext(this.context, this.state);
        this.enterRule(localContext, 198, delphiParser.RULE_visibility);
        let _la: number;
        try {
            this.state = 1311;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 156, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1303;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 112) {
                    {
                    this.state = 1302;
                    this.match(delphiParser.STRICT);
                    }
                }

                this.state = 1305;
                this.match(delphiParser.PROTECTED);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1307;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 112) {
                    {
                    this.state = 1306;
                    this.match(delphiParser.STRICT);
                    }
                }

                this.state = 1309;
                this.match(delphiParser.PRIVATE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1310;
                _la = this.tokenStream.LA(1);
                if(!(_la === 13 || _la === 90 || _la === 91)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exportedProcHeading(): ExportedProcHeadingContext {
        let localContext = new ExportedProcHeadingContext(this.context, this.state);
        this.enterRule(localContext, 200, delphiParser.RULE_exportedProcHeading);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1342;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.PROCEDURE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1313;
                this.match(delphiParser.PROCEDURE);
                this.state = 1314;
                this.ident();
                this.state = 1316;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1315;
                    this.formalParameterSection();
                    }
                }

                this.state = 1318;
                this.match(delphiParser.COLON);
                this.state = 1320;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 1319;
                    this.customAttribute();
                    }
                }

                this.state = 1322;
                this.typeDecl();
                this.state = 1323;
                this.match(delphiParser.SEMI);
                this.state = 1327;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 159, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1324;
                        this.functionDirective();
                        }
                        }
                    }
                    this.state = 1329;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 159, this.context);
                }
                }
                break;
            case delphiParser.FUNCTION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1330;
                this.match(delphiParser.FUNCTION);
                this.state = 1331;
                this.ident();
                this.state = 1333;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1332;
                    this.formalParameterSection();
                    }
                }

                this.state = 1335;
                this.match(delphiParser.SEMI);
                this.state = 1339;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1336;
                        this.functionDirective();
                        }
                        }
                    }
                    this.state = 1341;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodDecl(): MethodDeclContext {
        let localContext = new MethodDeclContext(this.context, this.state);
        this.enterRule(localContext, 202, delphiParser.RULE_methodDecl);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1344;
            this.methodDeclHeading();
            this.state = 1345;
            this.match(delphiParser.SEMI);
            this.state = 1349;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 163, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1346;
                    this.methodDirective();
                    }
                    }
                }
                this.state = 1351;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 163, this.context);
            }
            this.state = 1353;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context) ) {
            case 1:
                {
                this.state = 1352;
                this.methodBody();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodDeclHeading(): MethodDeclHeadingContext {
        let localContext = new MethodDeclHeadingContext(this.context, this.state);
        this.enterRule(localContext, 204, delphiParser.RULE_methodDeclHeading);
        let _la: number;
        try {
            this.state = 1400;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 177, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1356;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 1355;
                    this.customAttribute();
                    }
                }

                this.state = 1359;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                    this.state = 1358;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 1361;
                this.methodKey();
                this.state = 1362;
                this.methodName();
                this.state = 1364;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1363;
                    this.formalParameterSection();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1367;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 1366;
                    this.customAttribute();
                    }
                }

                this.state = 1370;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                    this.state = 1369;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 1372;
                this.match(delphiParser.FUNCTION);
                this.state = 1373;
                this.methodName();
                this.state = 1375;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1374;
                    this.formalParameterSection();
                    }
                }

                this.state = 1382;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 141) {
                    {
                    this.state = 1377;
                    this.match(delphiParser.COLON);
                    this.state = 1379;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 1) {
                        {
                        this.state = 1378;
                        this.customAttribute();
                        }
                    }

                    this.state = 1381;
                    this.typeDecl();
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1385;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 1384;
                    this.customAttribute();
                    }
                }

                this.state = 1387;
                this.match(delphiParser.CLASS);
                this.state = 1388;
                this.match(delphiParser.OPERATOR);
                this.state = 1389;
                this.methodName();
                this.state = 1391;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1390;
                    this.formalParameterSection();
                    }
                }

                this.state = 1398;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 141) {
                    {
                    this.state = 1393;
                    this.match(delphiParser.COLON);
                    this.state = 1395;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 1) {
                        {
                        this.state = 1394;
                        this.customAttribute();
                        }
                    }

                    this.state = 1397;
                    this.typeDecl();
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodKey(): MethodKeyContext {
        let localContext = new MethodKeyContext(this.context, this.state);
        this.enterRule(localContext, 206, delphiParser.RULE_methodKey);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1402;
            _la = this.tokenStream.LA(1);
            if(!(_la === 20 || _la === 25 || _la === 86)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodName(): MethodNameContext {
        let localContext = new MethodNameContext(this.context, this.state);
        this.enterRule(localContext, 208, delphiParser.RULE_methodName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1404;
            this.ident();
            this.state = 1406;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 144) {
                {
                this.state = 1405;
                this.genericDefinition();
                }
            }

            this.state = 1413;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 180, this.context) ) {
            case 1:
                {
                this.state = 1408;
                this.match(delphiParser.DOT);
                this.state = 1409;
                this.ident();
                this.state = 1411;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 144) {
                    {
                    this.state = 1410;
                    this.genericDefinition();
                    }
                }

                }
                break;
            }
            this.state = 1415;
            this.match(delphiParser.DOT);
            this.state = 1416;
            this.ident();
            this.state = 1418;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 144) {
                {
                this.state = 1417;
                this.genericDefinition();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public procDecl(): ProcDeclContext {
        let localContext = new ProcDeclContext(this.context, this.state);
        this.enterRule(localContext, 210, delphiParser.RULE_procDecl);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1420;
            this.procDeclHeading();
            this.state = 1421;
            this.match(delphiParser.SEMI);
            this.state = 1425;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 182, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1422;
                    this.functionDirective();
                    }
                    }
                }
                this.state = 1427;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 182, this.context);
            }
            this.state = 1429;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 183, this.context) ) {
            case 1:
                {
                this.state = 1428;
                this.procBody();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public procDeclHeading(): ProcDeclHeadingContext {
        let localContext = new ProcDeclHeadingContext(this.context, this.state);
        this.enterRule(localContext, 212, delphiParser.RULE_procDeclHeading);
        let _la: number;
        try {
            this.state = 1450;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 188, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1432;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 1431;
                    this.customAttribute();
                    }
                }

                this.state = 1434;
                this.match(delphiParser.PROCEDURE);
                this.state = 1435;
                this.ident();
                this.state = 1437;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1436;
                    this.formalParameterSection();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1440;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 1439;
                    this.customAttribute();
                    }
                }

                this.state = 1442;
                this.match(delphiParser.FUNCTION);
                this.state = 1443;
                this.ident();
                this.state = 1445;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1444;
                    this.formalParameterSection();
                    }
                }

                this.state = 1447;
                this.match(delphiParser.COLON);
                this.state = 1448;
                this.typeDecl();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public formalParameterSection(): FormalParameterSectionContext {
        let localContext = new FormalParameterSectionContext(this.context, this.state);
        this.enterRule(localContext, 214, delphiParser.RULE_formalParameterSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1452;
            this.match(delphiParser.LPAREN);
            this.state = 1454;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 15241296) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1477050501) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 190844969) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 282631) !== 0) || _la === 160 || _la === 183) {
                {
                this.state = 1453;
                this.formalParameterList();
                }
            }

            this.state = 1456;
            this.match(delphiParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public formalParameterList(): FormalParameterListContext {
        let localContext = new FormalParameterListContext(this.context, this.state);
        this.enterRule(localContext, 216, delphiParser.RULE_formalParameterList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1458;
            this.formalParameter();
            this.state = 1463;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 140) {
                {
                {
                this.state = 1459;
                this.match(delphiParser.SEMI);
                this.state = 1460;
                this.formalParameter();
                }
                }
                this.state = 1465;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public formalParameter(): FormalParameterContext {
        let localContext = new FormalParameterContext(this.context, this.state);
        this.enterRule(localContext, 218, delphiParser.RULE_formalParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1467;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 191, this.context) ) {
            case 1:
                {
                this.state = 1466;
                this.parmType();
                }
                break;
            }
            this.state = 1469;
            this.identListFlat();
            this.state = 1472;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 141) {
                {
                this.state = 1470;
                this.match(delphiParser.COLON);
                this.state = 1471;
                this.typeDecl();
                }
            }

            this.state = 1476;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 142) {
                {
                this.state = 1474;
                this.match(delphiParser.EQUAL);
                this.state = 1475;
                this.expression();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parmType(): ParmTypeContext {
        let localContext = new ParmTypeContext(this.context, this.state);
        this.enterRule(localContext, 220, delphiParser.RULE_parmType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1478;
            _la = this.tokenStream.LA(1);
            if(!(_la === 19 || _la === 77 || _la === 123)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodBody(): MethodBodyContext {
        let localContext = new MethodBodyContext(this.context, this.state);
        this.enterRule(localContext, 222, delphiParser.RULE_methodBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1480;
            this.block();
            this.state = 1481;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public procBody(): ProcBodyContext {
        let localContext = new ProcBodyContext(this.context, this.state);
        this.enterRule(localContext, 224, delphiParser.RULE_procBody);
        try {
            let alternative: number;
            this.state = 1510;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.FORWARD:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1483;
                this.match(delphiParser.FORWARD);
                this.state = 1484;
                this.match(delphiParser.SEMI);
                this.state = 1488;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 194, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1485;
                        this.functionDirective();
                        }
                        }
                    }
                    this.state = 1490;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 194, this.context);
                }
                }
                break;
            case delphiParser.EXTERNAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1491;
                this.match(delphiParser.EXTERNAL);
                this.state = 1498;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 196, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        this.state = 1496;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case delphiParser.NAME:
                            {
                            this.state = 1492;
                            this.match(delphiParser.NAME);
                            this.state = 1493;
                            this.expression();
                            }
                            break;
                        case delphiParser.INDEX:
                            {
                            this.state = 1494;
                            this.match(delphiParser.INDEX);
                            this.state = 1495;
                            this.expression();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                    }
                    this.state = 1500;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 196, this.context);
                }
                this.state = 1504;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 197, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1501;
                        this.functionDirective();
                        }
                        }
                    }
                    this.state = 1506;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 197, this.context);
                }
                }
                break;
            case delphiParser.T__0:
            case delphiParser.ASM:
            case delphiParser.BEGIN:
            case delphiParser.CLASS:
            case delphiParser.CONST:
            case delphiParser.CONSTRUCTOR:
            case delphiParser.DESTRUCTOR:
            case delphiParser.EXPORTS:
            case delphiParser.FUNCTION:
            case delphiParser.LABEL:
            case delphiParser.PROCEDURE:
            case delphiParser.RESOURCESTRING:
            case delphiParser.THREADVAR:
            case delphiParser.TYPE:
            case delphiParser.VAR:
            case delphiParser.SEMI:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1507;
                this.block();
                this.state = 1508;
                this.match(delphiParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public customAttribute(): CustomAttributeContext {
        let localContext = new CustomAttributeContext(this.context, this.state);
        this.enterRule(localContext, 226, delphiParser.RULE_customAttribute);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1512;
            this.match(delphiParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public customAttributeList(): CustomAttributeListContext {
        let localContext = new CustomAttributeListContext(this.context, this.state);
        this.enterRule(localContext, 228, delphiParser.RULE_customAttributeList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1517;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 150) {
                {
                {
                this.state = 1514;
                this.customAttributeDecl();
                }
                }
                this.state = 1519;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public customAttributeDecl(): CustomAttributeDeclContext {
        let localContext = new CustomAttributeDeclContext(this.context, this.state);
        this.enterRule(localContext, 230, delphiParser.RULE_customAttributeDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1520;
            this.match(delphiParser.LBRACK);
            this.state = 1521;
            this.namespacedQualifiedIdent();
            this.state = 1527;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 148) {
                {
                this.state = 1522;
                this.match(delphiParser.LPAREN);
                this.state = 1524;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14717008) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478103173) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1526890829) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 31735815) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 203857) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 223) !== 0)) {
                    {
                    this.state = 1523;
                    this.expressionList();
                    }
                }

                this.state = 1526;
                this.match(delphiParser.RPAREN);
                }
            }

            this.state = 1529;
            this.match(delphiParser.RBRACK);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 232, delphiParser.RULE_expression);
        try {
            this.state = 1542;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.FUNCTION:
            case delphiParser.PROCEDURE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1531;
                this.anonymousExpression();
                }
                break;
            case delphiParser.ADD:
            case delphiParser.ANSISTRING:
            case delphiParser.AT:
            case delphiParser.BREAK:
            case delphiParser.CONTAINS:
            case delphiParser.CONTINUE:
            case delphiParser.DEFAULT:
            case delphiParser.EXIT:
            case delphiParser.EXPORT:
            case delphiParser.FINAL:
            case delphiParser.IMPLEMENTS:
            case delphiParser.INDEX:
            case delphiParser.INHERITED:
            case delphiParser.LOCAL:
            case delphiParser.MESSAGE:
            case delphiParser.NAME:
            case delphiParser.NIL:
            case delphiParser.NOT:
            case delphiParser.OBJECT:
            case delphiParser.OPERATOR:
            case delphiParser.OUT:
            case delphiParser.POINTER:
            case delphiParser.READ:
            case delphiParser.READONLY:
            case delphiParser.REFERENCE:
            case delphiParser.REGISTER:
            case delphiParser.REMOVE:
            case delphiParser.STORED:
            case delphiParser.STRICT:
            case delphiParser.STRING:
            case delphiParser.VARIANT:
            case delphiParser.WRITE:
            case delphiParser.FALSE:
            case delphiParser.TRUE:
            case delphiParser.PLUS:
            case delphiParser.MINUS:
            case delphiParser.LT:
            case delphiParser.LPAREN:
            case delphiParser.LBRACK:
            case delphiParser.POINTER2:
            case delphiParser.AT2:
            case delphiParser.DOT:
            case delphiParser.AMBER:
            case delphiParser.DOUBLEAT:
            case delphiParser.TkIdentifier:
            case delphiParser.TkIntNum:
            case delphiParser.TkRealNum:
            case delphiParser.TkHexNum:
            case delphiParser.TkAsmHexNum:
            case delphiParser.QuotedString:
            case delphiParser.ControlString:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1532;
                this.simpleExpression();
                this.state = 1536;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 202, this.context) ) {
                case 1:
                    {
                    this.state = 1533;
                    this.relOp();
                    this.state = 1534;
                    this.simpleExpression();
                    }
                    break;
                }
                this.state = 1540;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 203, this.context) ) {
                case 1:
                    {
                    this.state = 1538;
                    this.match(delphiParser.EQUAL);
                    this.state = 1539;
                    this.expression();
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public anonymousExpression(): AnonymousExpressionContext {
        let localContext = new AnonymousExpressionContext(this.context, this.state);
        this.enterRule(localContext, 234, delphiParser.RULE_anonymousExpression);
        let _la: number;
        try {
            this.state = 1557;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.PROCEDURE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1544;
                this.match(delphiParser.PROCEDURE);
                this.state = 1546;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 205, this.context) ) {
                case 1:
                    {
                    this.state = 1545;
                    this.formalParameterSection();
                    }
                    break;
                }
                this.state = 1548;
                this.block();
                }
                break;
            case delphiParser.FUNCTION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1549;
                this.match(delphiParser.FUNCTION);
                this.state = 1551;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                    this.state = 1550;
                    this.formalParameterSection();
                    }
                }

                this.state = 1553;
                this.match(delphiParser.COLON);
                this.state = 1554;
                this.typeDecl();
                this.state = 1555;
                this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleExpression(): SimpleExpressionContext {
        let localContext = new SimpleExpressionContext(this.context, this.state);
        this.enterRule(localContext, 236, delphiParser.RULE_simpleExpression);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1559;
            this.factor();
            this.state = 1565;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 208, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1560;
                    this.operator();
                    this.state = 1561;
                    this.factor();
                    }
                    }
                }
                this.state = 1567;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 208, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public factor(): FactorContext {
        let localContext = new FactorContext(this.context, this.state);
        this.enterRule(localContext, 238, delphiParser.RULE_factor);
        let _la: number;
        try {
            this.state = 1601;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 211, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1568;
                this.match(delphiParser.AT2);
                this.state = 1569;
                this.factor();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1570;
                this.match(delphiParser.DOUBLEAT);
                this.state = 1571;
                this.factor();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1572;
                this.match(delphiParser.NOT);
                this.state = 1573;
                this.factor();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1574;
                this.match(delphiParser.PLUS);
                this.state = 1575;
                this.factor();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1576;
                this.match(delphiParser.MINUS);
                this.state = 1577;
                this.factor();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1578;
                this.match(delphiParser.POINTER2);
                this.state = 1579;
                this.ident();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1580;
                this.intNum();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1581;
                this.realNum();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1582;
                _la = this.tokenStream.LA(1);
                if(!(_la === 69 || _la === 132 || _la === 133 || _la === 187)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1583;
                this.match(delphiParser.LPAREN);
                this.state = 1584;
                this.expression();
                this.state = 1585;
                this.match(delphiParser.RPAREN);
                this.state = 1587;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 209, this.context) ) {
                case 1:
                    {
                    this.state = 1586;
                    this.match(delphiParser.POINTER2);
                    }
                    break;
                }
                this.state = 1591;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 210, this.context) ) {
                case 1:
                    {
                    this.state = 1589;
                    this.match(delphiParser.DOT);
                    this.state = 1590;
                    this.expression();
                    }
                    break;
                }
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1593;
                this.stringFactor();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1594;
                this.setSection();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1595;
                this.designator();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1596;
                this.typeId();
                this.state = 1597;
                this.match(delphiParser.LPAREN);
                this.state = 1598;
                this.expression();
                this.state = 1599;
                this.match(delphiParser.RPAREN);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringFactor(): StringFactorContext {
        let localContext = new StringFactorContext(this.context, this.state);
        this.enterRule(localContext, 240, delphiParser.RULE_stringFactor);
        try {
            let alternative: number;
            this.state = 1625;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.ControlString:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1603;
                this.match(delphiParser.ControlString);
                this.state = 1608;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 212, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1604;
                        this.match(delphiParser.QuotedString);
                        this.state = 1605;
                        this.match(delphiParser.ControlString);
                        }
                        }
                    }
                    this.state = 1610;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 212, this.context);
                }
                this.state = 1612;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 213, this.context) ) {
                case 1:
                    {
                    this.state = 1611;
                    this.match(delphiParser.QuotedString);
                    }
                    break;
                }
                }
                break;
            case delphiParser.QuotedString:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1614;
                this.match(delphiParser.QuotedString);
                this.state = 1619;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 214, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1615;
                        this.match(delphiParser.ControlString);
                        this.state = 1616;
                        this.match(delphiParser.QuotedString);
                        }
                        }
                    }
                    this.state = 1621;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 214, this.context);
                }
                this.state = 1623;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 215, this.context) ) {
                case 1:
                    {
                    this.state = 1622;
                    this.match(delphiParser.ControlString);
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setSection(): SetSectionContext {
        let localContext = new SetSectionContext(this.context, this.state);
        this.enterRule(localContext, 242, delphiParser.RULE_setSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1627;
            this.match(delphiParser.LBRACK);
            this.state = 1636;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14717008) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478103173) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1526890829) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 31735815) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 203857) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 223) !== 0)) {
                {
                this.state = 1628;
                this.expression();
                this.state = 1633;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 139 || _la === 157) {
                    {
                    {
                    this.state = 1629;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 139 || _la === 157)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1630;
                    this.expression();
                    }
                    }
                    this.state = 1635;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1638;
            this.match(delphiParser.RBRACK);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public designator(): DesignatorContext {
        let localContext = new DesignatorContext(this.context, this.state);
        this.enterRule(localContext, 244, delphiParser.RULE_designator);
        try {
            let alternative: number;
            this.state = 1647;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.INHERITED:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1640;
                this.match(delphiParser.INHERITED);
                }
                break;
            case delphiParser.ADD:
            case delphiParser.ANSISTRING:
            case delphiParser.AT:
            case delphiParser.BREAK:
            case delphiParser.CONTAINS:
            case delphiParser.CONTINUE:
            case delphiParser.DEFAULT:
            case delphiParser.EXIT:
            case delphiParser.EXPORT:
            case delphiParser.FINAL:
            case delphiParser.IMPLEMENTS:
            case delphiParser.INDEX:
            case delphiParser.LOCAL:
            case delphiParser.MESSAGE:
            case delphiParser.NAME:
            case delphiParser.OBJECT:
            case delphiParser.OPERATOR:
            case delphiParser.OUT:
            case delphiParser.POINTER:
            case delphiParser.READ:
            case delphiParser.READONLY:
            case delphiParser.REFERENCE:
            case delphiParser.REGISTER:
            case delphiParser.REMOVE:
            case delphiParser.STORED:
            case delphiParser.STRICT:
            case delphiParser.STRING:
            case delphiParser.VARIANT:
            case delphiParser.WRITE:
            case delphiParser.AMBER:
            case delphiParser.TkIdentifier:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1641;
                this.typeId();
                }
                break;
            case delphiParser.LT:
            case delphiParser.LPAREN:
            case delphiParser.LBRACK:
            case delphiParser.POINTER2:
            case delphiParser.AT2:
            case delphiParser.DOT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1643;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 1642;
                        this.designatorItem();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1645;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 219, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public designatorItem(): DesignatorItemContext {
        let localContext = new DesignatorItemContext(this.context, this.state);
        this.enterRule(localContext, 246, delphiParser.RULE_designatorItem);
        let _la: number;
        try {
            this.state = 1685;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.POINTER2:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1649;
                this.match(delphiParser.POINTER2);
                }
                break;
            case delphiParser.AT2:
            case delphiParser.DOT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1650;
                _la = this.tokenStream.LA(1);
                if(!(_la === 155 || _la === 156)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1651;
                this.ident();
                }
                break;
            case delphiParser.LT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1652;
                this.match(delphiParser.LT);
                this.state = 1653;
                this.genericTypeIdent();
                this.state = 1658;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 139) {
                    {
                    {
                    this.state = 1654;
                    this.match(delphiParser.COMMA);
                    this.state = 1655;
                    this.genericTypeIdent();
                    }
                    }
                    this.state = 1660;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1661;
                this.match(delphiParser.GT);
                }
                break;
            case delphiParser.LBRACK:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1663;
                this.match(delphiParser.LBRACK);
                this.state = 1664;
                this.expressionList();
                this.state = 1665;
                this.match(delphiParser.RBRACK);
                }
                break;
            case delphiParser.LPAREN:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1667;
                this.match(delphiParser.LPAREN);
                this.state = 1682;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14717008) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478103173) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1526890829) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 31735815) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 203857) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 223) !== 0)) {
                    {
                    this.state = 1668;
                    this.expression();
                    this.state = 1670;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 141) {
                        {
                        this.state = 1669;
                        this.colonConstruct();
                        }
                    }

                    this.state = 1679;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 139) {
                        {
                        {
                        this.state = 1672;
                        this.match(delphiParser.COMMA);
                        this.state = 1673;
                        this.expression();
                        this.state = 1675;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 141) {
                            {
                            this.state = 1674;
                            this.colonConstruct();
                            }
                        }

                        }
                        }
                        this.state = 1681;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1684;
                this.match(delphiParser.RPAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionList(): ExpressionListContext {
        let localContext = new ExpressionListContext(this.context, this.state);
        this.enterRule(localContext, 248, delphiParser.RULE_expressionList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1687;
            this.expression();
            this.state = 1692;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 1688;
                this.match(delphiParser.COMMA);
                this.state = 1689;
                this.expression();
                }
                }
                this.state = 1694;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public colonConstruct(): ColonConstructContext {
        let localContext = new ColonConstructContext(this.context, this.state);
        this.enterRule(localContext, 250, delphiParser.RULE_colonConstruct);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1695;
            this.match(delphiParser.COLON);
            this.state = 1696;
            this.expression();
            this.state = 1699;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 141) {
                {
                this.state = 1697;
                this.match(delphiParser.COLON);
                this.state = 1698;
                this.expression();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public operator(): OperatorContext {
        let localContext = new OperatorContext(this.context, this.state);
        this.enterRule(localContext, 252, delphiParser.RULE_operator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1701;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268435744) !== 0) || _la === 66 || _la === 76 || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 2030043139) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relOp(): RelOpContext {
        let localContext = new RelOpContext(this.context, this.state);
        this.enterRule(localContext, 254, delphiParser.RULE_relOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1703;
            _la = this.tokenStream.LA(1);
            if(!(_la === 55 || _la === 61 || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 63) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 256, delphiParser.RULE_statement);
        try {
            this.state = 1720;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 229, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1705;
                this.ifStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1706;
                this.caseStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1707;
                this.repeatStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1708;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1709;
                this.forStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1710;
                this.withStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1711;
                this.tryStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1712;
                this.raiseStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1713;
                this.assemblerStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1714;
                this.compoundStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1715;
                this.label();
                this.state = 1716;
                this.match(delphiParser.COLON);
                this.state = 1717;
                this.statement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1719;
                this.simpleStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 258, delphiParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1722;
            this.match(delphiParser.IF);
            this.state = 1723;
            this.expression();
            this.state = 1724;
            this.match(delphiParser.THEN);
            this.state = 1725;
            this.statement();
            this.state = 1728;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 230, this.context) ) {
            case 1:
                {
                this.state = 1726;
                this.match(delphiParser.ELSE);
                this.state = 1727;
                this.statement();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caseStatement(): CaseStatementContext {
        let localContext = new CaseStatementContext(this.context, this.state);
        this.enterRule(localContext, 260, delphiParser.RULE_caseStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1730;
            this.match(delphiParser.CASE);
            this.state = 1731;
            this.expression();
            this.state = 1732;
            this.match(delphiParser.OF);
            this.state = 1736;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14717008) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478103173) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1526890829) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 31735815) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 203857) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 223) !== 0)) {
                {
                {
                this.state = 1733;
                this.caseItem();
                }
                }
                this.state = 1738;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1744;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1739;
                this.match(delphiParser.ELSE);
                this.state = 1740;
                this.statementList();
                this.state = 1742;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 140) {
                    {
                    this.state = 1741;
                    this.match(delphiParser.SEMI);
                    }
                }

                }
            }

            this.state = 1746;
            this.match(delphiParser.END);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caseItem(): CaseItemContext {
        let localContext = new CaseItemContext(this.context, this.state);
        this.enterRule(localContext, 262, delphiParser.RULE_caseItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1748;
            this.caseLabel();
            this.state = 1753;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 1749;
                this.match(delphiParser.COMMA);
                this.state = 1750;
                this.caseLabel();
                }
                }
                this.state = 1755;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1756;
            this.match(delphiParser.COLON);
            this.state = 1757;
            this.statement();
            this.state = 1759;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140) {
                {
                this.state = 1758;
                this.match(delphiParser.SEMI);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caseLabel(): CaseLabelContext {
        let localContext = new CaseLabelContext(this.context, this.state);
        this.enterRule(localContext, 264, delphiParser.RULE_caseLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1761;
            this.expression();
            this.state = 1764;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 157) {
                {
                this.state = 1762;
                this.match(delphiParser.DOTDOT);
                this.state = 1763;
                this.expression();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public repeatStatement(): RepeatStatementContext {
        let localContext = new RepeatStatementContext(this.context, this.state);
        this.enterRule(localContext, 266, delphiParser.RULE_repeatStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1766;
            this.match(delphiParser.REPEAT);
            this.state = 1768;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14799440) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478141061) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 460329001) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 475207) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 72785) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 11) !== 0)) {
                {
                this.state = 1767;
                this.statementList();
                }
            }

            this.state = 1770;
            this.match(delphiParser.UNTIL);
            this.state = 1771;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileStatement(): WhileStatementContext {
        let localContext = new WhileStatementContext(this.context, this.state);
        this.enterRule(localContext, 268, delphiParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1773;
            this.match(delphiParser.WHILE);
            this.state = 1774;
            this.expression();
            this.state = 1775;
            this.match(delphiParser.DO);
            this.state = 1776;
            this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forStatement(): ForStatementContext {
        let localContext = new ForStatementContext(this.context, this.state);
        this.enterRule(localContext, 270, delphiParser.RULE_forStatement);
        try {
            this.state = 1803;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 238, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1778;
                this.match(delphiParser.FOR);
                this.state = 1779;
                this.designator();
                this.state = 1780;
                this.match(delphiParser.ASSIGN);
                this.state = 1781;
                this.expression();
                this.state = 1782;
                this.match(delphiParser.TO);
                this.state = 1783;
                this.expression();
                this.state = 1784;
                this.match(delphiParser.DO);
                this.state = 1785;
                this.statement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1787;
                this.match(delphiParser.FOR);
                this.state = 1788;
                this.designator();
                this.state = 1789;
                this.match(delphiParser.ASSIGN);
                this.state = 1790;
                this.expression();
                this.state = 1791;
                this.match(delphiParser.DOWNTO);
                this.state = 1792;
                this.expression();
                this.state = 1793;
                this.match(delphiParser.DO);
                this.state = 1794;
                this.statement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1796;
                this.match(delphiParser.FOR);
                this.state = 1797;
                this.designator();
                this.state = 1798;
                this.match(delphiParser.IN);
                this.state = 1799;
                this.expression();
                this.state = 1800;
                this.match(delphiParser.DO);
                this.state = 1801;
                this.statement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public withStatement(): WithStatementContext {
        let localContext = new WithStatementContext(this.context, this.state);
        this.enterRule(localContext, 272, delphiParser.RULE_withStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1805;
            this.match(delphiParser.WITH);
            this.state = 1806;
            this.withItem();
            this.state = 1807;
            this.match(delphiParser.DO);
            this.state = 1808;
            this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public withItem(): WithItemContext {
        let localContext = new WithItemContext(this.context, this.state);
        this.enterRule(localContext, 274, delphiParser.RULE_withItem);
        let _la: number;
        try {
            this.state = 1822;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 240, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1810;
                this.designator();
                this.state = 1811;
                this.match(delphiParser.AS);
                this.state = 1812;
                this.designator();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1814;
                this.designator();
                this.state = 1819;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 139) {
                    {
                    {
                    this.state = 1815;
                    this.match(delphiParser.COMMA);
                    this.state = 1816;
                    this.designator();
                    }
                    }
                    this.state = 1821;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compoundStatement(): CompoundStatementContext {
        let localContext = new CompoundStatementContext(this.context, this.state);
        this.enterRule(localContext, 276, delphiParser.RULE_compoundStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1824;
            this.match(delphiParser.BEGIN);
            this.state = 1826;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14799440) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478141061) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 460329001) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 475207) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 72785) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 11) !== 0)) {
                {
                this.state = 1825;
                this.statementList();
                }
            }

            this.state = 1828;
            this.match(delphiParser.END);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statementList(): StatementListContext {
        let localContext = new StatementListContext(this.context, this.state);
        this.enterRule(localContext, 278, delphiParser.RULE_statementList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1830;
            this.statement();
            this.state = 1837;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 243, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1831;
                    this.match(delphiParser.SEMI);
                    this.state = 1833;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14799440) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478141061) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 460329001) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 475207) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 72785) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 11) !== 0)) {
                        {
                        this.state = 1832;
                        this.statement();
                        }
                    }

                    }
                    }
                }
                this.state = 1839;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 243, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleStatement(): SimpleStatementContext {
        let localContext = new SimpleStatementContext(this.context, this.state);
        this.enterRule(localContext, 280, delphiParser.RULE_simpleStatement);
        try {
            this.state = 1846;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 244, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1840;
                this.designator();
                this.state = 1841;
                this.match(delphiParser.ASSIGN);
                this.state = 1842;
                this.expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1844;
                this.designator();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1845;
                this.gotoStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public gotoStatement(): GotoStatementContext {
        let localContext = new GotoStatementContext(this.context, this.state);
        this.enterRule(localContext, 282, delphiParser.RULE_gotoStatement);
        let _la: number;
        try {
            this.state = 1858;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.GOTO:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1848;
                this.match(delphiParser.GOTO);
                this.state = 1849;
                this.label();
                }
                break;
            case delphiParser.EXIT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1850;
                this.match(delphiParser.EXIT);
                this.state = 1855;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 245, this.context) ) {
                case 1:
                    {
                    this.state = 1851;
                    this.match(delphiParser.LPAREN);
                    this.state = 1852;
                    this.expression();
                    this.state = 1853;
                    this.match(delphiParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            case delphiParser.BREAK:
            case delphiParser.CONTINUE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1857;
                _la = this.tokenStream.LA(1);
                if(!(_la === 15 || _la === 22)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constExpression(): ConstExpressionContext {
        let localContext = new ConstExpressionContext(this.context, this.state);
        this.enterRule(localContext, 284, delphiParser.RULE_constExpression);
        let _la: number;
        try {
            this.state = 1883;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 249, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1860;
                this.match(delphiParser.LPAREN);
                this.state = 1861;
                this.recordConstExpression();
                this.state = 1866;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 140) {
                    {
                    {
                    this.state = 1862;
                    this.match(delphiParser.SEMI);
                    this.state = 1863;
                    this.recordConstExpression();
                    }
                    }
                    this.state = 1868;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1869;
                this.match(delphiParser.RPAREN);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1871;
                this.match(delphiParser.LPAREN);
                this.state = 1872;
                this.constExpression();
                this.state = 1877;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 139) {
                    {
                    {
                    this.state = 1873;
                    this.match(delphiParser.COMMA);
                    this.state = 1874;
                    this.constExpression();
                    }
                    }
                    this.state = 1879;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1880;
                this.match(delphiParser.RPAREN);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1882;
                this.expression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordConstExpression(): RecordConstExpressionContext {
        let localContext = new RecordConstExpressionContext(this.context, this.state);
        this.enterRule(localContext, 286, delphiParser.RULE_recordConstExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1885;
            this.ident();
            this.state = 1886;
            this.match(delphiParser.COLON);
            this.state = 1887;
            this.constExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tryStatement(): TryStatementContext {
        let localContext = new TryStatementContext(this.context, this.state);
        this.enterRule(localContext, 288, delphiParser.RULE_tryStatement);
        let _la: number;
        try {
            this.state = 1906;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 253, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1889;
                this.match(delphiParser.TRY);
                this.state = 1891;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14799440) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478141061) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 460329001) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 475207) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 72785) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 11) !== 0)) {
                    {
                    this.state = 1890;
                    this.statementList();
                    }
                }

                this.state = 1893;
                this.match(delphiParser.EXCEPT);
                this.state = 1894;
                this.handlerList();
                this.state = 1895;
                this.match(delphiParser.END);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1897;
                this.match(delphiParser.TRY);
                this.state = 1899;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14799440) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478141061) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 460329001) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 475207) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 72785) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 11) !== 0)) {
                    {
                    this.state = 1898;
                    this.statementList();
                    }
                }

                this.state = 1901;
                this.match(delphiParser.FINALLY);
                this.state = 1903;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14799440) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1478141061) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 460329001) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 475207) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 72785) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 11) !== 0)) {
                    {
                    this.state = 1902;
                    this.statementList();
                    }
                }

                this.state = 1905;
                this.match(delphiParser.END);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public handlerList(): HandlerListContext {
        let localContext = new HandlerListContext(this.context, this.state);
        this.enterRule(localContext, 290, delphiParser.RULE_handlerList);
        let _la: number;
        try {
            this.state = 1919;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.ELSE:
            case delphiParser.END:
            case delphiParser.ON:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1911;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 74) {
                    {
                    {
                    this.state = 1908;
                    this.handler();
                    }
                    }
                    this.state = 1913;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1916;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34) {
                    {
                    this.state = 1914;
                    this.match(delphiParser.ELSE);
                    this.state = 1915;
                    this.statementList();
                    }
                }

                }
                break;
            case delphiParser.ADD:
            case delphiParser.ANSISTRING:
            case delphiParser.ASM:
            case delphiParser.AT:
            case delphiParser.BEGIN:
            case delphiParser.BREAK:
            case delphiParser.CASE:
            case delphiParser.CONTAINS:
            case delphiParser.CONTINUE:
            case delphiParser.DEFAULT:
            case delphiParser.EXIT:
            case delphiParser.EXPORT:
            case delphiParser.FINAL:
            case delphiParser.FOR:
            case delphiParser.GOTO:
            case delphiParser.IF:
            case delphiParser.IMPLEMENTS:
            case delphiParser.INDEX:
            case delphiParser.INHERITED:
            case delphiParser.LOCAL:
            case delphiParser.MESSAGE:
            case delphiParser.NAME:
            case delphiParser.OBJECT:
            case delphiParser.OPERATOR:
            case delphiParser.OUT:
            case delphiParser.POINTER:
            case delphiParser.RAISE:
            case delphiParser.READ:
            case delphiParser.READONLY:
            case delphiParser.REFERENCE:
            case delphiParser.REGISTER:
            case delphiParser.REMOVE:
            case delphiParser.REPEAT:
            case delphiParser.STORED:
            case delphiParser.STRICT:
            case delphiParser.STRING:
            case delphiParser.TRY:
            case delphiParser.VARIANT:
            case delphiParser.WHILE:
            case delphiParser.WITH:
            case delphiParser.WRITE:
            case delphiParser.LT:
            case delphiParser.LPAREN:
            case delphiParser.LBRACK:
            case delphiParser.POINTER2:
            case delphiParser.AT2:
            case delphiParser.DOT:
            case delphiParser.AMBER:
            case delphiParser.TkIdentifier:
            case delphiParser.TkIntNum:
            case delphiParser.TkHexNum:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1918;
                this.statementList();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public handler(): HandlerContext {
        let localContext = new HandlerContext(this.context, this.state);
        this.enterRule(localContext, 292, delphiParser.RULE_handler);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1921;
            this.match(delphiParser.ON);
            this.state = 1923;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 257, this.context) ) {
            case 1:
                {
                this.state = 1922;
                this.handlerIdent();
                }
                break;
            }
            this.state = 1925;
            this.typeId();
            this.state = 1926;
            this.match(delphiParser.DO);
            this.state = 1927;
            this.handlerStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public handlerIdent(): HandlerIdentContext {
        let localContext = new HandlerIdentContext(this.context, this.state);
        this.enterRule(localContext, 294, delphiParser.RULE_handlerIdent);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1929;
            this.ident();
            this.state = 1930;
            this.match(delphiParser.COLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public handlerStatement(): HandlerStatementContext {
        let localContext = new HandlerStatementContext(this.context, this.state);
        this.enterRule(localContext, 296, delphiParser.RULE_handlerStatement);
        let _la: number;
        try {
            this.state = 1937;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.ADD:
            case delphiParser.ANSISTRING:
            case delphiParser.ASM:
            case delphiParser.AT:
            case delphiParser.BEGIN:
            case delphiParser.BREAK:
            case delphiParser.CASE:
            case delphiParser.CONTAINS:
            case delphiParser.CONTINUE:
            case delphiParser.DEFAULT:
            case delphiParser.EXIT:
            case delphiParser.EXPORT:
            case delphiParser.FINAL:
            case delphiParser.FOR:
            case delphiParser.GOTO:
            case delphiParser.IF:
            case delphiParser.IMPLEMENTS:
            case delphiParser.INDEX:
            case delphiParser.INHERITED:
            case delphiParser.LOCAL:
            case delphiParser.MESSAGE:
            case delphiParser.NAME:
            case delphiParser.OBJECT:
            case delphiParser.OPERATOR:
            case delphiParser.OUT:
            case delphiParser.POINTER:
            case delphiParser.RAISE:
            case delphiParser.READ:
            case delphiParser.READONLY:
            case delphiParser.REFERENCE:
            case delphiParser.REGISTER:
            case delphiParser.REMOVE:
            case delphiParser.REPEAT:
            case delphiParser.STORED:
            case delphiParser.STRICT:
            case delphiParser.STRING:
            case delphiParser.TRY:
            case delphiParser.VARIANT:
            case delphiParser.WHILE:
            case delphiParser.WITH:
            case delphiParser.WRITE:
            case delphiParser.LT:
            case delphiParser.LPAREN:
            case delphiParser.LBRACK:
            case delphiParser.POINTER2:
            case delphiParser.AT2:
            case delphiParser.DOT:
            case delphiParser.AMBER:
            case delphiParser.TkIdentifier:
            case delphiParser.TkIntNum:
            case delphiParser.TkHexNum:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1932;
                this.statement();
                this.state = 1934;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 140) {
                    {
                    this.state = 1933;
                    this.match(delphiParser.SEMI);
                    }
                }

                }
                break;
            case delphiParser.SEMI:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1936;
                this.match(delphiParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public raiseStatement(): RaiseStatementContext {
        let localContext = new RaiseStatementContext(this.context, this.state);
        this.enterRule(localContext, 298, delphiParser.RULE_raiseStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1939;
            this.match(delphiParser.RAISE);
            this.state = 1941;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 260, this.context) ) {
            case 1:
                {
                this.state = 1940;
                this.designator();
                }
                break;
            }
            this.state = 1945;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 261, this.context) ) {
            case 1:
                {
                this.state = 1943;
                this.match(delphiParser.AT);
                this.state = 1944;
                this.designator();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assemblerStatement(): AssemblerStatementContext {
        let localContext = new AssemblerStatementContext(this.context, this.state);
        this.enterRule(localContext, 300, delphiParser.RULE_assemblerStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1947;
            this.match(delphiParser.ASM);
            this.state = 1951;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967287) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 7) !== 0)) {
                {
                {
                this.state = 1948;
                _la = this.tokenStream.LA(1);
                if(_la<=0 || _la === 35) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 1953;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1954;
            this.match(delphiParser.END);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodDirective(): MethodDirectiveContext {
        let localContext = new MethodDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 302, delphiParser.RULE_methodDirective);
        try {
            this.state = 1967;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.REINTRODUCE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1956;
                this.reintroduceDirective();
                }
                break;
            case delphiParser.OVERLOAD:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1957;
                this.overloadDirective();
                }
                break;
            case delphiParser.DYNAMIC:
            case delphiParser.MESSAGE:
            case delphiParser.OVERRIDE:
            case delphiParser.STATIC:
            case delphiParser.VIRTUAL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1958;
                this.bindingDirective();
                }
                break;
            case delphiParser.ABSTRACT:
            case delphiParser.FINAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1959;
                this.abstractDirective();
                }
                break;
            case delphiParser.ASSEMBLER:
            case delphiParser.INLINE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1960;
                this.inlineDirective();
                }
                break;
            case delphiParser.CDECL:
            case delphiParser.EXPORT:
            case delphiParser.PASCAL:
            case delphiParser.REGISTER:
            case delphiParser.SAFECALL:
            case delphiParser.STDCALL:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1961;
                this.callConvention();
                }
                break;
            case delphiParser.DEPRECATED:
            case delphiParser.EXPERIMENTAL:
            case delphiParser.LIBRARY:
            case delphiParser.PLATFORM:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1962;
                this.hintingDirective();
                this.state = 1963;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.FAR:
            case delphiParser.LOCAL:
            case delphiParser.NEAR:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1965;
                this.oldCallConventionDirective();
                }
                break;
            case delphiParser.DISPID:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1966;
                this.dispIDDirective();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionDirective(): FunctionDirectiveContext {
        let localContext = new FunctionDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 304, delphiParser.RULE_functionDirective);
        let _la: number;
        try {
            this.state = 1982;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 265, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1969;
                this.overloadDirective();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1970;
                this.inlineDirective();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1971;
                this.callConvention();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1972;
                this.oldCallConventionDirective();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1973;
                this.hintingDirective();
                this.state = 1974;
                this.match(delphiParser.SEMI);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1977;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17 || _la === 39 || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 272662529) !== 0)) {
                    {
                    this.state = 1976;
                    this.callConventionNoSemi();
                    }
                }

                this.state = 1979;
                this.externalDirective();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1980;
                this.match(delphiParser.UNSAFE);
                this.state = 1981;
                this.match(delphiParser.SEMI);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public reintroduceDirective(): ReintroduceDirectiveContext {
        let localContext = new ReintroduceDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 306, delphiParser.RULE_reintroduceDirective);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1984;
            this.match(delphiParser.REINTRODUCE);
            this.state = 1985;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public overloadDirective(): OverloadDirectiveContext {
        let localContext = new OverloadDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 308, delphiParser.RULE_overloadDirective);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1987;
            this.match(delphiParser.OVERLOAD);
            this.state = 1989;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 266, this.context) ) {
            case 1:
                {
                this.state = 1988;
                this.match(delphiParser.SEMI);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bindingDirective(): BindingDirectiveContext {
        let localContext = new BindingDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 310, delphiParser.RULE_bindingDirective);
        try {
            this.state = 2003;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.MESSAGE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1991;
                this.match(delphiParser.MESSAGE);
                this.state = 1992;
                this.expression();
                this.state = 1993;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.STATIC:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1995;
                this.match(delphiParser.STATIC);
                this.state = 1996;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.DYNAMIC:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1997;
                this.match(delphiParser.DYNAMIC);
                this.state = 1998;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.OVERRIDE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1999;
                this.match(delphiParser.OVERRIDE);
                this.state = 2000;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.VIRTUAL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2001;
                this.match(delphiParser.VIRTUAL);
                this.state = 2002;
                this.match(delphiParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public abstractDirective(): AbstractDirectiveContext {
        let localContext = new AbstractDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 312, delphiParser.RULE_abstractDirective);
        try {
            this.state = 2009;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.ABSTRACT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2005;
                this.match(delphiParser.ABSTRACT);
                this.state = 2006;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.FINAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2007;
                this.match(delphiParser.FINAL);
                this.state = 2008;
                this.match(delphiParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inlineDirective(): InlineDirectiveContext {
        let localContext = new InlineDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 314, delphiParser.RULE_inlineDirective);
        try {
            this.state = 2015;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.INLINE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2011;
                this.match(delphiParser.INLINE);
                this.state = 2012;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.ASSEMBLER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2013;
                this.match(delphiParser.ASSEMBLER);
                this.state = 2014;
                this.match(delphiParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public callConvention(): CallConventionContext {
        let localContext = new CallConventionContext(this.context, this.state);
        this.enterRule(localContext, 316, delphiParser.RULE_callConvention);
        try {
            this.state = 2029;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.CDECL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2017;
                this.match(delphiParser.CDECL);
                this.state = 2018;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.PASCAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2019;
                this.match(delphiParser.PASCAL);
                this.state = 2020;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.REGISTER:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2021;
                this.match(delphiParser.REGISTER);
                this.state = 2022;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.SAFECALL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2023;
                this.match(delphiParser.SAFECALL);
                this.state = 2024;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.STDCALL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2025;
                this.match(delphiParser.STDCALL);
                this.state = 2026;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.EXPORT:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2027;
                this.match(delphiParser.EXPORT);
                this.state = 2028;
                this.match(delphiParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public callConventionNoSemi(): CallConventionNoSemiContext {
        let localContext = new CallConventionNoSemiContext(this.context, this.state);
        this.enterRule(localContext, 318, delphiParser.RULE_callConventionNoSemi);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2031;
            _la = this.tokenStream.LA(1);
            if(!(_la === 17 || _la === 39 || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 272662529) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public oldCallConventionDirective(): OldCallConventionDirectiveContext {
        let localContext = new OldCallConventionDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 320, delphiParser.RULE_oldCallConventionDirective);
        try {
            this.state = 2039;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.FAR:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2033;
                this.match(delphiParser.FAR);
                this.state = 2034;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.LOCAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2035;
                this.match(delphiParser.LOCAL);
                this.state = 2036;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.NEAR:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2037;
                this.match(delphiParser.NEAR);
                this.state = 2038;
                this.match(delphiParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hintingDirective(): HintingDirectiveContext {
        let localContext = new HintingDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 322, delphiParser.RULE_hintingDirective);
        let _la: number;
        try {
            this.state = 2046;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.DEPRECATED:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2041;
                this.match(delphiParser.DEPRECATED);
                this.state = 2043;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 189 || _la === 190) {
                    {
                    this.state = 2042;
                    this.stringFactor();
                    }
                }

                }
                break;
            case delphiParser.EXPERIMENTAL:
            case delphiParser.LIBRARY:
            case delphiParser.PLATFORM:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2045;
                _la = this.tokenStream.LA(1);
                if(!(_la === 38 || _la === 63 || _la === 83)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public externalDirective(): ExternalDirectiveContext {
        let localContext = new ExternalDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 324, delphiParser.RULE_externalDirective);
        let _la: number;
        try {
            this.state = 2062;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 275, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2048;
                this.match(delphiParser.VARARGS);
                this.state = 2049;
                this.match(delphiParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2050;
                this.match(delphiParser.EXTERNAL);
                this.state = 2051;
                this.match(delphiParser.SEMI);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2052;
                this.match(delphiParser.EXTERNAL);
                this.state = 2053;
                this.constExpression();
                this.state = 2057;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 56 || _la === 67) {
                    {
                    {
                    this.state = 2054;
                    this.externalSpecifier();
                    }
                    }
                    this.state = 2059;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2060;
                this.match(delphiParser.SEMI);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public externalSpecifier(): ExternalSpecifierContext {
        let localContext = new ExternalSpecifierContext(this.context, this.state);
        this.enterRule(localContext, 326, delphiParser.RULE_externalSpecifier);
        try {
            this.state = 2068;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.NAME:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2064;
                this.match(delphiParser.NAME);
                this.state = 2065;
                this.constExpression();
                }
                break;
            case delphiParser.INDEX:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2066;
                this.match(delphiParser.INDEX);
                this.state = 2067;
                this.constExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dispIDDirective(): DispIDDirectiveContext {
        let localContext = new DispIDDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 328, delphiParser.RULE_dispIDDirective);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2070;
            this.match(delphiParser.DISPID);
            this.state = 2071;
            this.expression();
            this.state = 2072;
            this.match(delphiParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ident(): IdentContext {
        let localContext = new IdentContext(this.context, this.state);
        this.enterRule(localContext, 330, delphiParser.RULE_ident);
        try {
            this.state = 2078;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.TkIdentifier:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2074;
                this.match(delphiParser.TkIdentifier);
                }
                break;
            case delphiParser.AMBER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2075;
                this.match(delphiParser.AMBER);
                this.state = 2076;
                this.match(delphiParser.TkIdentifier);
                }
                break;
            case delphiParser.ADD:
            case delphiParser.ANSISTRING:
            case delphiParser.AT:
            case delphiParser.BREAK:
            case delphiParser.CONTAINS:
            case delphiParser.CONTINUE:
            case delphiParser.DEFAULT:
            case delphiParser.EXIT:
            case delphiParser.EXPORT:
            case delphiParser.FINAL:
            case delphiParser.IMPLEMENTS:
            case delphiParser.INDEX:
            case delphiParser.LOCAL:
            case delphiParser.MESSAGE:
            case delphiParser.NAME:
            case delphiParser.OBJECT:
            case delphiParser.OPERATOR:
            case delphiParser.OUT:
            case delphiParser.POINTER:
            case delphiParser.READ:
            case delphiParser.READONLY:
            case delphiParser.REFERENCE:
            case delphiParser.REGISTER:
            case delphiParser.REMOVE:
            case delphiParser.STORED:
            case delphiParser.STRICT:
            case delphiParser.STRING:
            case delphiParser.VARIANT:
            case delphiParser.WRITE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2077;
                this.usedKeywordsAsNames();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public usedKeywordsAsNames(): UsedKeywordsAsNamesContext {
        let localContext = new UsedKeywordsAsNamesContext(this.context, this.state);
        this.enterRule(localContext, 332, delphiParser.RULE_usedKeywordsAsNames);
        let _la: number;
        try {
            this.state = 2083;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.ADD:
            case delphiParser.AT:
            case delphiParser.CONTINUE:
            case delphiParser.DEFAULT:
            case delphiParser.INDEX:
            case delphiParser.MESSAGE:
            case delphiParser.NAME:
            case delphiParser.POINTER:
            case delphiParser.READONLY:
            case delphiParser.STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2080;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 12587024) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 268438017) !== 0) || _la === 94 || _la === 113)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case delphiParser.CONTAINS:
            case delphiParser.FINAL:
            case delphiParser.LOCAL:
            case delphiParser.OPERATOR:
            case delphiParser.READ:
            case delphiParser.REFERENCE:
            case delphiParser.REGISTER:
            case delphiParser.REMOVE:
            case delphiParser.VARIANT:
            case delphiParser.WRITE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2081;
                _la = this.tokenStream.LA(1);
                if(!(_la === 21 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 2148532225) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & 89) !== 0) || _la === 125 || _la === 129)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case delphiParser.ANSISTRING:
            case delphiParser.BREAK:
            case delphiParser.EXIT:
            case delphiParser.EXPORT:
            case delphiParser.IMPLEMENTS:
            case delphiParser.OBJECT:
            case delphiParser.OUT:
            case delphiParser.STORED:
            case delphiParser.STRICT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2082;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 15 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 131077) !== 0) || _la === 72 || _la === 77 || _la === 111 || _la === 112)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identList(): IdentListContext {
        let localContext = new IdentListContext(this.context, this.state);
        this.enterRule(localContext, 334, delphiParser.RULE_identList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2085;
            this.ident();
            this.state = 2090;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 2086;
                this.match(delphiParser.COMMA);
                this.state = 2087;
                this.ident();
                }
                }
                this.state = 2092;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identListFlat(): IdentListFlatContext {
        let localContext = new IdentListFlatContext(this.context, this.state);
        this.enterRule(localContext, 336, delphiParser.RULE_identListFlat);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2093;
            this.ident();
            this.state = 2098;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 2094;
                this.match(delphiParser.COMMA);
                this.state = 2095;
                this.ident();
                }
                }
                this.state = 2100;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public label(): LabelContext {
        let localContext = new LabelContext(this.context, this.state);
        this.enterRule(localContext, 338, delphiParser.RULE_label);
        let _la: number;
        try {
            this.state = 2103;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.TkIdentifier:
            case delphiParser.TkIntNum:
            case delphiParser.TkHexNum:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2101;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 11) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case delphiParser.ADD:
            case delphiParser.ANSISTRING:
            case delphiParser.AT:
            case delphiParser.BREAK:
            case delphiParser.CONTAINS:
            case delphiParser.CONTINUE:
            case delphiParser.DEFAULT:
            case delphiParser.EXIT:
            case delphiParser.EXPORT:
            case delphiParser.FINAL:
            case delphiParser.IMPLEMENTS:
            case delphiParser.INDEX:
            case delphiParser.LOCAL:
            case delphiParser.MESSAGE:
            case delphiParser.NAME:
            case delphiParser.OBJECT:
            case delphiParser.OPERATOR:
            case delphiParser.OUT:
            case delphiParser.POINTER:
            case delphiParser.READ:
            case delphiParser.READONLY:
            case delphiParser.REFERENCE:
            case delphiParser.REGISTER:
            case delphiParser.REMOVE:
            case delphiParser.STORED:
            case delphiParser.STRICT:
            case delphiParser.STRING:
            case delphiParser.VARIANT:
            case delphiParser.WRITE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2102;
                this.usedKeywordsAsNames();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public intNum(): IntNumContext {
        let localContext = new IntNumContext(this.context, this.state);
        this.enterRule(localContext, 340, delphiParser.RULE_intNum);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2105;
            _la = this.tokenStream.LA(1);
            if(!(_la === 184 || _la === 186)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public realNum(): RealNumContext {
        let localContext = new RealNumContext(this.context, this.state);
        this.enterRule(localContext, 342, delphiParser.RULE_realNum);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2107;
            this.match(delphiParser.TkRealNum);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namespacedQualifiedIdent(): NamespacedQualifiedIdentContext {
        let localContext = new NamespacedQualifiedIdentContext(this.context, this.state);
        this.enterRule(localContext, 344, delphiParser.RULE_namespacedQualifiedIdent);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2112;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 282, this.context) ) {
            case 1:
                {
                this.state = 2109;
                this.namespaceName();
                this.state = 2110;
                this.match(delphiParser.DOT);
                }
                break;
            }
            this.state = 2114;
            this.qualifiedIdent();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namespaceName(): NamespaceNameContext {
        let localContext = new NamespaceNameContext(this.context, this.state);
        this.enterRule(localContext, 346, delphiParser.RULE_namespaceName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2116;
            this.ident();
            this.state = 2121;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 283, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2117;
                    this.match(delphiParser.DOT);
                    this.state = 2118;
                    this.ident();
                    }
                    }
                }
                this.state = 2123;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 283, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedIdent(): QualifiedIdentContext {
        let localContext = new QualifiedIdentContext(this.context, this.state);
        this.enterRule(localContext, 348, delphiParser.RULE_qualifiedIdent);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2129;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 284, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2124;
                    this.ident();
                    this.state = 2125;
                    this.match(delphiParser.DOT);
                    }
                    }
                }
                this.state = 2131;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 284, this.context);
            }
            this.state = 2132;
            this.ident();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,194,2135,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,
        7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,
        7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,
        7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,
        2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,2,164,
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,7,169,
        2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,1,0,
        1,0,1,0,1,0,3,0,355,8,0,1,1,3,1,358,8,1,1,1,3,1,361,8,1,1,1,1,1,
        1,1,1,2,1,2,1,2,3,2,369,8,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,377,8,3,
        10,3,12,3,380,9,3,3,3,382,8,3,1,3,1,3,1,4,1,4,3,4,388,8,4,1,4,1,
        4,1,4,1,5,1,5,1,5,5,5,396,8,5,10,5,12,5,399,9,5,1,5,1,5,1,6,1,6,
        1,6,3,6,406,8,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,
        1,8,1,9,1,9,1,9,5,9,424,8,9,10,9,12,9,427,9,9,1,9,1,9,1,10,1,10,
        3,10,433,8,10,1,10,5,10,436,8,10,10,10,12,10,439,9,10,1,11,1,11,
        3,11,443,8,11,1,11,5,11,446,8,11,10,11,12,11,449,9,11,1,12,1,12,
        1,12,1,12,1,12,3,12,456,8,12,1,13,1,13,1,13,3,13,461,8,13,1,14,1,
        14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,
        18,1,19,1,19,1,19,5,19,481,8,19,10,19,12,19,484,9,19,1,19,1,19,1,
        20,1,20,1,20,3,20,491,8,20,1,21,1,21,1,21,5,21,496,8,21,10,21,12,
        21,499,9,21,1,21,1,21,1,22,5,22,504,8,22,10,22,12,22,507,9,22,1,
        22,3,22,510,8,22,1,23,1,23,3,23,514,8,23,1,24,1,24,1,24,1,24,1,24,
        1,24,1,24,1,24,3,24,524,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
        3,25,533,8,25,1,26,1,26,1,26,1,26,5,26,539,8,26,10,26,12,26,542,
        9,26,1,26,1,26,1,27,1,27,5,27,548,8,27,10,27,12,27,551,9,27,1,28,
        1,28,1,29,3,29,556,8,29,1,29,1,29,1,29,3,29,561,8,29,1,29,1,29,1,
        29,5,29,566,8,29,10,29,12,29,569,9,29,1,29,1,29,1,30,1,30,1,30,5,
        30,576,8,30,10,30,12,30,579,9,30,1,31,3,31,582,8,31,1,31,1,31,1,
        31,1,31,5,31,588,8,31,10,31,12,31,591,9,31,1,31,1,31,1,32,1,32,1,
        32,5,32,598,8,32,10,32,12,32,601,9,32,1,33,1,33,1,34,3,34,606,8,
        34,1,34,1,34,1,34,1,34,3,34,612,8,34,1,34,5,34,615,8,34,10,34,12,
        34,618,9,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,3,35,628,8,35,
        1,36,1,36,1,36,1,36,1,36,1,36,1,36,5,36,637,8,36,10,36,12,36,640,
        9,36,1,36,1,36,1,37,1,37,3,37,646,8,37,1,37,3,37,649,8,37,1,37,1,
        37,3,37,653,8,37,1,37,1,37,3,37,657,8,37,1,37,3,37,660,8,37,1,38,
        1,38,1,38,1,38,1,38,1,38,3,38,668,8,38,1,38,1,38,3,38,672,8,38,1,
        38,3,38,675,8,38,1,39,3,39,678,8,39,1,39,1,39,1,40,1,40,1,40,1,40,
        3,40,686,8,40,1,41,1,41,1,41,3,41,691,8,41,1,41,1,41,3,41,695,8,
        41,5,41,697,8,41,10,41,12,41,700,9,41,1,41,3,41,703,8,41,1,41,1,
        41,1,41,1,42,1,42,1,42,1,42,1,42,3,42,713,8,42,1,43,1,43,3,43,717,
        8,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,3,45,726,8,45,1,46,1,46,
        1,46,3,46,731,8,46,1,47,1,47,1,47,1,47,1,47,3,47,738,8,47,1,47,3,
        47,741,8,47,1,47,1,47,3,47,745,8,47,3,47,747,8,47,1,48,1,48,1,48,
        1,48,1,49,1,49,1,49,3,49,756,8,49,1,50,1,50,1,50,1,50,1,51,1,51,
        3,51,764,8,51,1,51,3,51,767,8,51,1,52,1,52,1,52,1,52,1,53,1,53,3,
        53,775,8,53,1,53,1,53,3,53,779,8,53,1,53,1,53,1,53,3,53,784,8,53,
        3,53,786,8,53,1,54,1,54,1,55,1,55,1,55,3,55,793,8,55,1,56,1,56,1,
        56,3,56,798,8,56,1,57,1,57,1,57,1,57,3,57,804,8,57,1,57,1,57,1,57,
        1,57,3,57,810,8,57,5,57,812,8,57,10,57,12,57,815,9,57,1,57,1,57,
        1,58,1,58,1,59,1,59,3,59,823,8,59,1,60,1,60,3,60,827,8,60,1,61,1,
        61,1,61,1,61,5,61,833,8,61,10,61,12,61,836,9,61,1,61,1,61,1,62,1,
        62,1,62,1,62,5,62,844,8,62,10,62,12,62,847,9,62,1,62,1,62,1,63,1,
        63,1,63,1,63,1,63,5,63,856,8,63,10,63,12,63,859,9,63,3,63,861,8,
        63,1,64,1,64,3,64,865,8,64,1,65,1,65,1,65,1,65,5,65,871,8,65,10,
        65,12,65,874,9,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,3,
        66,885,8,66,1,67,1,67,1,67,1,67,1,68,1,68,3,68,893,8,68,1,68,3,68,
        896,8,68,1,68,5,68,899,8,68,10,68,12,68,902,9,68,1,68,1,68,1,68,
        3,68,907,8,68,3,68,909,8,68,1,69,1,69,1,70,1,70,1,70,1,70,5,70,917,
        8,70,10,70,12,70,920,9,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,71,
        1,71,3,71,931,8,71,1,71,3,71,934,8,71,1,72,1,72,1,72,3,72,939,8,
        72,1,72,1,72,1,72,5,72,944,8,72,10,72,12,72,947,9,72,1,72,1,72,1,
        73,1,73,1,73,1,73,3,73,955,8,73,1,73,3,73,958,8,73,1,74,1,74,3,74,
        962,8,74,1,74,3,74,965,8,74,1,74,5,74,968,8,74,10,74,12,74,971,9,
        74,1,74,1,74,1,74,1,74,3,74,977,8,74,3,74,979,8,74,1,75,1,75,1,76,
        1,76,1,76,1,76,1,77,1,77,3,77,989,8,77,1,77,3,77,992,8,77,1,78,1,
        78,3,78,996,8,78,1,78,5,78,999,8,78,10,78,12,78,1002,9,78,1,78,1,
        78,1,79,1,79,1,79,3,79,1009,8,79,1,80,1,80,3,80,1013,8,80,1,81,1,
        81,5,81,1017,8,81,10,81,12,81,1020,9,81,1,81,5,81,1023,8,81,10,81,
        12,81,1026,9,81,1,81,1,81,1,82,1,82,5,82,1032,8,82,10,82,12,82,1035,
        9,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,3,83,1047,
        8,83,1,83,3,83,1050,8,83,1,84,1,84,1,84,1,84,5,84,1056,8,84,10,84,
        12,84,1059,9,84,1,84,3,84,1062,8,84,1,85,1,85,1,85,1,85,5,85,1068,
        8,85,10,85,12,85,1071,9,85,1,85,3,85,1074,8,85,1,86,1,86,1,86,1,
        86,3,86,1080,8,86,1,86,1,86,1,86,1,86,3,86,1086,8,86,1,86,1,86,5,
        86,1090,8,86,10,86,12,86,1093,9,86,1,87,1,87,1,87,5,87,1098,8,87,
        10,87,12,87,1101,9,87,1,87,1,87,1,87,5,87,1106,8,87,10,87,12,87,
        1109,9,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,5,88,1118,8,88,10,88,
        12,88,1121,9,88,1,88,1,88,1,89,1,89,1,89,3,89,1128,8,89,1,90,3,90,
        1131,8,90,1,90,3,90,1134,8,90,1,90,1,90,1,90,3,90,1139,8,90,1,90,
        3,90,1142,8,90,1,90,1,90,5,90,1146,8,90,10,90,12,90,1149,9,90,1,
        90,3,90,1152,8,90,1,90,3,90,1155,8,90,1,90,1,90,1,90,3,90,1160,8,
        90,1,90,3,90,1163,8,90,1,90,1,90,3,90,1167,8,90,1,90,1,90,1,90,5,
        90,1172,8,90,10,90,12,90,1175,9,90,1,90,3,90,1178,8,90,1,90,3,90,
        1181,8,90,1,90,1,90,1,90,3,90,1186,8,90,1,90,3,90,1189,8,90,1,90,
        1,90,3,90,1193,8,90,1,90,1,90,1,90,3,90,1198,8,90,1,91,3,91,1201,
        8,91,1,91,1,91,1,91,1,91,1,91,5,91,1208,8,91,10,91,12,91,1211,9,
        91,1,92,3,92,1214,8,92,1,92,3,92,1217,8,92,1,92,1,92,1,92,3,92,1222,
        8,92,1,92,1,92,3,92,1226,8,92,1,92,3,92,1229,8,92,1,92,5,92,1232,
        8,92,10,92,12,92,1235,9,92,1,92,1,92,5,92,1239,8,92,10,92,12,92,
        1242,9,92,1,93,1,93,1,93,1,93,1,94,1,94,1,94,3,94,1251,8,94,1,95,
        1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,3,95,1262,8,95,1,96,1,96,
        1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,3,96,1276,8,96,
        1,97,1,97,1,97,1,97,1,97,1,97,3,97,1284,8,97,1,97,1,97,1,97,1,97,
        1,97,1,97,3,97,1292,8,97,3,97,1294,8,97,1,98,1,98,1,98,1,98,1,98,
        3,98,1301,8,98,1,99,3,99,1304,8,99,1,99,1,99,3,99,1308,8,99,1,99,
        1,99,3,99,1312,8,99,1,100,1,100,1,100,3,100,1317,8,100,1,100,1,100,
        3,100,1321,8,100,1,100,1,100,1,100,5,100,1326,8,100,10,100,12,100,
        1329,9,100,1,100,1,100,1,100,3,100,1334,8,100,1,100,1,100,5,100,
        1338,8,100,10,100,12,100,1341,9,100,3,100,1343,8,100,1,101,1,101,
        1,101,5,101,1348,8,101,10,101,12,101,1351,9,101,1,101,3,101,1354,
        8,101,1,102,3,102,1357,8,102,1,102,3,102,1360,8,102,1,102,1,102,
        1,102,3,102,1365,8,102,1,102,3,102,1368,8,102,1,102,3,102,1371,8,
        102,1,102,1,102,1,102,3,102,1376,8,102,1,102,1,102,3,102,1380,8,
        102,1,102,3,102,1383,8,102,1,102,3,102,1386,8,102,1,102,1,102,1,
        102,1,102,3,102,1392,8,102,1,102,1,102,3,102,1396,8,102,1,102,3,
        102,1399,8,102,3,102,1401,8,102,1,103,1,103,1,104,1,104,3,104,1407,
        8,104,1,104,1,104,1,104,3,104,1412,8,104,3,104,1414,8,104,1,104,
        1,104,1,104,3,104,1419,8,104,1,105,1,105,1,105,5,105,1424,8,105,
        10,105,12,105,1427,9,105,1,105,3,105,1430,8,105,1,106,3,106,1433,
        8,106,1,106,1,106,1,106,3,106,1438,8,106,1,106,3,106,1441,8,106,
        1,106,1,106,1,106,3,106,1446,8,106,1,106,1,106,1,106,3,106,1451,
        8,106,1,107,1,107,3,107,1455,8,107,1,107,1,107,1,108,1,108,1,108,
        5,108,1462,8,108,10,108,12,108,1465,9,108,1,109,3,109,1468,8,109,
        1,109,1,109,1,109,3,109,1473,8,109,1,109,1,109,3,109,1477,8,109,
        1,110,1,110,1,111,1,111,1,111,1,112,1,112,1,112,5,112,1487,8,112,
        10,112,12,112,1490,9,112,1,112,1,112,1,112,1,112,1,112,5,112,1497,
        8,112,10,112,12,112,1500,9,112,1,112,5,112,1503,8,112,10,112,12,
        112,1506,9,112,1,112,1,112,1,112,3,112,1511,8,112,1,113,1,113,1,
        114,5,114,1516,8,114,10,114,12,114,1519,9,114,1,115,1,115,1,115,
        1,115,3,115,1525,8,115,1,115,3,115,1528,8,115,1,115,1,115,1,116,
        1,116,1,116,1,116,1,116,3,116,1537,8,116,1,116,1,116,3,116,1541,
        8,116,3,116,1543,8,116,1,117,1,117,3,117,1547,8,117,1,117,1,117,
        1,117,3,117,1552,8,117,1,117,1,117,1,117,1,117,3,117,1558,8,117,
        1,118,1,118,1,118,1,118,5,118,1564,8,118,10,118,12,118,1567,9,118,
        1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,
        1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,3,119,1588,8,119,
        1,119,1,119,3,119,1592,8,119,1,119,1,119,1,119,1,119,1,119,1,119,
        1,119,1,119,3,119,1602,8,119,1,120,1,120,1,120,5,120,1607,8,120,
        10,120,12,120,1610,9,120,1,120,3,120,1613,8,120,1,120,1,120,1,120,
        5,120,1618,8,120,10,120,12,120,1621,9,120,1,120,3,120,1624,8,120,
        3,120,1626,8,120,1,121,1,121,1,121,1,121,5,121,1632,8,121,10,121,
        12,121,1635,9,121,3,121,1637,8,121,1,121,1,121,1,122,1,122,1,122,
        4,122,1644,8,122,11,122,12,122,1645,3,122,1648,8,122,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,5,123,1657,8,123,10,123,12,123,1660,
        9,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,3,123,
        1671,8,123,1,123,1,123,1,123,3,123,1676,8,123,5,123,1678,8,123,10,
        123,12,123,1681,9,123,3,123,1683,8,123,1,123,3,123,1686,8,123,1,
        124,1,124,1,124,5,124,1691,8,124,10,124,12,124,1694,9,124,1,125,
        1,125,1,125,1,125,3,125,1700,8,125,1,126,1,126,1,127,1,127,1,128,
        1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,
        1,128,1,128,1,128,3,128,1721,8,128,1,129,1,129,1,129,1,129,1,129,
        1,129,3,129,1729,8,129,1,130,1,130,1,130,1,130,5,130,1735,8,130,
        10,130,12,130,1738,9,130,1,130,1,130,1,130,3,130,1743,8,130,3,130,
        1745,8,130,1,130,1,130,1,131,1,131,1,131,5,131,1752,8,131,10,131,
        12,131,1755,9,131,1,131,1,131,1,131,3,131,1760,8,131,1,132,1,132,
        1,132,3,132,1765,8,132,1,133,1,133,3,133,1769,8,133,1,133,1,133,
        1,133,1,134,1,134,1,134,1,134,1,134,1,135,1,135,1,135,1,135,1,135,
        1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
        1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,3,135,1804,
        8,135,1,136,1,136,1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,137,
        1,137,1,137,5,137,1818,8,137,10,137,12,137,1821,9,137,3,137,1823,
        8,137,1,138,1,138,3,138,1827,8,138,1,138,1,138,1,139,1,139,1,139,
        3,139,1834,8,139,5,139,1836,8,139,10,139,12,139,1839,9,139,1,140,
        1,140,1,140,1,140,1,140,1,140,3,140,1847,8,140,1,141,1,141,1,141,
        1,141,1,141,1,141,1,141,3,141,1856,8,141,1,141,3,141,1859,8,141,
        1,142,1,142,1,142,1,142,5,142,1865,8,142,10,142,12,142,1868,9,142,
        1,142,1,142,1,142,1,142,1,142,1,142,5,142,1876,8,142,10,142,12,142,
        1879,9,142,1,142,1,142,1,142,3,142,1884,8,142,1,143,1,143,1,143,
        1,143,1,144,1,144,3,144,1892,8,144,1,144,1,144,1,144,1,144,1,144,
        1,144,3,144,1900,8,144,1,144,1,144,3,144,1904,8,144,1,144,3,144,
        1907,8,144,1,145,5,145,1910,8,145,10,145,12,145,1913,9,145,1,145,
        1,145,3,145,1917,8,145,1,145,3,145,1920,8,145,1,146,1,146,3,146,
        1924,8,146,1,146,1,146,1,146,1,146,1,147,1,147,1,147,1,148,1,148,
        3,148,1935,8,148,1,148,3,148,1938,8,148,1,149,1,149,3,149,1942,8,
        149,1,149,1,149,3,149,1946,8,149,1,150,1,150,5,150,1950,8,150,10,
        150,12,150,1953,9,150,1,150,1,150,1,151,1,151,1,151,1,151,1,151,
        1,151,1,151,1,151,1,151,1,151,1,151,3,151,1968,8,151,1,152,1,152,
        1,152,1,152,1,152,1,152,1,152,1,152,3,152,1978,8,152,1,152,1,152,
        1,152,3,152,1983,8,152,1,153,1,153,1,153,1,154,1,154,3,154,1990,
        8,154,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,
        1,155,1,155,3,155,2004,8,155,1,156,1,156,1,156,1,156,3,156,2010,
        8,156,1,157,1,157,1,157,1,157,3,157,2016,8,157,1,158,1,158,1,158,
        1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,3,158,2030,
        8,158,1,159,1,159,1,160,1,160,1,160,1,160,1,160,1,160,3,160,2040,
        8,160,1,161,1,161,3,161,2044,8,161,1,161,3,161,2047,8,161,1,162,
        1,162,1,162,1,162,1,162,1,162,1,162,5,162,2056,8,162,10,162,12,162,
        2059,9,162,1,162,1,162,3,162,2063,8,162,1,163,1,163,1,163,1,163,
        3,163,2069,8,163,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,
        3,165,2079,8,165,1,166,1,166,1,166,3,166,2084,8,166,1,167,1,167,
        1,167,5,167,2089,8,167,10,167,12,167,2092,9,167,1,168,1,168,1,168,
        5,168,2097,8,168,10,168,12,168,2100,9,168,1,169,1,169,3,169,2104,
        8,169,1,170,1,170,1,171,1,171,1,172,1,172,1,172,3,172,2113,8,172,
        1,172,1,172,1,173,1,173,1,173,5,173,2120,8,173,10,173,12,173,2123,
        9,173,1,174,1,174,1,174,5,174,2128,8,174,10,174,12,174,2131,9,174,
        1,174,1,174,1,174,0,0,175,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
        30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,
        74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,
        114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,
        146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,
        178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,
        210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,
        242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,
        274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,
        306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,
        338,340,342,344,346,348,0,23,2,0,19,19,103,103,2,0,115,115,123,123,
        3,0,18,18,20,20,95,95,2,0,3,3,105,105,2,0,27,27,60,60,2,0,23,23,
        70,70,2,0,13,13,90,91,3,0,20,20,25,25,86,86,3,0,19,19,77,77,123,
        123,3,0,69,69,132,133,187,187,2,0,139,139,157,157,1,0,155,156,8,
        0,5,5,8,8,28,28,66,66,76,76,107,108,131,131,134,137,3,0,55,55,61,
        61,142,147,2,0,15,15,22,22,1,0,35,35,6,0,17,17,39,39,82,82,97,97,
        104,104,110,110,3,0,38,38,63,63,83,83,9,0,4,4,12,12,22,23,56,56,
        65,65,67,67,84,84,94,94,113,113,9,0,21,21,44,44,64,64,75,75,93,93,
        96,97,99,99,125,125,129,129,8,0,6,6,15,15,37,37,39,39,54,54,72,72,
        77,77,111,112,2,0,183,184,186,186,2,0,184,184,186,186,2351,0,354,
        1,0,0,0,2,357,1,0,0,0,4,365,1,0,0,0,6,372,1,0,0,0,8,385,1,0,0,0,
        10,392,1,0,0,0,12,402,1,0,0,0,14,410,1,0,0,0,16,414,1,0,0,0,18,420,
        1,0,0,0,20,430,1,0,0,0,22,440,1,0,0,0,24,455,1,0,0,0,26,457,1,0,
        0,0,28,462,1,0,0,0,30,465,1,0,0,0,32,468,1,0,0,0,34,471,1,0,0,0,
        36,474,1,0,0,0,38,477,1,0,0,0,40,487,1,0,0,0,42,492,1,0,0,0,44,505,
        1,0,0,0,46,513,1,0,0,0,48,523,1,0,0,0,50,532,1,0,0,0,52,534,1,0,
        0,0,54,545,1,0,0,0,56,552,1,0,0,0,58,555,1,0,0,0,60,572,1,0,0,0,
        62,581,1,0,0,0,64,594,1,0,0,0,66,602,1,0,0,0,68,605,1,0,0,0,70,627,
        1,0,0,0,72,629,1,0,0,0,74,648,1,0,0,0,76,674,1,0,0,0,78,677,1,0,
        0,0,80,685,1,0,0,0,82,687,1,0,0,0,84,712,1,0,0,0,86,716,1,0,0,0,
        88,718,1,0,0,0,90,722,1,0,0,0,92,730,1,0,0,0,94,746,1,0,0,0,96,748,
        1,0,0,0,98,755,1,0,0,0,100,757,1,0,0,0,102,761,1,0,0,0,104,768,1,
        0,0,0,106,785,1,0,0,0,108,787,1,0,0,0,110,792,1,0,0,0,112,794,1,
        0,0,0,114,799,1,0,0,0,116,818,1,0,0,0,118,820,1,0,0,0,120,826,1,
        0,0,0,122,828,1,0,0,0,124,839,1,0,0,0,126,850,1,0,0,0,128,864,1,
        0,0,0,130,866,1,0,0,0,132,884,1,0,0,0,134,886,1,0,0,0,136,908,1,
        0,0,0,138,910,1,0,0,0,140,912,1,0,0,0,142,933,1,0,0,0,144,935,1,
        0,0,0,146,957,1,0,0,0,148,978,1,0,0,0,150,980,1,0,0,0,152,982,1,
        0,0,0,154,991,1,0,0,0,156,993,1,0,0,0,158,1008,1,0,0,0,160,1012,
        1,0,0,0,162,1014,1,0,0,0,164,1029,1,0,0,0,166,1049,1,0,0,0,168,1051,
        1,0,0,0,170,1063,1,0,0,0,172,1075,1,0,0,0,174,1094,1,0,0,0,176,1112,
        1,0,0,0,178,1127,1,0,0,0,180,1197,1,0,0,0,182,1200,1,0,0,0,184,1213,
        1,0,0,0,186,1243,1,0,0,0,188,1247,1,0,0,0,190,1261,1,0,0,0,192,1275,
        1,0,0,0,194,1293,1,0,0,0,196,1300,1,0,0,0,198,1311,1,0,0,0,200,1342,
        1,0,0,0,202,1344,1,0,0,0,204,1400,1,0,0,0,206,1402,1,0,0,0,208,1404,
        1,0,0,0,210,1420,1,0,0,0,212,1450,1,0,0,0,214,1452,1,0,0,0,216,1458,
        1,0,0,0,218,1467,1,0,0,0,220,1478,1,0,0,0,222,1480,1,0,0,0,224,1510,
        1,0,0,0,226,1512,1,0,0,0,228,1517,1,0,0,0,230,1520,1,0,0,0,232,1542,
        1,0,0,0,234,1557,1,0,0,0,236,1559,1,0,0,0,238,1601,1,0,0,0,240,1625,
        1,0,0,0,242,1627,1,0,0,0,244,1647,1,0,0,0,246,1685,1,0,0,0,248,1687,
        1,0,0,0,250,1695,1,0,0,0,252,1701,1,0,0,0,254,1703,1,0,0,0,256,1720,
        1,0,0,0,258,1722,1,0,0,0,260,1730,1,0,0,0,262,1748,1,0,0,0,264,1761,
        1,0,0,0,266,1766,1,0,0,0,268,1773,1,0,0,0,270,1803,1,0,0,0,272,1805,
        1,0,0,0,274,1822,1,0,0,0,276,1824,1,0,0,0,278,1830,1,0,0,0,280,1846,
        1,0,0,0,282,1858,1,0,0,0,284,1883,1,0,0,0,286,1885,1,0,0,0,288,1906,
        1,0,0,0,290,1919,1,0,0,0,292,1921,1,0,0,0,294,1929,1,0,0,0,296,1937,
        1,0,0,0,298,1939,1,0,0,0,300,1947,1,0,0,0,302,1967,1,0,0,0,304,1982,
        1,0,0,0,306,1984,1,0,0,0,308,1987,1,0,0,0,310,2003,1,0,0,0,312,2009,
        1,0,0,0,314,2015,1,0,0,0,316,2029,1,0,0,0,318,2031,1,0,0,0,320,2039,
        1,0,0,0,322,2046,1,0,0,0,324,2062,1,0,0,0,326,2068,1,0,0,0,328,2070,
        1,0,0,0,330,2078,1,0,0,0,332,2083,1,0,0,0,334,2085,1,0,0,0,336,2093,
        1,0,0,0,338,2103,1,0,0,0,340,2105,1,0,0,0,342,2107,1,0,0,0,344,2112,
        1,0,0,0,346,2116,1,0,0,0,348,2129,1,0,0,0,350,355,3,2,1,0,351,355,
        3,8,4,0,352,355,3,16,8,0,353,355,3,12,6,0,354,350,1,0,0,0,354,351,
        1,0,0,0,354,352,1,0,0,0,354,353,1,0,0,0,355,1,1,0,0,0,356,358,3,
        4,2,0,357,356,1,0,0,0,357,358,1,0,0,0,358,360,1,0,0,0,359,361,3,
        36,18,0,360,359,1,0,0,0,360,361,1,0,0,0,361,362,1,0,0,0,362,363,
        3,44,22,0,363,364,5,156,0,0,364,3,1,0,0,0,365,366,5,87,0,0,366,368,
        3,346,173,0,367,369,3,6,3,0,368,367,1,0,0,0,368,369,1,0,0,0,369,
        370,1,0,0,0,370,371,5,140,0,0,371,5,1,0,0,0,372,381,5,148,0,0,373,
        378,3,330,165,0,374,375,5,139,0,0,375,377,3,330,165,0,376,374,1,
        0,0,0,377,380,1,0,0,0,378,376,1,0,0,0,378,379,1,0,0,0,379,382,1,
        0,0,0,380,378,1,0,0,0,381,373,1,0,0,0,381,382,1,0,0,0,382,383,1,
        0,0,0,383,384,5,149,0,0,384,7,1,0,0,0,385,387,3,10,5,0,386,388,3,
        36,18,0,387,386,1,0,0,0,387,388,1,0,0,0,388,389,1,0,0,0,389,390,
        3,44,22,0,390,391,5,156,0,0,391,9,1,0,0,0,392,393,5,63,0,0,393,397,
        3,346,173,0,394,396,3,322,161,0,395,394,1,0,0,0,396,399,1,0,0,0,
        397,395,1,0,0,0,397,398,1,0,0,0,398,400,1,0,0,0,399,397,1,0,0,0,
        400,401,5,140,0,0,401,11,1,0,0,0,402,403,3,14,7,0,403,405,3,32,16,
        0,404,406,3,30,15,0,405,404,1,0,0,0,405,406,1,0,0,0,406,407,1,0,
        0,0,407,408,5,35,0,0,408,409,5,156,0,0,409,13,1,0,0,0,410,411,5,
        80,0,0,411,412,3,346,173,0,412,413,5,140,0,0,413,15,1,0,0,0,414,
        415,3,18,9,0,415,416,3,20,10,0,416,417,3,22,11,0,417,418,3,24,12,
        0,418,419,5,156,0,0,419,17,1,0,0,0,420,421,5,119,0,0,421,425,3,346,
        173,0,422,424,3,322,161,0,423,422,1,0,0,0,424,427,1,0,0,0,425,423,
        1,0,0,0,425,426,1,0,0,0,426,428,1,0,0,0,427,425,1,0,0,0,428,429,
        5,140,0,0,429,19,1,0,0,0,430,432,5,60,0,0,431,433,3,34,17,0,432,
        431,1,0,0,0,432,433,1,0,0,0,433,437,1,0,0,0,434,436,3,50,25,0,435,
        434,1,0,0,0,436,439,1,0,0,0,437,435,1,0,0,0,437,438,1,0,0,0,438,
        21,1,0,0,0,439,437,1,0,0,0,440,442,5,53,0,0,441,443,3,34,17,0,442,
        441,1,0,0,0,442,443,1,0,0,0,443,447,1,0,0,0,444,446,3,48,24,0,445,
        444,1,0,0,0,446,449,1,0,0,0,447,445,1,0,0,0,447,448,1,0,0,0,448,
        23,1,0,0,0,449,447,1,0,0,0,450,451,3,26,13,0,451,452,5,35,0,0,452,
        456,1,0,0,0,453,456,3,276,138,0,454,456,5,35,0,0,455,450,1,0,0,0,
        455,453,1,0,0,0,455,454,1,0,0,0,456,25,1,0,0,0,457,458,5,58,0,0,
        458,460,3,278,139,0,459,461,3,28,14,0,460,459,1,0,0,0,460,461,1,
        0,0,0,461,27,1,0,0,0,462,463,5,45,0,0,463,464,3,278,139,0,464,29,
        1,0,0,0,465,466,5,21,0,0,466,467,3,38,19,0,467,31,1,0,0,0,468,469,
        5,101,0,0,469,470,3,42,21,0,470,33,1,0,0,0,471,472,5,122,0,0,472,
        473,3,42,21,0,473,35,1,0,0,0,474,475,5,122,0,0,475,476,3,38,19,0,
        476,37,1,0,0,0,477,482,3,40,20,0,478,479,5,139,0,0,479,481,3,40,
        20,0,480,478,1,0,0,0,481,484,1,0,0,0,482,480,1,0,0,0,482,483,1,0,
        0,0,483,485,1,0,0,0,484,482,1,0,0,0,485,486,5,140,0,0,486,39,1,0,
        0,0,487,490,3,346,173,0,488,489,5,55,0,0,489,491,5,189,0,0,490,488,
        1,0,0,0,490,491,1,0,0,0,491,41,1,0,0,0,492,497,3,346,173,0,493,494,
        5,139,0,0,494,496,3,346,173,0,495,493,1,0,0,0,496,499,1,0,0,0,497,
        495,1,0,0,0,497,498,1,0,0,0,498,500,1,0,0,0,499,497,1,0,0,0,500,
        501,5,140,0,0,501,43,1,0,0,0,502,504,3,48,24,0,503,502,1,0,0,0,504,
        507,1,0,0,0,505,503,1,0,0,0,505,506,1,0,0,0,506,509,1,0,0,0,507,
        505,1,0,0,0,508,510,3,46,23,0,509,508,1,0,0,0,509,510,1,0,0,0,510,
        45,1,0,0,0,511,514,3,276,138,0,512,514,3,300,150,0,513,511,1,0,0,
        0,513,512,1,0,0,0,514,47,1,0,0,0,515,524,3,52,26,0,516,524,3,54,
        27,0,517,524,3,60,30,0,518,524,3,64,32,0,519,524,3,200,100,0,520,
        524,3,202,101,0,521,524,3,210,105,0,522,524,3,72,36,0,523,515,1,
        0,0,0,523,516,1,0,0,0,523,517,1,0,0,0,523,518,1,0,0,0,523,519,1,
        0,0,0,523,520,1,0,0,0,523,521,1,0,0,0,523,522,1,0,0,0,524,49,1,0,
        0,0,525,533,3,210,105,0,526,533,3,202,101,0,527,533,3,60,30,0,528,
        533,3,64,32,0,529,533,3,200,100,0,530,533,3,72,36,0,531,533,3,54,
        27,0,532,525,1,0,0,0,532,526,1,0,0,0,532,527,1,0,0,0,532,528,1,0,
        0,0,532,529,1,0,0,0,532,530,1,0,0,0,532,531,1,0,0,0,533,51,1,0,0,
        0,534,535,5,62,0,0,535,540,3,338,169,0,536,537,5,139,0,0,537,539,
        3,338,169,0,538,536,1,0,0,0,539,542,1,0,0,0,540,538,1,0,0,0,540,
        541,1,0,0,0,541,543,1,0,0,0,542,540,1,0,0,0,543,544,5,140,0,0,544,
        53,1,0,0,0,545,549,3,56,28,0,546,548,3,58,29,0,547,546,1,0,0,0,548,
        551,1,0,0,0,549,547,1,0,0,0,549,550,1,0,0,0,550,55,1,0,0,0,551,549,
        1,0,0,0,552,553,7,0,0,0,553,57,1,0,0,0,554,556,3,226,113,0,555,554,
        1,0,0,0,555,556,1,0,0,0,556,557,1,0,0,0,557,560,3,330,165,0,558,
        559,5,141,0,0,559,561,3,76,38,0,560,558,1,0,0,0,560,561,1,0,0,0,
        561,562,1,0,0,0,562,563,5,142,0,0,563,567,3,284,142,0,564,566,3,
        322,161,0,565,564,1,0,0,0,566,569,1,0,0,0,567,565,1,0,0,0,567,568,
        1,0,0,0,568,570,1,0,0,0,569,567,1,0,0,0,570,571,5,140,0,0,571,59,
        1,0,0,0,572,573,5,118,0,0,573,577,3,62,31,0,574,576,3,62,31,0,575,
        574,1,0,0,0,576,579,1,0,0,0,577,575,1,0,0,0,577,578,1,0,0,0,578,
        61,1,0,0,0,579,577,1,0,0,0,580,582,3,226,113,0,581,580,1,0,0,0,581,
        582,1,0,0,0,582,583,1,0,0,0,583,584,3,118,59,0,584,585,5,142,0,0,
        585,589,3,76,38,0,586,588,3,322,161,0,587,586,1,0,0,0,588,591,1,
        0,0,0,589,587,1,0,0,0,589,590,1,0,0,0,590,592,1,0,0,0,591,589,1,
        0,0,0,592,593,5,140,0,0,593,63,1,0,0,0,594,595,3,66,33,0,595,599,
        3,68,34,0,596,598,3,68,34,0,597,596,1,0,0,0,598,601,1,0,0,0,599,
        597,1,0,0,0,599,600,1,0,0,0,600,65,1,0,0,0,601,599,1,0,0,0,602,603,
        7,1,0,0,603,67,1,0,0,0,604,606,3,226,113,0,605,604,1,0,0,0,605,606,
        1,0,0,0,606,607,1,0,0,0,607,608,3,336,168,0,608,609,5,141,0,0,609,
        611,3,76,38,0,610,612,3,70,35,0,611,610,1,0,0,0,611,612,1,0,0,0,
        612,616,1,0,0,0,613,615,3,322,161,0,614,613,1,0,0,0,615,618,1,0,
        0,0,616,614,1,0,0,0,616,617,1,0,0,0,617,619,1,0,0,0,618,616,1,0,
        0,0,619,620,5,140,0,0,620,69,1,0,0,0,621,622,5,2,0,0,622,628,3,330,
        165,0,623,624,5,2,0,0,624,628,3,284,142,0,625,626,5,142,0,0,626,
        628,3,284,142,0,627,621,1,0,0,0,627,623,1,0,0,0,627,625,1,0,0,0,
        628,71,1,0,0,0,629,630,5,40,0,0,630,631,3,330,165,0,631,638,3,74,
        37,0,632,633,5,139,0,0,633,634,3,330,165,0,634,635,3,74,37,0,635,
        637,1,0,0,0,636,632,1,0,0,0,637,640,1,0,0,0,638,636,1,0,0,0,638,
        639,1,0,0,0,639,641,1,0,0,0,640,638,1,0,0,0,641,642,5,140,0,0,642,
        73,1,0,0,0,643,645,5,148,0,0,644,646,3,216,108,0,645,644,1,0,0,0,
        645,646,1,0,0,0,646,647,1,0,0,0,647,649,5,149,0,0,648,643,1,0,0,
        0,648,649,1,0,0,0,649,652,1,0,0,0,650,651,5,56,0,0,651,653,3,232,
        116,0,652,650,1,0,0,0,652,653,1,0,0,0,653,656,1,0,0,0,654,655,5,
        67,0,0,655,657,3,232,116,0,656,654,1,0,0,0,656,657,1,0,0,0,657,659,
        1,0,0,0,658,660,5,102,0,0,659,658,1,0,0,0,659,660,1,0,0,0,660,75,
        1,0,0,0,661,675,3,78,39,0,662,675,3,92,46,0,663,675,3,94,47,0,664,
        675,3,98,49,0,665,675,3,108,54,0,666,668,5,118,0,0,667,666,1,0,0,
        0,667,668,1,0,0,0,668,669,1,0,0,0,669,671,3,116,58,0,670,672,3,130,
        65,0,671,670,1,0,0,0,671,672,1,0,0,0,672,675,1,0,0,0,673,675,3,110,
        55,0,674,661,1,0,0,0,674,662,1,0,0,0,674,663,1,0,0,0,674,664,1,0,
        0,0,674,665,1,0,0,0,674,667,1,0,0,0,674,673,1,0,0,0,675,77,1,0,0,
        0,676,678,5,81,0,0,677,676,1,0,0,0,677,678,1,0,0,0,678,679,1,0,0,
        0,679,680,3,80,40,0,680,79,1,0,0,0,681,686,3,82,41,0,682,686,3,88,
        44,0,683,686,3,90,45,0,684,686,3,132,66,0,685,681,1,0,0,0,685,682,
        1,0,0,0,685,683,1,0,0,0,685,684,1,0,0,0,686,81,1,0,0,0,687,702,5,
        7,0,0,688,690,5,150,0,0,689,691,3,84,42,0,690,689,1,0,0,0,690,691,
        1,0,0,0,691,698,1,0,0,0,692,694,5,139,0,0,693,695,3,84,42,0,694,
        693,1,0,0,0,694,695,1,0,0,0,695,697,1,0,0,0,696,692,1,0,0,0,697,
        700,1,0,0,0,698,696,1,0,0,0,698,699,1,0,0,0,699,701,1,0,0,0,700,
        698,1,0,0,0,701,703,5,152,0,0,702,688,1,0,0,0,702,703,1,0,0,0,703,
        704,1,0,0,0,704,705,5,73,0,0,705,706,3,86,43,0,706,83,1,0,0,0,707,
        713,3,116,58,0,708,709,3,232,116,0,709,710,5,157,0,0,710,711,3,232,
        116,0,711,713,1,0,0,0,712,707,1,0,0,0,712,708,1,0,0,0,713,85,1,0,
        0,0,714,717,5,19,0,0,715,717,3,76,38,0,716,714,1,0,0,0,716,715,1,
        0,0,0,717,87,1,0,0,0,718,719,5,106,0,0,719,720,5,73,0,0,720,721,
        3,76,38,0,721,89,1,0,0,0,722,725,5,43,0,0,723,724,5,73,0,0,724,726,
        3,76,38,0,725,723,1,0,0,0,725,726,1,0,0,0,726,91,1,0,0,0,727,728,
        5,154,0,0,728,731,3,76,38,0,729,731,5,84,0,0,730,727,1,0,0,0,730,
        729,1,0,0,0,731,93,1,0,0,0,732,737,5,113,0,0,733,734,5,150,0,0,734,
        735,3,232,116,0,735,736,5,152,0,0,736,738,1,0,0,0,737,733,1,0,0,
        0,737,738,1,0,0,0,738,747,1,0,0,0,739,741,5,118,0,0,740,739,1,0,
        0,0,740,741,1,0,0,0,741,742,1,0,0,0,742,744,5,6,0,0,743,745,3,96,
        48,0,744,743,1,0,0,0,744,745,1,0,0,0,745,747,1,0,0,0,746,732,1,0,
        0,0,746,740,1,0,0,0,747,95,1,0,0,0,748,749,5,148,0,0,749,750,3,340,
        170,0,750,751,5,149,0,0,751,97,1,0,0,0,752,756,3,100,50,0,753,756,
        3,102,51,0,754,756,3,104,52,0,755,752,1,0,0,0,755,753,1,0,0,0,755,
        754,1,0,0,0,756,99,1,0,0,0,757,758,3,106,53,0,758,759,5,73,0,0,759,
        760,5,72,0,0,760,101,1,0,0,0,761,766,3,106,53,0,762,764,5,140,0,
        0,763,762,1,0,0,0,763,764,1,0,0,0,764,765,1,0,0,0,765,767,3,318,
        159,0,766,763,1,0,0,0,766,767,1,0,0,0,767,103,1,0,0,0,768,769,5,
        96,0,0,769,770,5,116,0,0,770,771,3,106,53,0,771,105,1,0,0,0,772,
        774,5,49,0,0,773,775,3,214,107,0,774,773,1,0,0,0,774,775,1,0,0,0,
        775,776,1,0,0,0,776,778,5,141,0,0,777,779,3,226,113,0,778,777,1,
        0,0,0,778,779,1,0,0,0,779,780,1,0,0,0,780,786,3,76,38,0,781,783,
        5,86,0,0,782,784,3,214,107,0,783,782,1,0,0,0,783,784,1,0,0,0,784,
        786,1,0,0,0,785,772,1,0,0,0,785,781,1,0,0,0,786,107,1,0,0,0,787,
        788,5,125,0,0,788,109,1,0,0,0,789,793,3,330,165,0,790,793,3,112,
        56,0,791,793,3,114,57,0,792,789,1,0,0,0,792,790,1,0,0,0,792,791,
        1,0,0,0,793,111,1,0,0,0,794,797,3,284,142,0,795,796,5,157,0,0,796,
        798,3,284,142,0,797,795,1,0,0,0,797,798,1,0,0,0,798,113,1,0,0,0,
        799,800,5,148,0,0,800,803,3,330,165,0,801,802,5,142,0,0,802,804,
        3,232,116,0,803,801,1,0,0,0,803,804,1,0,0,0,804,813,1,0,0,0,805,
        806,5,139,0,0,806,809,3,330,165,0,807,808,5,142,0,0,808,810,3,232,
        116,0,809,807,1,0,0,0,809,810,1,0,0,0,810,812,1,0,0,0,811,805,1,
        0,0,0,812,815,1,0,0,0,813,811,1,0,0,0,813,814,1,0,0,0,814,816,1,
        0,0,0,815,813,1,0,0,0,816,817,5,149,0,0,817,115,1,0,0,0,818,819,
        3,344,172,0,819,117,1,0,0,0,820,822,3,348,174,0,821,823,3,120,60,
        0,822,821,1,0,0,0,822,823,1,0,0,0,823,119,1,0,0,0,824,827,3,122,
        61,0,825,827,3,124,62,0,826,824,1,0,0,0,826,825,1,0,0,0,827,121,
        1,0,0,0,828,829,5,144,0,0,829,834,3,330,165,0,830,831,5,139,0,0,
        831,833,3,330,165,0,832,830,1,0,0,0,833,836,1,0,0,0,834,832,1,0,
        0,0,834,835,1,0,0,0,835,837,1,0,0,0,836,834,1,0,0,0,837,838,5,147,
        0,0,838,123,1,0,0,0,839,840,5,144,0,0,840,845,3,126,63,0,841,842,
        5,140,0,0,842,844,3,126,63,0,843,841,1,0,0,0,844,847,1,0,0,0,845,
        843,1,0,0,0,845,846,1,0,0,0,846,848,1,0,0,0,847,845,1,0,0,0,848,
        849,5,147,0,0,849,125,1,0,0,0,850,860,3,330,165,0,851,852,5,141,
        0,0,852,857,3,128,64,0,853,854,5,139,0,0,854,856,3,128,64,0,855,
        853,1,0,0,0,856,859,1,0,0,0,857,855,1,0,0,0,857,858,1,0,0,0,858,
        861,1,0,0,0,859,857,1,0,0,0,860,851,1,0,0,0,860,861,1,0,0,0,861,
        127,1,0,0,0,862,865,3,330,165,0,863,865,7,2,0,0,864,862,1,0,0,0,
        864,863,1,0,0,0,865,129,1,0,0,0,866,867,5,144,0,0,867,872,3,76,38,
        0,868,869,5,139,0,0,869,871,3,76,38,0,870,868,1,0,0,0,871,874,1,
        0,0,0,872,870,1,0,0,0,872,873,1,0,0,0,873,875,1,0,0,0,874,872,1,
        0,0,0,875,876,5,147,0,0,876,131,1,0,0,0,877,885,3,134,67,0,878,885,
        3,136,68,0,879,885,3,144,72,0,880,885,3,148,74,0,881,885,3,156,78,
        0,882,885,3,160,80,0,883,885,3,176,88,0,884,877,1,0,0,0,884,878,
        1,0,0,0,884,879,1,0,0,0,884,880,1,0,0,0,884,881,1,0,0,0,884,882,
        1,0,0,0,884,883,1,0,0,0,885,133,1,0,0,0,886,887,5,18,0,0,887,888,
        5,73,0,0,888,889,3,116,58,0,889,135,1,0,0,0,890,892,5,18,0,0,891,
        893,3,138,69,0,892,891,1,0,0,0,892,893,1,0,0,0,893,895,1,0,0,0,894,
        896,3,140,70,0,895,894,1,0,0,0,895,896,1,0,0,0,896,900,1,0,0,0,897,
        899,3,142,71,0,898,897,1,0,0,0,899,902,1,0,0,0,900,898,1,0,0,0,900,
        901,1,0,0,0,901,903,1,0,0,0,902,900,1,0,0,0,903,909,5,35,0,0,904,
        906,5,18,0,0,905,907,3,140,70,0,906,905,1,0,0,0,906,907,1,0,0,0,
        907,909,1,0,0,0,908,890,1,0,0,0,908,904,1,0,0,0,909,137,1,0,0,0,
        910,911,7,3,0,0,911,139,1,0,0,0,912,913,5,148,0,0,913,918,3,118,
        59,0,914,915,5,139,0,0,915,917,3,118,59,0,916,914,1,0,0,0,917,920,
        1,0,0,0,918,916,1,0,0,0,918,919,1,0,0,0,919,921,1,0,0,0,920,918,
        1,0,0,0,921,922,5,149,0,0,922,141,1,0,0,0,923,934,3,198,99,0,924,
        934,3,180,90,0,925,934,3,182,91,0,926,934,3,184,92,0,927,934,3,54,
        27,0,928,934,3,60,30,0,929,931,5,18,0,0,930,929,1,0,0,0,930,931,
        1,0,0,0,931,932,1,0,0,0,932,934,3,64,32,0,933,923,1,0,0,0,933,924,
        1,0,0,0,933,925,1,0,0,0,933,926,1,0,0,0,933,927,1,0,0,0,933,928,
        1,0,0,0,933,930,1,0,0,0,934,143,1,0,0,0,935,936,5,18,0,0,936,938,
        5,51,0,0,937,939,3,140,70,0,938,937,1,0,0,0,938,939,1,0,0,0,939,
        940,1,0,0,0,940,941,5,47,0,0,941,945,3,116,58,0,942,944,3,146,73,
        0,943,942,1,0,0,0,944,947,1,0,0,0,945,943,1,0,0,0,945,946,1,0,0,
        0,946,948,1,0,0,0,947,945,1,0,0,0,948,949,5,35,0,0,949,145,1,0,0,
        0,950,958,3,198,99,0,951,958,3,180,90,0,952,958,3,184,92,0,953,955,
        5,18,0,0,954,953,1,0,0,0,954,955,1,0,0,0,955,956,1,0,0,0,956,958,
        3,64,32,0,957,950,1,0,0,0,957,951,1,0,0,0,957,952,1,0,0,0,957,954,
        1,0,0,0,958,147,1,0,0,0,959,961,3,150,75,0,960,962,3,140,70,0,961,
        960,1,0,0,0,961,962,1,0,0,0,962,964,1,0,0,0,963,965,3,152,76,0,964,
        963,1,0,0,0,964,965,1,0,0,0,965,969,1,0,0,0,966,968,3,154,77,0,967,
        966,1,0,0,0,968,971,1,0,0,0,969,967,1,0,0,0,969,970,1,0,0,0,970,
        972,1,0,0,0,971,969,1,0,0,0,972,973,5,35,0,0,973,979,1,0,0,0,974,
        976,3,150,75,0,975,977,3,140,70,0,976,975,1,0,0,0,976,977,1,0,0,
        0,977,979,1,0,0,0,978,959,1,0,0,0,978,974,1,0,0,0,979,149,1,0,0,
        0,980,981,7,4,0,0,981,151,1,0,0,0,982,983,5,150,0,0,983,984,5,189,
        0,0,984,985,5,152,0,0,985,153,1,0,0,0,986,992,3,180,90,0,987,989,
        5,18,0,0,988,987,1,0,0,0,988,989,1,0,0,0,989,990,1,0,0,0,990,992,
        3,184,92,0,991,986,1,0,0,0,991,988,1,0,0,0,992,155,1,0,0,0,993,995,
        5,72,0,0,994,996,3,140,70,0,995,994,1,0,0,0,995,996,1,0,0,0,996,
        1000,1,0,0,0,997,999,3,158,79,0,998,997,1,0,0,0,999,1002,1,0,0,0,
        1000,998,1,0,0,0,1000,1001,1,0,0,0,1001,1003,1,0,0,0,1002,1000,1,
        0,0,0,1003,1004,5,35,0,0,1004,157,1,0,0,0,1005,1009,3,198,99,0,1006,
        1009,3,180,90,0,1007,1009,3,182,91,0,1008,1005,1,0,0,0,1008,1006,
        1,0,0,0,1008,1007,1,0,0,0,1009,159,1,0,0,0,1010,1013,3,162,81,0,
        1011,1013,3,164,82,0,1012,1010,1,0,0,0,1012,1011,1,0,0,0,1013,161,
        1,0,0,0,1014,1018,5,95,0,0,1015,1017,3,168,84,0,1016,1015,1,0,0,
        0,1017,1020,1,0,0,0,1018,1016,1,0,0,0,1018,1019,1,0,0,0,1019,1024,
        1,0,0,0,1020,1018,1,0,0,0,1021,1023,3,166,83,0,1022,1021,1,0,0,0,
        1023,1026,1,0,0,0,1024,1022,1,0,0,0,1024,1025,1,0,0,0,1025,1027,
        1,0,0,0,1026,1024,1,0,0,0,1027,1028,5,35,0,0,1028,163,1,0,0,0,1029,
        1033,5,95,0,0,1030,1032,3,168,84,0,1031,1030,1,0,0,0,1032,1035,1,
        0,0,0,1033,1031,1,0,0,0,1033,1034,1,0,0,0,1034,1036,1,0,0,0,1035,
        1033,1,0,0,0,1036,1037,3,172,86,0,1037,1038,5,35,0,0,1038,165,1,
        0,0,0,1039,1050,3,198,99,0,1040,1050,3,180,90,0,1041,1050,3,184,
        92,0,1042,1050,3,54,27,0,1043,1050,3,60,30,0,1044,1050,3,168,84,
        0,1045,1047,5,18,0,0,1046,1045,1,0,0,0,1046,1047,1,0,0,0,1047,1048,
        1,0,0,0,1048,1050,3,64,32,0,1049,1039,1,0,0,0,1049,1040,1,0,0,0,
        1049,1041,1,0,0,0,1049,1042,1,0,0,0,1049,1043,1,0,0,0,1049,1044,
        1,0,0,0,1049,1046,1,0,0,0,1050,167,1,0,0,0,1051,1052,3,334,167,0,
        1052,1053,5,141,0,0,1053,1057,3,76,38,0,1054,1056,3,322,161,0,1055,
        1054,1,0,0,0,1056,1059,1,0,0,0,1057,1055,1,0,0,0,1057,1058,1,0,0,
        0,1058,1061,1,0,0,0,1059,1057,1,0,0,0,1060,1062,5,140,0,0,1061,1060,
        1,0,0,0,1061,1062,1,0,0,0,1062,169,1,0,0,0,1063,1064,3,334,167,0,
        1064,1065,5,141,0,0,1065,1069,3,76,38,0,1066,1068,3,322,161,0,1067,
        1066,1,0,0,0,1068,1071,1,0,0,0,1069,1067,1,0,0,0,1069,1070,1,0,0,
        0,1070,1073,1,0,0,0,1071,1069,1,0,0,0,1072,1074,5,140,0,0,1073,1072,
        1,0,0,0,1073,1074,1,0,0,0,1074,171,1,0,0,0,1075,1079,5,16,0,0,1076,
        1077,3,330,165,0,1077,1078,5,141,0,0,1078,1080,1,0,0,0,1079,1076,
        1,0,0,0,1079,1080,1,0,0,0,1080,1081,1,0,0,0,1081,1082,3,76,38,0,
        1082,1085,5,73,0,0,1083,1086,3,174,87,0,1084,1086,5,140,0,0,1085,
        1083,1,0,0,0,1085,1084,1,0,0,0,1086,1091,1,0,0,0,1087,1090,3,174,
        87,0,1088,1090,5,140,0,0,1089,1087,1,0,0,0,1089,1088,1,0,0,0,1090,
        1093,1,0,0,0,1091,1089,1,0,0,0,1091,1092,1,0,0,0,1092,173,1,0,0,
        0,1093,1091,1,0,0,0,1094,1099,3,284,142,0,1095,1096,5,139,0,0,1096,
        1098,3,284,142,0,1097,1095,1,0,0,0,1098,1101,1,0,0,0,1099,1097,1,
        0,0,0,1099,1100,1,0,0,0,1100,1102,1,0,0,0,1101,1099,1,0,0,0,1102,
        1103,5,141,0,0,1103,1107,5,148,0,0,1104,1106,3,170,85,0,1105,1104,
        1,0,0,0,1106,1109,1,0,0,0,1107,1105,1,0,0,0,1107,1108,1,0,0,0,1108,
        1110,1,0,0,0,1109,1107,1,0,0,0,1110,1111,5,149,0,0,1111,175,1,0,
        0,0,1112,1113,5,95,0,0,1113,1114,5,51,0,0,1114,1115,5,47,0,0,1115,
        1119,3,116,58,0,1116,1118,3,178,89,0,1117,1116,1,0,0,0,1118,1121,
        1,0,0,0,1119,1117,1,0,0,0,1119,1120,1,0,0,0,1120,1122,1,0,0,0,1121,
        1119,1,0,0,0,1122,1123,5,35,0,0,1123,177,1,0,0,0,1124,1128,3,198,
        99,0,1125,1128,3,180,90,0,1126,1128,3,184,92,0,1127,1124,1,0,0,0,
        1127,1125,1,0,0,0,1127,1126,1,0,0,0,1128,179,1,0,0,0,1129,1131,3,
        226,113,0,1130,1129,1,0,0,0,1130,1131,1,0,0,0,1131,1133,1,0,0,0,
        1132,1134,5,18,0,0,1133,1132,1,0,0,0,1133,1134,1,0,0,0,1134,1135,
        1,0,0,0,1135,1136,3,206,103,0,1136,1138,3,330,165,0,1137,1139,3,
        120,60,0,1138,1137,1,0,0,0,1138,1139,1,0,0,0,1139,1141,1,0,0,0,1140,
        1142,3,214,107,0,1141,1140,1,0,0,0,1141,1142,1,0,0,0,1142,1143,1,
        0,0,0,1143,1147,5,140,0,0,1144,1146,3,302,151,0,1145,1144,1,0,0,
        0,1146,1149,1,0,0,0,1147,1145,1,0,0,0,1147,1148,1,0,0,0,1148,1198,
        1,0,0,0,1149,1147,1,0,0,0,1150,1152,3,226,113,0,1151,1150,1,0,0,
        0,1151,1152,1,0,0,0,1152,1154,1,0,0,0,1153,1155,5,18,0,0,1154,1153,
        1,0,0,0,1154,1155,1,0,0,0,1155,1156,1,0,0,0,1156,1157,5,49,0,0,1157,
        1159,3,330,165,0,1158,1160,3,120,60,0,1159,1158,1,0,0,0,1159,1160,
        1,0,0,0,1160,1162,1,0,0,0,1161,1163,3,214,107,0,1162,1161,1,0,0,
        0,1162,1163,1,0,0,0,1163,1164,1,0,0,0,1164,1166,5,141,0,0,1165,1167,
        3,226,113,0,1166,1165,1,0,0,0,1166,1167,1,0,0,0,1167,1168,1,0,0,
        0,1168,1169,3,76,38,0,1169,1173,5,140,0,0,1170,1172,3,302,151,0,
        1171,1170,1,0,0,0,1172,1175,1,0,0,0,1173,1171,1,0,0,0,1173,1174,
        1,0,0,0,1174,1198,1,0,0,0,1175,1173,1,0,0,0,1176,1178,3,226,113,
        0,1177,1176,1,0,0,0,1177,1178,1,0,0,0,1178,1180,1,0,0,0,1179,1181,
        5,18,0,0,1180,1179,1,0,0,0,1180,1181,1,0,0,0,1181,1182,1,0,0,0,1182,
        1183,5,75,0,0,1183,1185,3,330,165,0,1184,1186,3,120,60,0,1185,1184,
        1,0,0,0,1185,1186,1,0,0,0,1186,1188,1,0,0,0,1187,1189,3,214,107,
        0,1188,1187,1,0,0,0,1188,1189,1,0,0,0,1189,1190,1,0,0,0,1190,1192,
        5,141,0,0,1191,1193,3,226,113,0,1192,1191,1,0,0,0,1192,1193,1,0,
        0,0,1193,1194,1,0,0,0,1194,1195,3,76,38,0,1195,1196,5,140,0,0,1196,
        1198,1,0,0,0,1197,1130,1,0,0,0,1197,1151,1,0,0,0,1197,1177,1,0,0,
        0,1198,181,1,0,0,0,1199,1201,3,226,113,0,1200,1199,1,0,0,0,1200,
        1201,1,0,0,0,1201,1202,1,0,0,0,1202,1203,3,334,167,0,1203,1204,5,
        141,0,0,1204,1205,3,76,38,0,1205,1209,5,140,0,0,1206,1208,3,322,
        161,0,1207,1206,1,0,0,0,1208,1211,1,0,0,0,1209,1207,1,0,0,0,1209,
        1210,1,0,0,0,1210,183,1,0,0,0,1211,1209,1,0,0,0,1212,1214,3,226,
        113,0,1213,1212,1,0,0,0,1213,1214,1,0,0,0,1214,1216,1,0,0,0,1215,
        1217,5,18,0,0,1216,1215,1,0,0,0,1216,1217,1,0,0,0,1217,1218,1,0,
        0,0,1218,1219,5,88,0,0,1219,1221,3,330,165,0,1220,1222,3,186,93,
        0,1221,1220,1,0,0,0,1221,1222,1,0,0,0,1222,1225,1,0,0,0,1223,1224,
        5,141,0,0,1224,1226,3,118,59,0,1225,1223,1,0,0,0,1225,1226,1,0,0,
        0,1226,1228,1,0,0,0,1227,1229,3,188,94,0,1228,1227,1,0,0,0,1228,
        1229,1,0,0,0,1229,1233,1,0,0,0,1230,1232,3,190,95,0,1231,1230,1,
        0,0,0,1232,1235,1,0,0,0,1233,1231,1,0,0,0,1233,1234,1,0,0,0,1234,
        1236,1,0,0,0,1235,1233,1,0,0,0,1236,1240,5,140,0,0,1237,1239,3,192,
        96,0,1238,1237,1,0,0,0,1239,1242,1,0,0,0,1240,1238,1,0,0,0,1240,
        1241,1,0,0,0,1241,185,1,0,0,0,1242,1240,1,0,0,0,1243,1244,5,150,
        0,0,1244,1245,3,216,108,0,1245,1246,5,152,0,0,1246,187,1,0,0,0,1247,
        1248,5,56,0,0,1248,1250,3,232,116,0,1249,1251,5,140,0,0,1250,1249,
        1,0,0,0,1250,1251,1,0,0,0,1251,189,1,0,0,0,1252,1262,3,194,97,0,
        1253,1262,3,196,98,0,1254,1255,5,111,0,0,1255,1262,3,232,116,0,1256,
        1257,5,23,0,0,1257,1262,3,232,116,0,1258,1262,7,5,0,0,1259,1260,
        5,54,0,0,1260,1262,3,116,58,0,1261,1252,1,0,0,0,1261,1253,1,0,0,
        0,1261,1254,1,0,0,0,1261,1256,1,0,0,0,1261,1258,1,0,0,0,1261,1259,
        1,0,0,0,1262,191,1,0,0,0,1263,1264,5,111,0,0,1264,1265,3,232,116,
        0,1265,1266,5,140,0,0,1266,1276,1,0,0,0,1267,1268,5,23,0,0,1268,
        1269,3,232,116,0,1269,1270,5,140,0,0,1270,1276,1,0,0,0,1271,1272,
        5,23,0,0,1272,1276,5,140,0,0,1273,1274,5,70,0,0,1274,1276,5,140,
        0,0,1275,1263,1,0,0,0,1275,1267,1,0,0,0,1275,1271,1,0,0,0,1275,1273,
        1,0,0,0,1276,193,1,0,0,0,1277,1278,5,93,0,0,1278,1283,3,348,174,
        0,1279,1280,5,150,0,0,1280,1281,3,232,116,0,1281,1282,5,152,0,0,
        1282,1284,1,0,0,0,1283,1279,1,0,0,0,1283,1284,1,0,0,0,1284,1294,
        1,0,0,0,1285,1286,5,129,0,0,1286,1291,3,348,174,0,1287,1288,5,150,
        0,0,1288,1289,3,232,116,0,1289,1290,5,152,0,0,1290,1292,1,0,0,0,
        1291,1287,1,0,0,0,1291,1292,1,0,0,0,1292,1294,1,0,0,0,1293,1277,
        1,0,0,0,1293,1285,1,0,0,0,1294,195,1,0,0,0,1295,1296,5,94,0,0,1296,
        1301,5,140,0,0,1297,1298,5,130,0,0,1298,1301,5,140,0,0,1299,1301,
        3,328,164,0,1300,1295,1,0,0,0,1300,1297,1,0,0,0,1300,1299,1,0,0,
        0,1301,197,1,0,0,0,1302,1304,5,112,0,0,1303,1302,1,0,0,0,1303,1304,
        1,0,0,0,1304,1305,1,0,0,0,1305,1312,5,89,0,0,1306,1308,5,112,0,0,
        1307,1306,1,0,0,0,1307,1308,1,0,0,0,1308,1309,1,0,0,0,1309,1312,
        5,85,0,0,1310,1312,7,6,0,0,1311,1303,1,0,0,0,1311,1307,1,0,0,0,1311,
        1310,1,0,0,0,1312,199,1,0,0,0,1313,1314,5,86,0,0,1314,1316,3,330,
        165,0,1315,1317,3,214,107,0,1316,1315,1,0,0,0,1316,1317,1,0,0,0,
        1317,1318,1,0,0,0,1318,1320,5,141,0,0,1319,1321,3,226,113,0,1320,
        1319,1,0,0,0,1320,1321,1,0,0,0,1321,1322,1,0,0,0,1322,1323,3,76,
        38,0,1323,1327,5,140,0,0,1324,1326,3,304,152,0,1325,1324,1,0,0,0,
        1326,1329,1,0,0,0,1327,1325,1,0,0,0,1327,1328,1,0,0,0,1328,1343,
        1,0,0,0,1329,1327,1,0,0,0,1330,1331,5,49,0,0,1331,1333,3,330,165,
        0,1332,1334,3,214,107,0,1333,1332,1,0,0,0,1333,1334,1,0,0,0,1334,
        1335,1,0,0,0,1335,1339,5,140,0,0,1336,1338,3,304,152,0,1337,1336,
        1,0,0,0,1338,1341,1,0,0,0,1339,1337,1,0,0,0,1339,1340,1,0,0,0,1340,
        1343,1,0,0,0,1341,1339,1,0,0,0,1342,1313,1,0,0,0,1342,1330,1,0,0,
        0,1343,201,1,0,0,0,1344,1345,3,204,102,0,1345,1349,5,140,0,0,1346,
        1348,3,302,151,0,1347,1346,1,0,0,0,1348,1351,1,0,0,0,1349,1347,1,
        0,0,0,1349,1350,1,0,0,0,1350,1353,1,0,0,0,1351,1349,1,0,0,0,1352,
        1354,3,222,111,0,1353,1352,1,0,0,0,1353,1354,1,0,0,0,1354,203,1,
        0,0,0,1355,1357,3,226,113,0,1356,1355,1,0,0,0,1356,1357,1,0,0,0,
        1357,1359,1,0,0,0,1358,1360,5,18,0,0,1359,1358,1,0,0,0,1359,1360,
        1,0,0,0,1360,1361,1,0,0,0,1361,1362,3,206,103,0,1362,1364,3,208,
        104,0,1363,1365,3,214,107,0,1364,1363,1,0,0,0,1364,1365,1,0,0,0,
        1365,1401,1,0,0,0,1366,1368,3,226,113,0,1367,1366,1,0,0,0,1367,1368,
        1,0,0,0,1368,1370,1,0,0,0,1369,1371,5,18,0,0,1370,1369,1,0,0,0,1370,
        1371,1,0,0,0,1371,1372,1,0,0,0,1372,1373,5,49,0,0,1373,1375,3,208,
        104,0,1374,1376,3,214,107,0,1375,1374,1,0,0,0,1375,1376,1,0,0,0,
        1376,1382,1,0,0,0,1377,1379,5,141,0,0,1378,1380,3,226,113,0,1379,
        1378,1,0,0,0,1379,1380,1,0,0,0,1380,1381,1,0,0,0,1381,1383,3,76,
        38,0,1382,1377,1,0,0,0,1382,1383,1,0,0,0,1383,1401,1,0,0,0,1384,
        1386,3,226,113,0,1385,1384,1,0,0,0,1385,1386,1,0,0,0,1386,1387,1,
        0,0,0,1387,1388,5,18,0,0,1388,1389,5,75,0,0,1389,1391,3,208,104,
        0,1390,1392,3,214,107,0,1391,1390,1,0,0,0,1391,1392,1,0,0,0,1392,
        1398,1,0,0,0,1393,1395,5,141,0,0,1394,1396,3,226,113,0,1395,1394,
        1,0,0,0,1395,1396,1,0,0,0,1396,1397,1,0,0,0,1397,1399,3,76,38,0,
        1398,1393,1,0,0,0,1398,1399,1,0,0,0,1399,1401,1,0,0,0,1400,1356,
        1,0,0,0,1400,1367,1,0,0,0,1400,1385,1,0,0,0,1401,205,1,0,0,0,1402,
        1403,7,7,0,0,1403,207,1,0,0,0,1404,1406,3,330,165,0,1405,1407,3,
        120,60,0,1406,1405,1,0,0,0,1406,1407,1,0,0,0,1407,1413,1,0,0,0,1408,
        1409,5,156,0,0,1409,1411,3,330,165,0,1410,1412,3,120,60,0,1411,1410,
        1,0,0,0,1411,1412,1,0,0,0,1412,1414,1,0,0,0,1413,1408,1,0,0,0,1413,
        1414,1,0,0,0,1414,1415,1,0,0,0,1415,1416,5,156,0,0,1416,1418,3,330,
        165,0,1417,1419,3,120,60,0,1418,1417,1,0,0,0,1418,1419,1,0,0,0,1419,
        209,1,0,0,0,1420,1421,3,212,106,0,1421,1425,5,140,0,0,1422,1424,
        3,304,152,0,1423,1422,1,0,0,0,1424,1427,1,0,0,0,1425,1423,1,0,0,
        0,1425,1426,1,0,0,0,1426,1429,1,0,0,0,1427,1425,1,0,0,0,1428,1430,
        3,224,112,0,1429,1428,1,0,0,0,1429,1430,1,0,0,0,1430,211,1,0,0,0,
        1431,1433,3,226,113,0,1432,1431,1,0,0,0,1432,1433,1,0,0,0,1433,1434,
        1,0,0,0,1434,1435,5,86,0,0,1435,1437,3,330,165,0,1436,1438,3,214,
        107,0,1437,1436,1,0,0,0,1437,1438,1,0,0,0,1438,1451,1,0,0,0,1439,
        1441,3,226,113,0,1440,1439,1,0,0,0,1440,1441,1,0,0,0,1441,1442,1,
        0,0,0,1442,1443,5,49,0,0,1443,1445,3,330,165,0,1444,1446,3,214,107,
        0,1445,1444,1,0,0,0,1445,1446,1,0,0,0,1446,1447,1,0,0,0,1447,1448,
        5,141,0,0,1448,1449,3,76,38,0,1449,1451,1,0,0,0,1450,1432,1,0,0,
        0,1450,1440,1,0,0,0,1451,213,1,0,0,0,1452,1454,5,148,0,0,1453,1455,
        3,216,108,0,1454,1453,1,0,0,0,1454,1455,1,0,0,0,1455,1456,1,0,0,
        0,1456,1457,5,149,0,0,1457,215,1,0,0,0,1458,1463,3,218,109,0,1459,
        1460,5,140,0,0,1460,1462,3,218,109,0,1461,1459,1,0,0,0,1462,1465,
        1,0,0,0,1463,1461,1,0,0,0,1463,1464,1,0,0,0,1464,217,1,0,0,0,1465,
        1463,1,0,0,0,1466,1468,3,220,110,0,1467,1466,1,0,0,0,1467,1468,1,
        0,0,0,1468,1469,1,0,0,0,1469,1472,3,336,168,0,1470,1471,5,141,0,
        0,1471,1473,3,76,38,0,1472,1470,1,0,0,0,1472,1473,1,0,0,0,1473,1476,
        1,0,0,0,1474,1475,5,142,0,0,1475,1477,3,232,116,0,1476,1474,1,0,
        0,0,1476,1477,1,0,0,0,1477,219,1,0,0,0,1478,1479,7,8,0,0,1479,221,
        1,0,0,0,1480,1481,3,44,22,0,1481,1482,5,140,0,0,1482,223,1,0,0,0,
        1483,1484,5,48,0,0,1484,1488,5,140,0,0,1485,1487,3,304,152,0,1486,
        1485,1,0,0,0,1487,1490,1,0,0,0,1488,1486,1,0,0,0,1488,1489,1,0,0,
        0,1489,1511,1,0,0,0,1490,1488,1,0,0,0,1491,1498,5,41,0,0,1492,1493,
        5,67,0,0,1493,1497,3,232,116,0,1494,1495,5,56,0,0,1495,1497,3,232,
        116,0,1496,1492,1,0,0,0,1496,1494,1,0,0,0,1497,1500,1,0,0,0,1498,
        1496,1,0,0,0,1498,1499,1,0,0,0,1499,1504,1,0,0,0,1500,1498,1,0,0,
        0,1501,1503,3,304,152,0,1502,1501,1,0,0,0,1503,1506,1,0,0,0,1504,
        1502,1,0,0,0,1504,1505,1,0,0,0,1505,1511,1,0,0,0,1506,1504,1,0,0,
        0,1507,1508,3,44,22,0,1508,1509,5,140,0,0,1509,1511,1,0,0,0,1510,
        1483,1,0,0,0,1510,1491,1,0,0,0,1510,1507,1,0,0,0,1511,225,1,0,0,
        0,1512,1513,5,1,0,0,1513,227,1,0,0,0,1514,1516,3,230,115,0,1515,
        1514,1,0,0,0,1516,1519,1,0,0,0,1517,1515,1,0,0,0,1517,1518,1,0,0,
        0,1518,229,1,0,0,0,1519,1517,1,0,0,0,1520,1521,5,150,0,0,1521,1527,
        3,344,172,0,1522,1524,5,148,0,0,1523,1525,3,248,124,0,1524,1523,
        1,0,0,0,1524,1525,1,0,0,0,1525,1526,1,0,0,0,1526,1528,5,149,0,0,
        1527,1522,1,0,0,0,1527,1528,1,0,0,0,1528,1529,1,0,0,0,1529,1530,
        5,152,0,0,1530,231,1,0,0,0,1531,1543,3,234,117,0,1532,1536,3,236,
        118,0,1533,1534,3,254,127,0,1534,1535,3,236,118,0,1535,1537,1,0,
        0,0,1536,1533,1,0,0,0,1536,1537,1,0,0,0,1537,1540,1,0,0,0,1538,1539,
        5,142,0,0,1539,1541,3,232,116,0,1540,1538,1,0,0,0,1540,1541,1,0,
        0,0,1541,1543,1,0,0,0,1542,1531,1,0,0,0,1542,1532,1,0,0,0,1543,233,
        1,0,0,0,1544,1546,5,86,0,0,1545,1547,3,214,107,0,1546,1545,1,0,0,
        0,1546,1547,1,0,0,0,1547,1548,1,0,0,0,1548,1558,3,44,22,0,1549,1551,
        5,49,0,0,1550,1552,3,214,107,0,1551,1550,1,0,0,0,1551,1552,1,0,0,
        0,1552,1553,1,0,0,0,1553,1554,5,141,0,0,1554,1555,3,76,38,0,1555,
        1556,3,44,22,0,1556,1558,1,0,0,0,1557,1544,1,0,0,0,1557,1549,1,0,
        0,0,1558,235,1,0,0,0,1559,1565,3,238,119,0,1560,1561,3,252,126,0,
        1561,1562,3,238,119,0,1562,1564,1,0,0,0,1563,1560,1,0,0,0,1564,1567,
        1,0,0,0,1565,1563,1,0,0,0,1565,1566,1,0,0,0,1566,237,1,0,0,0,1567,
        1565,1,0,0,0,1568,1569,5,155,0,0,1569,1602,3,238,119,0,1570,1571,
        5,161,0,0,1571,1602,3,238,119,0,1572,1573,5,71,0,0,1573,1602,3,238,
        119,0,1574,1575,5,134,0,0,1575,1602,3,238,119,0,1576,1577,5,135,
        0,0,1577,1602,3,238,119,0,1578,1579,5,154,0,0,1579,1602,3,330,165,
        0,1580,1602,3,340,170,0,1581,1602,3,342,171,0,1582,1602,7,9,0,0,
        1583,1584,5,148,0,0,1584,1585,3,232,116,0,1585,1587,5,149,0,0,1586,
        1588,5,154,0,0,1587,1586,1,0,0,0,1587,1588,1,0,0,0,1588,1591,1,0,
        0,0,1589,1590,5,156,0,0,1590,1592,3,232,116,0,1591,1589,1,0,0,0,
        1591,1592,1,0,0,0,1592,1602,1,0,0,0,1593,1602,3,240,120,0,1594,1602,
        3,242,121,0,1595,1602,3,244,122,0,1596,1597,3,116,58,0,1597,1598,
        5,148,0,0,1598,1599,3,232,116,0,1599,1600,5,149,0,0,1600,1602,1,
        0,0,0,1601,1568,1,0,0,0,1601,1570,1,0,0,0,1601,1572,1,0,0,0,1601,
        1574,1,0,0,0,1601,1576,1,0,0,0,1601,1578,1,0,0,0,1601,1580,1,0,0,
        0,1601,1581,1,0,0,0,1601,1582,1,0,0,0,1601,1583,1,0,0,0,1601,1593,
        1,0,0,0,1601,1594,1,0,0,0,1601,1595,1,0,0,0,1601,1596,1,0,0,0,1602,
        239,1,0,0,0,1603,1608,5,190,0,0,1604,1605,5,189,0,0,1605,1607,5,
        190,0,0,1606,1604,1,0,0,0,1607,1610,1,0,0,0,1608,1606,1,0,0,0,1608,
        1609,1,0,0,0,1609,1612,1,0,0,0,1610,1608,1,0,0,0,1611,1613,5,189,
        0,0,1612,1611,1,0,0,0,1612,1613,1,0,0,0,1613,1626,1,0,0,0,1614,1619,
        5,189,0,0,1615,1616,5,190,0,0,1616,1618,5,189,0,0,1617,1615,1,0,
        0,0,1618,1621,1,0,0,0,1619,1617,1,0,0,0,1619,1620,1,0,0,0,1620,1623,
        1,0,0,0,1621,1619,1,0,0,0,1622,1624,5,190,0,0,1623,1622,1,0,0,0,
        1623,1624,1,0,0,0,1624,1626,1,0,0,0,1625,1603,1,0,0,0,1625,1614,
        1,0,0,0,1626,241,1,0,0,0,1627,1636,5,150,0,0,1628,1633,3,232,116,
        0,1629,1630,7,10,0,0,1630,1632,3,232,116,0,1631,1629,1,0,0,0,1632,
        1635,1,0,0,0,1633,1631,1,0,0,0,1633,1634,1,0,0,0,1634,1637,1,0,0,
        0,1635,1633,1,0,0,0,1636,1628,1,0,0,0,1636,1637,1,0,0,0,1637,1638,
        1,0,0,0,1638,1639,5,152,0,0,1639,243,1,0,0,0,1640,1648,5,57,0,0,
        1641,1648,3,116,58,0,1642,1644,3,246,123,0,1643,1642,1,0,0,0,1644,
        1645,1,0,0,0,1645,1643,1,0,0,0,1645,1646,1,0,0,0,1646,1648,1,0,0,
        0,1647,1640,1,0,0,0,1647,1641,1,0,0,0,1647,1643,1,0,0,0,1648,245,
        1,0,0,0,1649,1686,5,154,0,0,1650,1651,7,11,0,0,1651,1686,3,330,165,
        0,1652,1653,5,144,0,0,1653,1658,3,118,59,0,1654,1655,5,139,0,0,1655,
        1657,3,118,59,0,1656,1654,1,0,0,0,1657,1660,1,0,0,0,1658,1656,1,
        0,0,0,1658,1659,1,0,0,0,1659,1661,1,0,0,0,1660,1658,1,0,0,0,1661,
        1662,5,147,0,0,1662,1686,1,0,0,0,1663,1664,5,150,0,0,1664,1665,3,
        248,124,0,1665,1666,5,152,0,0,1666,1686,1,0,0,0,1667,1682,5,148,
        0,0,1668,1670,3,232,116,0,1669,1671,3,250,125,0,1670,1669,1,0,0,
        0,1670,1671,1,0,0,0,1671,1679,1,0,0,0,1672,1673,5,139,0,0,1673,1675,
        3,232,116,0,1674,1676,3,250,125,0,1675,1674,1,0,0,0,1675,1676,1,
        0,0,0,1676,1678,1,0,0,0,1677,1672,1,0,0,0,1678,1681,1,0,0,0,1679,
        1677,1,0,0,0,1679,1680,1,0,0,0,1680,1683,1,0,0,0,1681,1679,1,0,0,
        0,1682,1668,1,0,0,0,1682,1683,1,0,0,0,1683,1684,1,0,0,0,1684,1686,
        5,149,0,0,1685,1649,1,0,0,0,1685,1650,1,0,0,0,1685,1652,1,0,0,0,
        1685,1663,1,0,0,0,1685,1667,1,0,0,0,1686,247,1,0,0,0,1687,1692,3,
        232,116,0,1688,1689,5,139,0,0,1689,1691,3,232,116,0,1690,1688,1,
        0,0,0,1691,1694,1,0,0,0,1692,1690,1,0,0,0,1692,1693,1,0,0,0,1693,
        249,1,0,0,0,1694,1692,1,0,0,0,1695,1696,5,141,0,0,1696,1699,3,232,
        116,0,1697,1698,5,141,0,0,1698,1700,3,232,116,0,1699,1697,1,0,0,
        0,1699,1700,1,0,0,0,1700,251,1,0,0,0,1701,1702,7,12,0,0,1702,253,
        1,0,0,0,1703,1704,7,13,0,0,1704,255,1,0,0,0,1705,1721,3,258,129,
        0,1706,1721,3,260,130,0,1707,1721,3,266,133,0,1708,1721,3,268,134,
        0,1709,1721,3,270,135,0,1710,1721,3,272,136,0,1711,1721,3,288,144,
        0,1712,1721,3,298,149,0,1713,1721,3,300,150,0,1714,1721,3,276,138,
        0,1715,1716,3,338,169,0,1716,1717,5,141,0,0,1717,1718,3,256,128,
        0,1718,1721,1,0,0,0,1719,1721,3,280,140,0,1720,1705,1,0,0,0,1720,
        1706,1,0,0,0,1720,1707,1,0,0,0,1720,1708,1,0,0,0,1720,1709,1,0,0,
        0,1720,1710,1,0,0,0,1720,1711,1,0,0,0,1720,1712,1,0,0,0,1720,1713,
        1,0,0,0,1720,1714,1,0,0,0,1720,1715,1,0,0,0,1720,1719,1,0,0,0,1721,
        257,1,0,0,0,1722,1723,5,52,0,0,1723,1724,3,232,116,0,1724,1725,5,
        114,0,0,1725,1728,3,256,128,0,1726,1727,5,34,0,0,1727,1729,3,256,
        128,0,1728,1726,1,0,0,0,1728,1729,1,0,0,0,1729,259,1,0,0,0,1730,
        1731,5,16,0,0,1731,1732,3,232,116,0,1732,1736,5,73,0,0,1733,1735,
        3,262,131,0,1734,1733,1,0,0,0,1735,1738,1,0,0,0,1736,1734,1,0,0,
        0,1736,1737,1,0,0,0,1737,1744,1,0,0,0,1738,1736,1,0,0,0,1739,1740,
        5,34,0,0,1740,1742,3,278,139,0,1741,1743,5,140,0,0,1742,1741,1,0,
        0,0,1742,1743,1,0,0,0,1743,1745,1,0,0,0,1744,1739,1,0,0,0,1744,1745,
        1,0,0,0,1745,1746,1,0,0,0,1746,1747,5,35,0,0,1747,261,1,0,0,0,1748,
        1753,3,264,132,0,1749,1750,5,139,0,0,1750,1752,3,264,132,0,1751,
        1749,1,0,0,0,1752,1755,1,0,0,0,1753,1751,1,0,0,0,1753,1754,1,0,0,
        0,1754,1756,1,0,0,0,1755,1753,1,0,0,0,1756,1757,5,141,0,0,1757,1759,
        3,256,128,0,1758,1760,5,140,0,0,1759,1758,1,0,0,0,1759,1760,1,0,
        0,0,1760,263,1,0,0,0,1761,1764,3,232,116,0,1762,1763,5,157,0,0,1763,
        1765,3,232,116,0,1764,1762,1,0,0,0,1764,1765,1,0,0,0,1765,265,1,
        0,0,0,1766,1768,5,100,0,0,1767,1769,3,278,139,0,1768,1767,1,0,0,
        0,1768,1769,1,0,0,0,1769,1770,1,0,0,0,1770,1771,5,121,0,0,1771,1772,
        3,232,116,0,1772,267,1,0,0,0,1773,1774,5,127,0,0,1774,1775,3,232,
        116,0,1775,1776,5,29,0,0,1776,1777,3,256,128,0,1777,269,1,0,0,0,
        1778,1779,5,47,0,0,1779,1780,3,244,122,0,1780,1781,5,138,0,0,1781,
        1782,3,232,116,0,1782,1783,5,116,0,0,1783,1784,3,232,116,0,1784,
        1785,5,29,0,0,1785,1786,3,256,128,0,1786,1804,1,0,0,0,1787,1788,
        5,47,0,0,1788,1789,3,244,122,0,1789,1790,5,138,0,0,1790,1791,3,232,
        116,0,1791,1792,5,30,0,0,1792,1793,3,232,116,0,1793,1794,5,29,0,
        0,1794,1795,3,256,128,0,1795,1804,1,0,0,0,1796,1797,5,47,0,0,1797,
        1798,3,244,122,0,1798,1799,5,55,0,0,1799,1800,3,232,116,0,1800,1801,
        5,29,0,0,1801,1802,3,256,128,0,1802,1804,1,0,0,0,1803,1778,1,0,0,
        0,1803,1787,1,0,0,0,1803,1796,1,0,0,0,1804,271,1,0,0,0,1805,1806,
        5,128,0,0,1806,1807,3,274,137,0,1807,1808,5,29,0,0,1808,1809,3,256,
        128,0,1809,273,1,0,0,0,1810,1811,3,244,122,0,1811,1812,5,8,0,0,1812,
        1813,3,244,122,0,1813,1823,1,0,0,0,1814,1819,3,244,122,0,1815,1816,
        5,139,0,0,1816,1818,3,244,122,0,1817,1815,1,0,0,0,1818,1821,1,0,
        0,0,1819,1817,1,0,0,0,1819,1820,1,0,0,0,1820,1823,1,0,0,0,1821,1819,
        1,0,0,0,1822,1810,1,0,0,0,1822,1814,1,0,0,0,1823,275,1,0,0,0,1824,
        1826,5,14,0,0,1825,1827,3,278,139,0,1826,1825,1,0,0,0,1826,1827,
        1,0,0,0,1827,1828,1,0,0,0,1828,1829,5,35,0,0,1829,277,1,0,0,0,1830,
        1837,3,256,128,0,1831,1833,5,140,0,0,1832,1834,3,256,128,0,1833,
        1832,1,0,0,0,1833,1834,1,0,0,0,1834,1836,1,0,0,0,1835,1831,1,0,0,
        0,1836,1839,1,0,0,0,1837,1835,1,0,0,0,1837,1838,1,0,0,0,1838,279,
        1,0,0,0,1839,1837,1,0,0,0,1840,1841,3,244,122,0,1841,1842,5,138,
        0,0,1842,1843,3,232,116,0,1843,1847,1,0,0,0,1844,1847,3,244,122,
        0,1845,1847,3,282,141,0,1846,1840,1,0,0,0,1846,1844,1,0,0,0,1846,
        1845,1,0,0,0,1847,281,1,0,0,0,1848,1849,5,50,0,0,1849,1859,3,338,
        169,0,1850,1855,5,37,0,0,1851,1852,5,148,0,0,1852,1853,3,232,116,
        0,1853,1854,5,149,0,0,1854,1856,1,0,0,0,1855,1851,1,0,0,0,1855,1856,
        1,0,0,0,1856,1859,1,0,0,0,1857,1859,7,14,0,0,1858,1848,1,0,0,0,1858,
        1850,1,0,0,0,1858,1857,1,0,0,0,1859,283,1,0,0,0,1860,1861,5,148,
        0,0,1861,1866,3,286,143,0,1862,1863,5,140,0,0,1863,1865,3,286,143,
        0,1864,1862,1,0,0,0,1865,1868,1,0,0,0,1866,1864,1,0,0,0,1866,1867,
        1,0,0,0,1867,1869,1,0,0,0,1868,1866,1,0,0,0,1869,1870,5,149,0,0,
        1870,1884,1,0,0,0,1871,1872,5,148,0,0,1872,1877,3,284,142,0,1873,
        1874,5,139,0,0,1874,1876,3,284,142,0,1875,1873,1,0,0,0,1876,1879,
        1,0,0,0,1877,1875,1,0,0,0,1877,1878,1,0,0,0,1878,1880,1,0,0,0,1879,
        1877,1,0,0,0,1880,1881,5,149,0,0,1881,1884,1,0,0,0,1882,1884,3,232,
        116,0,1883,1860,1,0,0,0,1883,1871,1,0,0,0,1883,1882,1,0,0,0,1884,
        285,1,0,0,0,1885,1886,3,330,165,0,1886,1887,5,141,0,0,1887,1888,
        3,284,142,0,1888,287,1,0,0,0,1889,1891,5,117,0,0,1890,1892,3,278,
        139,0,1891,1890,1,0,0,0,1891,1892,1,0,0,0,1892,1893,1,0,0,0,1893,
        1894,5,36,0,0,1894,1895,3,290,145,0,1895,1896,5,35,0,0,1896,1907,
        1,0,0,0,1897,1899,5,117,0,0,1898,1900,3,278,139,0,1899,1898,1,0,
        0,0,1899,1900,1,0,0,0,1900,1901,1,0,0,0,1901,1903,5,46,0,0,1902,
        1904,3,278,139,0,1903,1902,1,0,0,0,1903,1904,1,0,0,0,1904,1905,1,
        0,0,0,1905,1907,5,35,0,0,1906,1889,1,0,0,0,1906,1897,1,0,0,0,1907,
        289,1,0,0,0,1908,1910,3,292,146,0,1909,1908,1,0,0,0,1910,1913,1,
        0,0,0,1911,1909,1,0,0,0,1911,1912,1,0,0,0,1912,1916,1,0,0,0,1913,
        1911,1,0,0,0,1914,1915,5,34,0,0,1915,1917,3,278,139,0,1916,1914,
        1,0,0,0,1916,1917,1,0,0,0,1917,1920,1,0,0,0,1918,1920,3,278,139,
        0,1919,1911,1,0,0,0,1919,1918,1,0,0,0,1920,291,1,0,0,0,1921,1923,
        5,74,0,0,1922,1924,3,294,147,0,1923,1922,1,0,0,0,1923,1924,1,0,0,
        0,1924,1925,1,0,0,0,1925,1926,3,116,58,0,1926,1927,5,29,0,0,1927,
        1928,3,296,148,0,1928,293,1,0,0,0,1929,1930,3,330,165,0,1930,1931,
        5,141,0,0,1931,295,1,0,0,0,1932,1934,3,256,128,0,1933,1935,5,140,
        0,0,1934,1933,1,0,0,0,1934,1935,1,0,0,0,1935,1938,1,0,0,0,1936,1938,
        5,140,0,0,1937,1932,1,0,0,0,1937,1936,1,0,0,0,1938,297,1,0,0,0,1939,
        1941,5,92,0,0,1940,1942,3,244,122,0,1941,1940,1,0,0,0,1941,1942,
        1,0,0,0,1942,1945,1,0,0,0,1943,1944,5,12,0,0,1944,1946,3,244,122,
        0,1945,1943,1,0,0,0,1945,1946,1,0,0,0,1946,299,1,0,0,0,1947,1951,
        5,9,0,0,1948,1950,8,15,0,0,1949,1948,1,0,0,0,1950,1953,1,0,0,0,1951,
        1949,1,0,0,0,1951,1952,1,0,0,0,1952,1954,1,0,0,0,1953,1951,1,0,0,
        0,1954,1955,5,35,0,0,1955,301,1,0,0,0,1956,1968,3,306,153,0,1957,
        1968,3,308,154,0,1958,1968,3,310,155,0,1959,1968,3,312,156,0,1960,
        1968,3,314,157,0,1961,1968,3,316,158,0,1962,1963,3,322,161,0,1963,
        1964,5,140,0,0,1964,1968,1,0,0,0,1965,1968,3,320,160,0,1966,1968,
        3,328,164,0,1967,1956,1,0,0,0,1967,1957,1,0,0,0,1967,1958,1,0,0,
        0,1967,1959,1,0,0,0,1967,1960,1,0,0,0,1967,1961,1,0,0,0,1967,1962,
        1,0,0,0,1967,1965,1,0,0,0,1967,1966,1,0,0,0,1968,303,1,0,0,0,1969,
        1983,3,308,154,0,1970,1983,3,314,157,0,1971,1983,3,316,158,0,1972,
        1983,3,320,160,0,1973,1974,3,322,161,0,1974,1975,5,140,0,0,1975,
        1983,1,0,0,0,1976,1978,3,318,159,0,1977,1976,1,0,0,0,1977,1978,1,
        0,0,0,1978,1979,1,0,0,0,1979,1983,3,324,162,0,1980,1981,5,120,0,
        0,1981,1983,5,140,0,0,1982,1969,1,0,0,0,1982,1970,1,0,0,0,1982,1971,
        1,0,0,0,1982,1972,1,0,0,0,1982,1973,1,0,0,0,1982,1977,1,0,0,0,1982,
        1980,1,0,0,0,1983,305,1,0,0,0,1984,1985,5,98,0,0,1985,1986,5,140,
        0,0,1986,307,1,0,0,0,1987,1989,5,78,0,0,1988,1990,5,140,0,0,1989,
        1988,1,0,0,0,1989,1990,1,0,0,0,1990,309,1,0,0,0,1991,1992,5,65,0,
        0,1992,1993,3,232,116,0,1993,1994,5,140,0,0,1994,2004,1,0,0,0,1995,
        1996,5,109,0,0,1996,2004,5,140,0,0,1997,1998,5,33,0,0,1998,2004,
        5,140,0,0,1999,2000,5,79,0,0,2000,2004,5,140,0,0,2001,2002,5,126,
        0,0,2002,2004,5,140,0,0,2003,1991,1,0,0,0,2003,1995,1,0,0,0,2003,
        1997,1,0,0,0,2003,1999,1,0,0,0,2003,2001,1,0,0,0,2004,311,1,0,0,
        0,2005,2006,5,3,0,0,2006,2010,5,140,0,0,2007,2008,5,44,0,0,2008,
        2010,5,140,0,0,2009,2005,1,0,0,0,2009,2007,1,0,0,0,2010,313,1,0,
        0,0,2011,2012,5,59,0,0,2012,2016,5,140,0,0,2013,2014,5,10,0,0,2014,
        2016,5,140,0,0,2015,2011,1,0,0,0,2015,2013,1,0,0,0,2016,315,1,0,
        0,0,2017,2018,5,17,0,0,2018,2030,5,140,0,0,2019,2020,5,82,0,0,2020,
        2030,5,140,0,0,2021,2022,5,97,0,0,2022,2030,5,140,0,0,2023,2024,
        5,104,0,0,2024,2030,5,140,0,0,2025,2026,5,110,0,0,2026,2030,5,140,
        0,0,2027,2028,5,39,0,0,2028,2030,5,140,0,0,2029,2017,1,0,0,0,2029,
        2019,1,0,0,0,2029,2021,1,0,0,0,2029,2023,1,0,0,0,2029,2025,1,0,0,
        0,2029,2027,1,0,0,0,2030,317,1,0,0,0,2031,2032,7,16,0,0,2032,319,
        1,0,0,0,2033,2034,5,42,0,0,2034,2040,5,140,0,0,2035,2036,5,64,0,
        0,2036,2040,5,140,0,0,2037,2038,5,68,0,0,2038,2040,5,140,0,0,2039,
        2033,1,0,0,0,2039,2035,1,0,0,0,2039,2037,1,0,0,0,2040,321,1,0,0,
        0,2041,2043,5,24,0,0,2042,2044,3,240,120,0,2043,2042,1,0,0,0,2043,
        2044,1,0,0,0,2044,2047,1,0,0,0,2045,2047,7,17,0,0,2046,2041,1,0,
        0,0,2046,2045,1,0,0,0,2047,323,1,0,0,0,2048,2049,5,124,0,0,2049,
        2063,5,140,0,0,2050,2051,5,41,0,0,2051,2063,5,140,0,0,2052,2053,
        5,41,0,0,2053,2057,3,284,142,0,2054,2056,3,326,163,0,2055,2054,1,
        0,0,0,2056,2059,1,0,0,0,2057,2055,1,0,0,0,2057,2058,1,0,0,0,2058,
        2060,1,0,0,0,2059,2057,1,0,0,0,2060,2061,5,140,0,0,2061,2063,1,0,
        0,0,2062,2048,1,0,0,0,2062,2050,1,0,0,0,2062,2052,1,0,0,0,2063,325,
        1,0,0,0,2064,2065,5,67,0,0,2065,2069,3,284,142,0,2066,2067,5,56,
        0,0,2067,2069,3,284,142,0,2068,2064,1,0,0,0,2068,2066,1,0,0,0,2069,
        327,1,0,0,0,2070,2071,5,26,0,0,2071,2072,3,232,116,0,2072,2073,5,
        140,0,0,2073,329,1,0,0,0,2074,2079,5,183,0,0,2075,2076,5,160,0,0,
        2076,2079,5,183,0,0,2077,2079,3,332,166,0,2078,2074,1,0,0,0,2078,
        2075,1,0,0,0,2078,2077,1,0,0,0,2079,331,1,0,0,0,2080,2084,7,18,0,
        0,2081,2084,7,19,0,0,2082,2084,7,20,0,0,2083,2080,1,0,0,0,2083,2081,
        1,0,0,0,2083,2082,1,0,0,0,2084,333,1,0,0,0,2085,2090,3,330,165,0,
        2086,2087,5,139,0,0,2087,2089,3,330,165,0,2088,2086,1,0,0,0,2089,
        2092,1,0,0,0,2090,2088,1,0,0,0,2090,2091,1,0,0,0,2091,335,1,0,0,
        0,2092,2090,1,0,0,0,2093,2098,3,330,165,0,2094,2095,5,139,0,0,2095,
        2097,3,330,165,0,2096,2094,1,0,0,0,2097,2100,1,0,0,0,2098,2096,1,
        0,0,0,2098,2099,1,0,0,0,2099,337,1,0,0,0,2100,2098,1,0,0,0,2101,
        2104,7,21,0,0,2102,2104,3,332,166,0,2103,2101,1,0,0,0,2103,2102,
        1,0,0,0,2104,339,1,0,0,0,2105,2106,7,22,0,0,2106,341,1,0,0,0,2107,
        2108,5,185,0,0,2108,343,1,0,0,0,2109,2110,3,346,173,0,2110,2111,
        5,156,0,0,2111,2113,1,0,0,0,2112,2109,1,0,0,0,2112,2113,1,0,0,0,
        2113,2114,1,0,0,0,2114,2115,3,348,174,0,2115,345,1,0,0,0,2116,2121,
        3,330,165,0,2117,2118,5,156,0,0,2118,2120,3,330,165,0,2119,2117,
        1,0,0,0,2120,2123,1,0,0,0,2121,2119,1,0,0,0,2121,2122,1,0,0,0,2122,
        347,1,0,0,0,2123,2121,1,0,0,0,2124,2125,3,330,165,0,2125,2126,5,
        156,0,0,2126,2128,1,0,0,0,2127,2124,1,0,0,0,2128,2131,1,0,0,0,2129,
        2127,1,0,0,0,2129,2130,1,0,0,0,2130,2132,1,0,0,0,2131,2129,1,0,0,
        0,2132,2133,3,330,165,0,2133,349,1,0,0,0,285,354,357,360,368,378,
        381,387,397,405,425,432,437,442,447,455,460,482,490,497,505,509,
        513,523,532,540,549,555,560,567,577,581,589,599,605,611,616,627,
        638,645,648,652,656,659,667,671,674,677,685,690,694,698,702,712,
        716,725,730,737,740,744,746,755,763,766,774,778,783,785,792,797,
        803,809,813,822,826,834,845,857,860,864,872,884,892,895,900,906,
        908,918,930,933,938,945,954,957,961,964,969,976,978,988,991,995,
        1000,1008,1012,1018,1024,1033,1046,1049,1057,1061,1069,1073,1079,
        1085,1089,1091,1099,1107,1119,1127,1130,1133,1138,1141,1147,1151,
        1154,1159,1162,1166,1173,1177,1180,1185,1188,1192,1197,1200,1209,
        1213,1216,1221,1225,1228,1233,1240,1250,1261,1275,1283,1291,1293,
        1300,1303,1307,1311,1316,1320,1327,1333,1339,1342,1349,1353,1356,
        1359,1364,1367,1370,1375,1379,1382,1385,1391,1395,1398,1400,1406,
        1411,1413,1418,1425,1429,1432,1437,1440,1445,1450,1454,1463,1467,
        1472,1476,1488,1496,1498,1504,1510,1517,1524,1527,1536,1540,1542,
        1546,1551,1557,1565,1587,1591,1601,1608,1612,1619,1623,1625,1633,
        1636,1645,1647,1658,1670,1675,1679,1682,1685,1692,1699,1720,1728,
        1736,1742,1744,1753,1759,1764,1768,1803,1819,1822,1826,1833,1837,
        1846,1855,1858,1866,1877,1883,1891,1899,1903,1906,1911,1916,1919,
        1923,1934,1937,1941,1945,1951,1967,1977,1982,1989,2003,2009,2015,
        2029,2039,2043,2046,2057,2062,2068,2078,2083,2090,2098,2103,2112,
        2121,2129
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!delphiParser.__ATN) {
            delphiParser.__ATN = new antlr.ATNDeserializer().deserialize(delphiParser._serializedATN);
        }

        return delphiParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(delphiParser.literalNames, delphiParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return delphiParser.vocabulary;
    }

    private static readonly decisionsToDFA = delphiParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class FileContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public program(): ProgramContext | null {
        return this.getRuleContext(0, ProgramContext);
    }
    public library(): LibraryContext | null {
        return this.getRuleContext(0, LibraryContext);
    }
    public unit(): UnitContext | null {
        return this.getRuleContext(0, UnitContext);
    }
    public packageE(): PackageEContext | null {
        return this.getRuleContext(0, PackageEContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_file;
    }
}


export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(delphiParser.DOT, 0)!;
    }
    public programHead(): ProgramHeadContext | null {
        return this.getRuleContext(0, ProgramHeadContext);
    }
    public usesFileClause(): UsesFileClauseContext | null {
        return this.getRuleContext(0, UsesFileClauseContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_program;
    }
}


export class ProgramHeadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROGRAM(): antlr.TerminalNode {
        return this.getToken(delphiParser.PROGRAM, 0)!;
    }
    public namespaceName(): NamespaceNameContext {
        return this.getRuleContext(0, NamespaceNameContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public programParmSeq(): ProgramParmSeqContext | null {
        return this.getRuleContext(0, ProgramParmSeqContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_programHead;
    }
}


export class ProgramParmSeqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(delphiParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(delphiParser.RPAREN, 0)!;
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_programParmSeq;
    }
}


export class LibraryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public libraryHead(): LibraryHeadContext {
        return this.getRuleContext(0, LibraryHeadContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(delphiParser.DOT, 0)!;
    }
    public usesFileClause(): UsesFileClauseContext | null {
        return this.getRuleContext(0, UsesFileClauseContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_library;
    }
}


export class LibraryHeadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIBRARY(): antlr.TerminalNode {
        return this.getToken(delphiParser.LIBRARY, 0)!;
    }
    public namespaceName(): NamespaceNameContext {
        return this.getRuleContext(0, NamespaceNameContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public hintingDirective(): HintingDirectiveContext[];
    public hintingDirective(i: number): HintingDirectiveContext | null;
    public hintingDirective(i?: number): HintingDirectiveContext[] | HintingDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HintingDirectiveContext);
        }

        return this.getRuleContext(i, HintingDirectiveContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_libraryHead;
    }
}


export class PackageEContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public packageHead(): PackageHeadContext {
        return this.getRuleContext(0, PackageHeadContext)!;
    }
    public requiresClause(): RequiresClauseContext {
        return this.getRuleContext(0, RequiresClauseContext)!;
    }
    public END(): antlr.TerminalNode {
        return this.getToken(delphiParser.END, 0)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(delphiParser.DOT, 0)!;
    }
    public containsClause(): ContainsClauseContext | null {
        return this.getRuleContext(0, ContainsClauseContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_packageE;
    }
}


export class PackageHeadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PACKAGE(): antlr.TerminalNode {
        return this.getToken(delphiParser.PACKAGE, 0)!;
    }
    public namespaceName(): NamespaceNameContext {
        return this.getRuleContext(0, NamespaceNameContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_packageHead;
    }
}


export class UnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unitHead(): UnitHeadContext {
        return this.getRuleContext(0, UnitHeadContext)!;
    }
    public unitInterface(): UnitInterfaceContext {
        return this.getRuleContext(0, UnitInterfaceContext)!;
    }
    public unitImplementation(): UnitImplementationContext {
        return this.getRuleContext(0, UnitImplementationContext)!;
    }
    public unitBlock(): UnitBlockContext {
        return this.getRuleContext(0, UnitBlockContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(delphiParser.DOT, 0)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_unit;
    }
}


export class UnitHeadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNIT(): antlr.TerminalNode {
        return this.getToken(delphiParser.UNIT, 0)!;
    }
    public namespaceName(): NamespaceNameContext {
        return this.getRuleContext(0, NamespaceNameContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public hintingDirective(): HintingDirectiveContext[];
    public hintingDirective(i: number): HintingDirectiveContext | null;
    public hintingDirective(i?: number): HintingDirectiveContext[] | HintingDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HintingDirectiveContext);
        }

        return this.getRuleContext(i, HintingDirectiveContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_unitHead;
    }
}


export class UnitInterfaceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTERFACE(): antlr.TerminalNode {
        return this.getToken(delphiParser.INTERFACE, 0)!;
    }
    public usesClause(): UsesClauseContext | null {
        return this.getRuleContext(0, UsesClauseContext);
    }
    public interfaceDecl(): InterfaceDeclContext[];
    public interfaceDecl(i: number): InterfaceDeclContext | null;
    public interfaceDecl(i?: number): InterfaceDeclContext[] | InterfaceDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceDeclContext);
        }

        return this.getRuleContext(i, InterfaceDeclContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_unitInterface;
    }
}


export class UnitImplementationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IMPLEMENTATION(): antlr.TerminalNode {
        return this.getToken(delphiParser.IMPLEMENTATION, 0)!;
    }
    public usesClause(): UsesClauseContext | null {
        return this.getRuleContext(0, UsesClauseContext);
    }
    public declSection(): DeclSectionContext[];
    public declSection(i: number): DeclSectionContext | null;
    public declSection(i?: number): DeclSectionContext[] | DeclSectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DeclSectionContext);
        }

        return this.getRuleContext(i, DeclSectionContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_unitImplementation;
    }
}


export class UnitBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unitInitialization(): UnitInitializationContext | null {
        return this.getRuleContext(0, UnitInitializationContext);
    }
    public END(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.END, 0);
    }
    public compoundStatement(): CompoundStatementContext | null {
        return this.getRuleContext(0, CompoundStatementContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_unitBlock;
    }
}


export class UnitInitializationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INITIALIZATION(): antlr.TerminalNode {
        return this.getToken(delphiParser.INITIALIZATION, 0)!;
    }
    public statementList(): StatementListContext {
        return this.getRuleContext(0, StatementListContext)!;
    }
    public unitFinalization(): UnitFinalizationContext | null {
        return this.getRuleContext(0, UnitFinalizationContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_unitInitialization;
    }
}


export class UnitFinalizationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FINALIZATION(): antlr.TerminalNode {
        return this.getToken(delphiParser.FINALIZATION, 0)!;
    }
    public statementList(): StatementListContext {
        return this.getRuleContext(0, StatementListContext)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_unitFinalization;
    }
}


export class ContainsClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONTAINS(): antlr.TerminalNode {
        return this.getToken(delphiParser.CONTAINS, 0)!;
    }
    public namespaceFileNameList(): NamespaceFileNameListContext {
        return this.getRuleContext(0, NamespaceFileNameListContext)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_containsClause;
    }
}


export class RequiresClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REQUIRES(): antlr.TerminalNode {
        return this.getToken(delphiParser.REQUIRES, 0)!;
    }
    public namespaceNameList(): NamespaceNameListContext {
        return this.getRuleContext(0, NamespaceNameListContext)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_requiresClause;
    }
}


export class UsesClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public USES(): antlr.TerminalNode {
        return this.getToken(delphiParser.USES, 0)!;
    }
    public namespaceNameList(): NamespaceNameListContext {
        return this.getRuleContext(0, NamespaceNameListContext)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_usesClause;
    }
}


export class UsesFileClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public USES(): antlr.TerminalNode {
        return this.getToken(delphiParser.USES, 0)!;
    }
    public namespaceFileNameList(): NamespaceFileNameListContext {
        return this.getRuleContext(0, NamespaceFileNameListContext)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_usesFileClause;
    }
}


export class NamespaceFileNameListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namespaceFileName(): NamespaceFileNameContext[];
    public namespaceFileName(i: number): NamespaceFileNameContext | null;
    public namespaceFileName(i?: number): NamespaceFileNameContext[] | NamespaceFileNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamespaceFileNameContext);
        }

        return this.getRuleContext(i, NamespaceFileNameContext);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_namespaceFileNameList;
    }
}


export class NamespaceFileNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namespaceName(): NamespaceNameContext {
        return this.getRuleContext(0, NamespaceNameContext)!;
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.IN, 0);
    }
    public QuotedString(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.QuotedString, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_namespaceFileName;
    }
}


export class NamespaceNameListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namespaceName(): NamespaceNameContext[];
    public namespaceName(i: number): NamespaceNameContext | null;
    public namespaceName(i?: number): NamespaceNameContext[] | NamespaceNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamespaceNameContext);
        }

        return this.getRuleContext(i, NamespaceNameContext);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_namespaceNameList;
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public declSection(): DeclSectionContext[];
    public declSection(i: number): DeclSectionContext | null;
    public declSection(i?: number): DeclSectionContext[] | DeclSectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DeclSectionContext);
        }

        return this.getRuleContext(i, DeclSectionContext);
    }
    public blockBody(): BlockBodyContext | null {
        return this.getRuleContext(0, BlockBodyContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_block;
    }
}


export class BlockBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public compoundStatement(): CompoundStatementContext | null {
        return this.getRuleContext(0, CompoundStatementContext);
    }
    public assemblerStatement(): AssemblerStatementContext | null {
        return this.getRuleContext(0, AssemblerStatementContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_blockBody;
    }
}


export class DeclSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public labelDeclSection(): LabelDeclSectionContext | null {
        return this.getRuleContext(0, LabelDeclSectionContext);
    }
    public constSection(): ConstSectionContext | null {
        return this.getRuleContext(0, ConstSectionContext);
    }
    public typeSection(): TypeSectionContext | null {
        return this.getRuleContext(0, TypeSectionContext);
    }
    public varSection(): VarSectionContext | null {
        return this.getRuleContext(0, VarSectionContext);
    }
    public exportedProcHeading(): ExportedProcHeadingContext | null {
        return this.getRuleContext(0, ExportedProcHeadingContext);
    }
    public methodDecl(): MethodDeclContext | null {
        return this.getRuleContext(0, MethodDeclContext);
    }
    public procDecl(): ProcDeclContext | null {
        return this.getRuleContext(0, ProcDeclContext);
    }
    public exportsSection(): ExportsSectionContext | null {
        return this.getRuleContext(0, ExportsSectionContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_declSection;
    }
}


export class InterfaceDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public procDecl(): ProcDeclContext | null {
        return this.getRuleContext(0, ProcDeclContext);
    }
    public methodDecl(): MethodDeclContext | null {
        return this.getRuleContext(0, MethodDeclContext);
    }
    public typeSection(): TypeSectionContext | null {
        return this.getRuleContext(0, TypeSectionContext);
    }
    public varSection(): VarSectionContext | null {
        return this.getRuleContext(0, VarSectionContext);
    }
    public exportedProcHeading(): ExportedProcHeadingContext | null {
        return this.getRuleContext(0, ExportedProcHeadingContext);
    }
    public exportsSection(): ExportsSectionContext | null {
        return this.getRuleContext(0, ExportsSectionContext);
    }
    public constSection(): ConstSectionContext | null {
        return this.getRuleContext(0, ConstSectionContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_interfaceDecl;
    }
}


export class LabelDeclSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LABEL(): antlr.TerminalNode {
        return this.getToken(delphiParser.LABEL, 0)!;
    }
    public label(): LabelContext[];
    public label(i: number): LabelContext | null;
    public label(i?: number): LabelContext[] | LabelContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LabelContext);
        }

        return this.getRuleContext(i, LabelContext);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_labelDeclSection;
    }
}


export class ConstSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constKey(): ConstKeyContext {
        return this.getRuleContext(0, ConstKeyContext)!;
    }
    public constDeclaration(): ConstDeclarationContext[];
    public constDeclaration(i: number): ConstDeclarationContext | null;
    public constDeclaration(i?: number): ConstDeclarationContext[] | ConstDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConstDeclarationContext);
        }

        return this.getRuleContext(i, ConstDeclarationContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_constSection;
    }
}


export class ConstKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONST(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CONST, 0);
    }
    public RESOURCESTRING(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RESOURCESTRING, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_constKey;
    }
}


export class ConstDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(delphiParser.EQUAL, 0)!;
    }
    public constExpression(): ConstExpressionContext {
        return this.getRuleContext(0, ConstExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public customAttribute(): CustomAttributeContext | null {
        return this.getRuleContext(0, CustomAttributeContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.COLON, 0);
    }
    public typeDecl(): TypeDeclContext | null {
        return this.getRuleContext(0, TypeDeclContext);
    }
    public hintingDirective(): HintingDirectiveContext[];
    public hintingDirective(i: number): HintingDirectiveContext | null;
    public hintingDirective(i?: number): HintingDirectiveContext[] | HintingDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HintingDirectiveContext);
        }

        return this.getRuleContext(i, HintingDirectiveContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_constDeclaration;
    }
}


export class TypeSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(delphiParser.TYPE, 0)!;
    }
    public typeDeclaration(): TypeDeclarationContext[];
    public typeDeclaration(i: number): TypeDeclarationContext | null;
    public typeDeclaration(i?: number): TypeDeclarationContext[] | TypeDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeDeclarationContext);
        }

        return this.getRuleContext(i, TypeDeclarationContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_typeSection;
    }
}


export class TypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public genericTypeIdent(): GenericTypeIdentContext {
        return this.getRuleContext(0, GenericTypeIdentContext)!;
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(delphiParser.EQUAL, 0)!;
    }
    public typeDecl(): TypeDeclContext {
        return this.getRuleContext(0, TypeDeclContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public customAttribute(): CustomAttributeContext | null {
        return this.getRuleContext(0, CustomAttributeContext);
    }
    public hintingDirective(): HintingDirectiveContext[];
    public hintingDirective(i: number): HintingDirectiveContext | null;
    public hintingDirective(i?: number): HintingDirectiveContext[] | HintingDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HintingDirectiveContext);
        }

        return this.getRuleContext(i, HintingDirectiveContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_typeDeclaration;
    }
}


export class VarSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public varKey(): VarKeyContext {
        return this.getRuleContext(0, VarKeyContext)!;
    }
    public varDeclaration(): VarDeclarationContext[];
    public varDeclaration(i: number): VarDeclarationContext | null;
    public varDeclaration(i?: number): VarDeclarationContext[] | VarDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclarationContext);
        }

        return this.getRuleContext(i, VarDeclarationContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_varSection;
    }
}


export class VarKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VAR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.VAR, 0);
    }
    public THREADVAR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.THREADVAR, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_varKey;
    }
}


export class VarDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identListFlat(): IdentListFlatContext {
        return this.getRuleContext(0, IdentListFlatContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(delphiParser.COLON, 0)!;
    }
    public typeDecl(): TypeDeclContext {
        return this.getRuleContext(0, TypeDeclContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public customAttribute(): CustomAttributeContext | null {
        return this.getRuleContext(0, CustomAttributeContext);
    }
    public varValueSpec(): VarValueSpecContext | null {
        return this.getRuleContext(0, VarValueSpecContext);
    }
    public hintingDirective(): HintingDirectiveContext[];
    public hintingDirective(i: number): HintingDirectiveContext | null;
    public hintingDirective(i?: number): HintingDirectiveContext[] | HintingDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HintingDirectiveContext);
        }

        return this.getRuleContext(i, HintingDirectiveContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_varDeclaration;
    }
}


export class VarValueSpecContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABSOLUTE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.ABSOLUTE, 0);
    }
    public ident(): IdentContext | null {
        return this.getRuleContext(0, IdentContext);
    }
    public constExpression(): ConstExpressionContext | null {
        return this.getRuleContext(0, ConstExpressionContext);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EQUAL, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_varValueSpec;
    }
}


export class ExportsSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXPORTS(): antlr.TerminalNode {
        return this.getToken(delphiParser.EXPORTS, 0)!;
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public exportItem(): ExportItemContext[];
    public exportItem(i: number): ExportItemContext | null;
    public exportItem(i?: number): ExportItemContext[] | ExportItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExportItemContext);
        }

        return this.getRuleContext(i, ExportItemContext);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_exportsSection;
    }
}


export class ExportItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RPAREN, 0);
    }
    public INDEX(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.INDEX, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public NAME(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.NAME, 0);
    }
    public RESIDENT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RESIDENT, 0);
    }
    public formalParameterList(): FormalParameterListContext | null {
        return this.getRuleContext(0, FormalParameterListContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_exportItem;
    }
}


export class TypeDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public strucType(): StrucTypeContext | null {
        return this.getRuleContext(0, StrucTypeContext);
    }
    public pointerType(): PointerTypeContext | null {
        return this.getRuleContext(0, PointerTypeContext);
    }
    public stringType(): StringTypeContext | null {
        return this.getRuleContext(0, StringTypeContext);
    }
    public procedureType(): ProcedureTypeContext | null {
        return this.getRuleContext(0, ProcedureTypeContext);
    }
    public variantType(): VariantTypeContext | null {
        return this.getRuleContext(0, VariantTypeContext);
    }
    public typeId(): TypeIdContext | null {
        return this.getRuleContext(0, TypeIdContext);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.TYPE, 0);
    }
    public genericPostfix(): GenericPostfixContext | null {
        return this.getRuleContext(0, GenericPostfixContext);
    }
    public simpleType(): SimpleTypeContext | null {
        return this.getRuleContext(0, SimpleTypeContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_typeDecl;
    }
}


export class StrucTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public strucTypePart(): StrucTypePartContext {
        return this.getRuleContext(0, StrucTypePartContext)!;
    }
    public PACKED(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PACKED, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_strucType;
    }
}


export class StrucTypePartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arrayType(): ArrayTypeContext | null {
        return this.getRuleContext(0, ArrayTypeContext);
    }
    public setType(): SetTypeContext | null {
        return this.getRuleContext(0, SetTypeContext);
    }
    public fileType(): FileTypeContext | null {
        return this.getRuleContext(0, FileTypeContext);
    }
    public classDecl(): ClassDeclContext | null {
        return this.getRuleContext(0, ClassDeclContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_strucTypePart;
    }
}


export class ArrayTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ARRAY(): antlr.TerminalNode {
        return this.getToken(delphiParser.ARRAY, 0)!;
    }
    public OF(): antlr.TerminalNode {
        return this.getToken(delphiParser.OF, 0)!;
    }
    public arraySubType(): ArraySubTypeContext {
        return this.getRuleContext(0, ArraySubTypeContext)!;
    }
    public LBRACK(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LBRACK, 0);
    }
    public RBRACK(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RBRACK, 0);
    }
    public arrayIndex(): ArrayIndexContext[];
    public arrayIndex(i: number): ArrayIndexContext | null;
    public arrayIndex(i?: number): ArrayIndexContext[] | ArrayIndexContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArrayIndexContext);
        }

        return this.getRuleContext(i, ArrayIndexContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_arrayType;
    }
}


export class ArrayIndexContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeId(): TypeIdContext | null {
        return this.getRuleContext(0, TypeIdContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public DOTDOT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DOTDOT, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_arrayIndex;
    }
}


export class ArraySubTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONST(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CONST, 0);
    }
    public typeDecl(): TypeDeclContext | null {
        return this.getRuleContext(0, TypeDeclContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_arraySubType;
    }
}


export class SetTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SET(): antlr.TerminalNode {
        return this.getToken(delphiParser.SET, 0)!;
    }
    public OF(): antlr.TerminalNode {
        return this.getToken(delphiParser.OF, 0)!;
    }
    public typeDecl(): TypeDeclContext {
        return this.getRuleContext(0, TypeDeclContext)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_setType;
    }
}


export class FileTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FILE(): antlr.TerminalNode {
        return this.getToken(delphiParser.FILE, 0)!;
    }
    public OF(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.OF, 0);
    }
    public typeDecl(): TypeDeclContext | null {
        return this.getRuleContext(0, TypeDeclContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_fileType;
    }
}


export class PointerTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public POINTER2(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.POINTER2, 0);
    }
    public typeDecl(): TypeDeclContext | null {
        return this.getRuleContext(0, TypeDeclContext);
    }
    public POINTER(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.POINTER, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_pointerType;
    }
}


export class StringTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.STRING, 0);
    }
    public LBRACK(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LBRACK, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RBRACK(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RBRACK, 0);
    }
    public ANSISTRING(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.ANSISTRING, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.TYPE, 0);
    }
    public codePageNumber(): CodePageNumberContext | null {
        return this.getRuleContext(0, CodePageNumberContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_stringType;
    }
}


export class CodePageNumberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(delphiParser.LPAREN, 0)!;
    }
    public intNum(): IntNumContext {
        return this.getRuleContext(0, IntNumContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(delphiParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_codePageNumber;
    }
}


export class ProcedureTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public methodType(): MethodTypeContext | null {
        return this.getRuleContext(0, MethodTypeContext);
    }
    public simpleProcedureType(): SimpleProcedureTypeContext | null {
        return this.getRuleContext(0, SimpleProcedureTypeContext);
    }
    public procedureReference(): ProcedureReferenceContext | null {
        return this.getRuleContext(0, ProcedureReferenceContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_procedureType;
    }
}


export class MethodTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public procedureTypeHeading(): ProcedureTypeHeadingContext {
        return this.getRuleContext(0, ProcedureTypeHeadingContext)!;
    }
    public OF(): antlr.TerminalNode {
        return this.getToken(delphiParser.OF, 0)!;
    }
    public OBJECT(): antlr.TerminalNode {
        return this.getToken(delphiParser.OBJECT, 0)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_methodType;
    }
}


export class SimpleProcedureTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public procedureTypeHeading(): ProcedureTypeHeadingContext {
        return this.getRuleContext(0, ProcedureTypeHeadingContext)!;
    }
    public callConventionNoSemi(): CallConventionNoSemiContext | null {
        return this.getRuleContext(0, CallConventionNoSemiContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_simpleProcedureType;
    }
}


export class ProcedureReferenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REFERENCE(): antlr.TerminalNode {
        return this.getToken(delphiParser.REFERENCE, 0)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(delphiParser.TO, 0)!;
    }
    public procedureTypeHeading(): ProcedureTypeHeadingContext {
        return this.getRuleContext(0, ProcedureTypeHeadingContext)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_procedureReference;
    }
}


export class ProcedureTypeHeadingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.FUNCTION, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.COLON, 0);
    }
    public typeDecl(): TypeDeclContext | null {
        return this.getRuleContext(0, TypeDeclContext);
    }
    public formalParameterSection(): FormalParameterSectionContext | null {
        return this.getRuleContext(0, FormalParameterSectionContext);
    }
    public customAttribute(): CustomAttributeContext | null {
        return this.getRuleContext(0, CustomAttributeContext);
    }
    public PROCEDURE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PROCEDURE, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_procedureTypeHeading;
    }
}


export class VariantTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VARIANT(): antlr.TerminalNode {
        return this.getToken(delphiParser.VARIANT, 0)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_variantType;
    }
}


export class SimpleTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext | null {
        return this.getRuleContext(0, IdentContext);
    }
    public subRangeType(): SubRangeTypeContext | null {
        return this.getRuleContext(0, SubRangeTypeContext);
    }
    public enumType(): EnumTypeContext | null {
        return this.getRuleContext(0, EnumTypeContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_simpleType;
    }
}


export class SubRangeTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constExpression(): ConstExpressionContext[];
    public constExpression(i: number): ConstExpressionContext | null;
    public constExpression(i?: number): ConstExpressionContext[] | ConstExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConstExpressionContext);
        }

        return this.getRuleContext(i, ConstExpressionContext);
    }
    public DOTDOT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DOTDOT, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_subRangeType;
    }
}


export class EnumTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(delphiParser.LPAREN, 0)!;
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(delphiParser.RPAREN, 0)!;
    }
    public EQUAL(): antlr.TerminalNode[];
    public EQUAL(i: number): antlr.TerminalNode | null;
    public EQUAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.EQUAL);
    	} else {
    		return this.getToken(delphiParser.EQUAL, i);
    	}
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_enumType;
    }
}


export class TypeIdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namespacedQualifiedIdent(): NamespacedQualifiedIdentContext {
        return this.getRuleContext(0, NamespacedQualifiedIdentContext)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_typeId;
    }
}


export class GenericTypeIdentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedIdent(): QualifiedIdentContext {
        return this.getRuleContext(0, QualifiedIdentContext)!;
    }
    public genericDefinition(): GenericDefinitionContext | null {
        return this.getRuleContext(0, GenericDefinitionContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_genericTypeIdent;
    }
}


export class GenericDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simpleGenericDefinition(): SimpleGenericDefinitionContext | null {
        return this.getRuleContext(0, SimpleGenericDefinitionContext);
    }
    public constrainedGenericDefinition(): ConstrainedGenericDefinitionContext | null {
        return this.getRuleContext(0, ConstrainedGenericDefinitionContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_genericDefinition;
    }
}


export class SimpleGenericDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(delphiParser.LT, 0)!;
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(delphiParser.GT, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_simpleGenericDefinition;
    }
}


export class ConstrainedGenericDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(delphiParser.LT, 0)!;
    }
    public constrainedGeneric(): ConstrainedGenericContext[];
    public constrainedGeneric(i: number): ConstrainedGenericContext | null;
    public constrainedGeneric(i?: number): ConstrainedGenericContext[] | ConstrainedGenericContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConstrainedGenericContext);
        }

        return this.getRuleContext(i, ConstrainedGenericContext);
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(delphiParser.GT, 0)!;
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.SEMI);
    	} else {
    		return this.getToken(delphiParser.SEMI, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_constrainedGenericDefinition;
    }
}


export class ConstrainedGenericContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.COLON, 0);
    }
    public genericConstraint(): GenericConstraintContext[];
    public genericConstraint(i: number): GenericConstraintContext | null;
    public genericConstraint(i?: number): GenericConstraintContext[] | GenericConstraintContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GenericConstraintContext);
        }

        return this.getRuleContext(i, GenericConstraintContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_constrainedGeneric;
    }
}


export class GenericConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext | null {
        return this.getRuleContext(0, IdentContext);
    }
    public RECORD(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RECORD, 0);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CLASS, 0);
    }
    public CONSTRUCTOR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CONSTRUCTOR, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_genericConstraint;
    }
}


export class GenericPostfixContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(delphiParser.LT, 0)!;
    }
    public typeDecl(): TypeDeclContext[];
    public typeDecl(i: number): TypeDeclContext | null;
    public typeDecl(i?: number): TypeDeclContext[] | TypeDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeDeclContext);
        }

        return this.getRuleContext(i, TypeDeclContext);
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(delphiParser.GT, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_genericPostfix;
    }
}


export class ClassDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classTypeTypeDecl(): ClassTypeTypeDeclContext | null {
        return this.getRuleContext(0, ClassTypeTypeDeclContext);
    }
    public classTypeDecl(): ClassTypeDeclContext | null {
        return this.getRuleContext(0, ClassTypeDeclContext);
    }
    public classHelperDecl(): ClassHelperDeclContext | null {
        return this.getRuleContext(0, ClassHelperDeclContext);
    }
    public interfaceTypeDecl(): InterfaceTypeDeclContext | null {
        return this.getRuleContext(0, InterfaceTypeDeclContext);
    }
    public objectDecl(): ObjectDeclContext | null {
        return this.getRuleContext(0, ObjectDeclContext);
    }
    public recordDecl(): RecordDeclContext | null {
        return this.getRuleContext(0, RecordDeclContext);
    }
    public recordHelperDecl(): RecordHelperDeclContext | null {
        return this.getRuleContext(0, RecordHelperDeclContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classDecl;
    }
}


export class ClassTypeTypeDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CLASS(): antlr.TerminalNode {
        return this.getToken(delphiParser.CLASS, 0)!;
    }
    public OF(): antlr.TerminalNode {
        return this.getToken(delphiParser.OF, 0)!;
    }
    public typeId(): TypeIdContext {
        return this.getRuleContext(0, TypeIdContext)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classTypeTypeDecl;
    }
}


export class ClassTypeDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CLASS(): antlr.TerminalNode {
        return this.getToken(delphiParser.CLASS, 0)!;
    }
    public END(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.END, 0);
    }
    public classState(): ClassStateContext | null {
        return this.getRuleContext(0, ClassStateContext);
    }
    public classParent(): ClassParentContext | null {
        return this.getRuleContext(0, ClassParentContext);
    }
    public classItem(): ClassItemContext[];
    public classItem(i: number): ClassItemContext | null;
    public classItem(i?: number): ClassItemContext[] | ClassItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassItemContext);
        }

        return this.getRuleContext(i, ClassItemContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classTypeDecl;
    }
}


export class ClassStateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEALED(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEALED, 0);
    }
    public ABSTRACT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.ABSTRACT, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classState;
    }
}


export class ClassParentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(delphiParser.LPAREN, 0)!;
    }
    public genericTypeIdent(): GenericTypeIdentContext[];
    public genericTypeIdent(i: number): GenericTypeIdentContext | null;
    public genericTypeIdent(i?: number): GenericTypeIdentContext[] | GenericTypeIdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GenericTypeIdentContext);
        }

        return this.getRuleContext(i, GenericTypeIdentContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(delphiParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classParent;
    }
}


export class ClassItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public classMethod(): ClassMethodContext | null {
        return this.getRuleContext(0, ClassMethodContext);
    }
    public classField(): ClassFieldContext | null {
        return this.getRuleContext(0, ClassFieldContext);
    }
    public classProperty(): ClassPropertyContext | null {
        return this.getRuleContext(0, ClassPropertyContext);
    }
    public constSection(): ConstSectionContext | null {
        return this.getRuleContext(0, ConstSectionContext);
    }
    public typeSection(): TypeSectionContext | null {
        return this.getRuleContext(0, TypeSectionContext);
    }
    public varSection(): VarSectionContext | null {
        return this.getRuleContext(0, VarSectionContext);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CLASS, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classItem;
    }
}


export class ClassHelperDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CLASS(): antlr.TerminalNode {
        return this.getToken(delphiParser.CLASS, 0)!;
    }
    public HELPER(): antlr.TerminalNode {
        return this.getToken(delphiParser.HELPER, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(delphiParser.FOR, 0)!;
    }
    public typeId(): TypeIdContext {
        return this.getRuleContext(0, TypeIdContext)!;
    }
    public END(): antlr.TerminalNode {
        return this.getToken(delphiParser.END, 0)!;
    }
    public classParent(): ClassParentContext | null {
        return this.getRuleContext(0, ClassParentContext);
    }
    public classHelperItem(): ClassHelperItemContext[];
    public classHelperItem(i: number): ClassHelperItemContext | null;
    public classHelperItem(i?: number): ClassHelperItemContext[] | ClassHelperItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassHelperItemContext);
        }

        return this.getRuleContext(i, ClassHelperItemContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classHelperDecl;
    }
}


export class ClassHelperItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public classMethod(): ClassMethodContext | null {
        return this.getRuleContext(0, ClassMethodContext);
    }
    public classProperty(): ClassPropertyContext | null {
        return this.getRuleContext(0, ClassPropertyContext);
    }
    public varSection(): VarSectionContext | null {
        return this.getRuleContext(0, VarSectionContext);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CLASS, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classHelperItem;
    }
}


export class InterfaceTypeDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public interfaceKey(): InterfaceKeyContext {
        return this.getRuleContext(0, InterfaceKeyContext)!;
    }
    public END(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.END, 0);
    }
    public classParent(): ClassParentContext | null {
        return this.getRuleContext(0, ClassParentContext);
    }
    public interfaceGuid(): InterfaceGuidContext | null {
        return this.getRuleContext(0, InterfaceGuidContext);
    }
    public interfaceItem(): InterfaceItemContext[];
    public interfaceItem(i: number): InterfaceItemContext | null;
    public interfaceItem(i?: number): InterfaceItemContext[] | InterfaceItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceItemContext);
        }

        return this.getRuleContext(i, InterfaceItemContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_interfaceTypeDecl;
    }
}


export class InterfaceKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTERFACE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.INTERFACE, 0);
    }
    public DISPINTERFACE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DISPINTERFACE, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_interfaceKey;
    }
}


export class InterfaceGuidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACK(): antlr.TerminalNode {
        return this.getToken(delphiParser.LBRACK, 0)!;
    }
    public QuotedString(): antlr.TerminalNode {
        return this.getToken(delphiParser.QuotedString, 0)!;
    }
    public RBRACK(): antlr.TerminalNode {
        return this.getToken(delphiParser.RBRACK, 0)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_interfaceGuid;
    }
}


export class InterfaceItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classMethod(): ClassMethodContext | null {
        return this.getRuleContext(0, ClassMethodContext);
    }
    public classProperty(): ClassPropertyContext | null {
        return this.getRuleContext(0, ClassPropertyContext);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CLASS, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_interfaceItem;
    }
}


export class ObjectDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OBJECT(): antlr.TerminalNode {
        return this.getToken(delphiParser.OBJECT, 0)!;
    }
    public END(): antlr.TerminalNode {
        return this.getToken(delphiParser.END, 0)!;
    }
    public classParent(): ClassParentContext | null {
        return this.getRuleContext(0, ClassParentContext);
    }
    public objectItem(): ObjectItemContext[];
    public objectItem(i: number): ObjectItemContext | null;
    public objectItem(i?: number): ObjectItemContext[] | ObjectItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectItemContext);
        }

        return this.getRuleContext(i, ObjectItemContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_objectDecl;
    }
}


export class ObjectItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public classMethod(): ClassMethodContext | null {
        return this.getRuleContext(0, ClassMethodContext);
    }
    public classField(): ClassFieldContext | null {
        return this.getRuleContext(0, ClassFieldContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_objectItem;
    }
}


export class RecordDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simpleRecord(): SimpleRecordContext | null {
        return this.getRuleContext(0, SimpleRecordContext);
    }
    public variantRecord(): VariantRecordContext | null {
        return this.getRuleContext(0, VariantRecordContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_recordDecl;
    }
}


export class SimpleRecordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RECORD(): antlr.TerminalNode {
        return this.getToken(delphiParser.RECORD, 0)!;
    }
    public END(): antlr.TerminalNode {
        return this.getToken(delphiParser.END, 0)!;
    }
    public recordField(): RecordFieldContext[];
    public recordField(i: number): RecordFieldContext | null;
    public recordField(i?: number): RecordFieldContext[] | RecordFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RecordFieldContext);
        }

        return this.getRuleContext(i, RecordFieldContext);
    }
    public recordItem(): RecordItemContext[];
    public recordItem(i: number): RecordItemContext | null;
    public recordItem(i?: number): RecordItemContext[] | RecordItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RecordItemContext);
        }

        return this.getRuleContext(i, RecordItemContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_simpleRecord;
    }
}


export class VariantRecordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RECORD(): antlr.TerminalNode {
        return this.getToken(delphiParser.RECORD, 0)!;
    }
    public recordVariantSection(): RecordVariantSectionContext {
        return this.getRuleContext(0, RecordVariantSectionContext)!;
    }
    public END(): antlr.TerminalNode {
        return this.getToken(delphiParser.END, 0)!;
    }
    public recordField(): RecordFieldContext[];
    public recordField(i: number): RecordFieldContext | null;
    public recordField(i?: number): RecordFieldContext[] | RecordFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RecordFieldContext);
        }

        return this.getRuleContext(i, RecordFieldContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_variantRecord;
    }
}


export class RecordItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public classMethod(): ClassMethodContext | null {
        return this.getRuleContext(0, ClassMethodContext);
    }
    public classProperty(): ClassPropertyContext | null {
        return this.getRuleContext(0, ClassPropertyContext);
    }
    public constSection(): ConstSectionContext | null {
        return this.getRuleContext(0, ConstSectionContext);
    }
    public typeSection(): TypeSectionContext | null {
        return this.getRuleContext(0, TypeSectionContext);
    }
    public recordField(): RecordFieldContext | null {
        return this.getRuleContext(0, RecordFieldContext);
    }
    public varSection(): VarSectionContext | null {
        return this.getRuleContext(0, VarSectionContext);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CLASS, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_recordItem;
    }
}


export class RecordFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identList(): IdentListContext {
        return this.getRuleContext(0, IdentListContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(delphiParser.COLON, 0)!;
    }
    public typeDecl(): TypeDeclContext {
        return this.getRuleContext(0, TypeDeclContext)!;
    }
    public hintingDirective(): HintingDirectiveContext[];
    public hintingDirective(i: number): HintingDirectiveContext | null;
    public hintingDirective(i?: number): HintingDirectiveContext[] | HintingDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HintingDirectiveContext);
        }

        return this.getRuleContext(i, HintingDirectiveContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_recordField;
    }
}


export class RecordVariantFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identList(): IdentListContext {
        return this.getRuleContext(0, IdentListContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(delphiParser.COLON, 0)!;
    }
    public typeDecl(): TypeDeclContext {
        return this.getRuleContext(0, TypeDeclContext)!;
    }
    public hintingDirective(): HintingDirectiveContext[];
    public hintingDirective(i: number): HintingDirectiveContext | null;
    public hintingDirective(i?: number): HintingDirectiveContext[] | HintingDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HintingDirectiveContext);
        }

        return this.getRuleContext(i, HintingDirectiveContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_recordVariantField;
    }
}


export class RecordVariantSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CASE(): antlr.TerminalNode {
        return this.getToken(delphiParser.CASE, 0)!;
    }
    public typeDecl(): TypeDeclContext {
        return this.getRuleContext(0, TypeDeclContext)!;
    }
    public OF(): antlr.TerminalNode {
        return this.getToken(delphiParser.OF, 0)!;
    }
    public recordVariant(): RecordVariantContext[];
    public recordVariant(i: number): RecordVariantContext | null;
    public recordVariant(i?: number): RecordVariantContext[] | RecordVariantContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RecordVariantContext);
        }

        return this.getRuleContext(i, RecordVariantContext);
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.SEMI);
    	} else {
    		return this.getToken(delphiParser.SEMI, i);
    	}
    }
    public ident(): IdentContext | null {
        return this.getRuleContext(0, IdentContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.COLON, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_recordVariantSection;
    }
}


export class RecordVariantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constExpression(): ConstExpressionContext[];
    public constExpression(i: number): ConstExpressionContext | null;
    public constExpression(i?: number): ConstExpressionContext[] | ConstExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConstExpressionContext);
        }

        return this.getRuleContext(i, ConstExpressionContext);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(delphiParser.COLON, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(delphiParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(delphiParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public recordVariantField(): RecordVariantFieldContext[];
    public recordVariantField(i: number): RecordVariantFieldContext | null;
    public recordVariantField(i?: number): RecordVariantFieldContext[] | RecordVariantFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RecordVariantFieldContext);
        }

        return this.getRuleContext(i, RecordVariantFieldContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_recordVariant;
    }
}


export class RecordHelperDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RECORD(): antlr.TerminalNode {
        return this.getToken(delphiParser.RECORD, 0)!;
    }
    public HELPER(): antlr.TerminalNode {
        return this.getToken(delphiParser.HELPER, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(delphiParser.FOR, 0)!;
    }
    public typeId(): TypeIdContext {
        return this.getRuleContext(0, TypeIdContext)!;
    }
    public END(): antlr.TerminalNode {
        return this.getToken(delphiParser.END, 0)!;
    }
    public recordHelperItem(): RecordHelperItemContext[];
    public recordHelperItem(i: number): RecordHelperItemContext | null;
    public recordHelperItem(i?: number): RecordHelperItemContext[] | RecordHelperItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RecordHelperItemContext);
        }

        return this.getRuleContext(i, RecordHelperItemContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_recordHelperDecl;
    }
}


export class RecordHelperItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public classMethod(): ClassMethodContext | null {
        return this.getRuleContext(0, ClassMethodContext);
    }
    public classProperty(): ClassPropertyContext | null {
        return this.getRuleContext(0, ClassPropertyContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_recordHelperItem;
    }
}


export class ClassMethodContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public methodKey(): MethodKeyContext | null {
        return this.getRuleContext(0, MethodKeyContext);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public customAttribute(): CustomAttributeContext[];
    public customAttribute(i: number): CustomAttributeContext | null;
    public customAttribute(i?: number): CustomAttributeContext[] | CustomAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CustomAttributeContext);
        }

        return this.getRuleContext(i, CustomAttributeContext);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CLASS, 0);
    }
    public genericDefinition(): GenericDefinitionContext | null {
        return this.getRuleContext(0, GenericDefinitionContext);
    }
    public formalParameterSection(): FormalParameterSectionContext | null {
        return this.getRuleContext(0, FormalParameterSectionContext);
    }
    public methodDirective(): MethodDirectiveContext[];
    public methodDirective(i: number): MethodDirectiveContext | null;
    public methodDirective(i?: number): MethodDirectiveContext[] | MethodDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MethodDirectiveContext);
        }

        return this.getRuleContext(i, MethodDirectiveContext);
    }
    public FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.FUNCTION, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.COLON, 0);
    }
    public typeDecl(): TypeDeclContext | null {
        return this.getRuleContext(0, TypeDeclContext);
    }
    public OPERATOR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.OPERATOR, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classMethod;
    }
}


export class ClassFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identList(): IdentListContext {
        return this.getRuleContext(0, IdentListContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(delphiParser.COLON, 0)!;
    }
    public typeDecl(): TypeDeclContext {
        return this.getRuleContext(0, TypeDeclContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public customAttribute(): CustomAttributeContext | null {
        return this.getRuleContext(0, CustomAttributeContext);
    }
    public hintingDirective(): HintingDirectiveContext[];
    public hintingDirective(i: number): HintingDirectiveContext | null;
    public hintingDirective(i?: number): HintingDirectiveContext[] | HintingDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HintingDirectiveContext);
        }

        return this.getRuleContext(i, HintingDirectiveContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classField;
    }
}


export class ClassPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROPERTY(): antlr.TerminalNode {
        return this.getToken(delphiParser.PROPERTY, 0)!;
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public customAttribute(): CustomAttributeContext | null {
        return this.getRuleContext(0, CustomAttributeContext);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CLASS, 0);
    }
    public classPropertyArray(): ClassPropertyArrayContext | null {
        return this.getRuleContext(0, ClassPropertyArrayContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.COLON, 0);
    }
    public genericTypeIdent(): GenericTypeIdentContext | null {
        return this.getRuleContext(0, GenericTypeIdentContext);
    }
    public classPropertyIndex(): ClassPropertyIndexContext | null {
        return this.getRuleContext(0, ClassPropertyIndexContext);
    }
    public classPropertySpecifier(): ClassPropertySpecifierContext[];
    public classPropertySpecifier(i: number): ClassPropertySpecifierContext | null;
    public classPropertySpecifier(i?: number): ClassPropertySpecifierContext[] | ClassPropertySpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassPropertySpecifierContext);
        }

        return this.getRuleContext(i, ClassPropertySpecifierContext);
    }
    public classPropertyEndSpecifier(): ClassPropertyEndSpecifierContext[];
    public classPropertyEndSpecifier(i: number): ClassPropertyEndSpecifierContext | null;
    public classPropertyEndSpecifier(i?: number): ClassPropertyEndSpecifierContext[] | ClassPropertyEndSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassPropertyEndSpecifierContext);
        }

        return this.getRuleContext(i, ClassPropertyEndSpecifierContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classProperty;
    }
}


export class ClassPropertyArrayContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACK(): antlr.TerminalNode {
        return this.getToken(delphiParser.LBRACK, 0)!;
    }
    public formalParameterList(): FormalParameterListContext {
        return this.getRuleContext(0, FormalParameterListContext)!;
    }
    public RBRACK(): antlr.TerminalNode {
        return this.getToken(delphiParser.RBRACK, 0)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classPropertyArray;
    }
}


export class ClassPropertyIndexContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(delphiParser.INDEX, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classPropertyIndex;
    }
}


export class ClassPropertySpecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classPropertyReadWrite(): ClassPropertyReadWriteContext | null {
        return this.getRuleContext(0, ClassPropertyReadWriteContext);
    }
    public classPropertyDispInterface(): ClassPropertyDispInterfaceContext | null {
        return this.getRuleContext(0, ClassPropertyDispInterfaceContext);
    }
    public STORED(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.STORED, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DEFAULT, 0);
    }
    public NODEFAULT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.NODEFAULT, 0);
    }
    public IMPLEMENTS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.IMPLEMENTS, 0);
    }
    public typeId(): TypeIdContext | null {
        return this.getRuleContext(0, TypeIdContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classPropertySpecifier;
    }
}


export class ClassPropertyEndSpecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STORED(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.STORED, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DEFAULT, 0);
    }
    public NODEFAULT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.NODEFAULT, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classPropertyEndSpecifier;
    }
}


export class ClassPropertyReadWriteContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public READ(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.READ, 0);
    }
    public qualifiedIdent(): QualifiedIdentContext {
        return this.getRuleContext(0, QualifiedIdentContext)!;
    }
    public LBRACK(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LBRACK, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RBRACK(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RBRACK, 0);
    }
    public WRITE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.WRITE, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classPropertyReadWrite;
    }
}


export class ClassPropertyDispInterfaceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public READONLY(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.READONLY, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEMI, 0);
    }
    public WRITEONLY(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.WRITEONLY, 0);
    }
    public dispIDDirective(): DispIDDirectiveContext | null {
        return this.getRuleContext(0, DispIDDirectiveContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_classPropertyDispInterface;
    }
}


export class VisibilityContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROTECTED(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PROTECTED, 0);
    }
    public STRICT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.STRICT, 0);
    }
    public PRIVATE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PRIVATE, 0);
    }
    public PUBLIC(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PUBLIC, 0);
    }
    public PUBLISHED(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PUBLISHED, 0);
    }
    public AUTOMATED(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.AUTOMATED, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_visibility;
    }
}


export class ExportedProcHeadingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROCEDURE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PROCEDURE, 0);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.COLON, 0);
    }
    public typeDecl(): TypeDeclContext | null {
        return this.getRuleContext(0, TypeDeclContext);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public formalParameterSection(): FormalParameterSectionContext | null {
        return this.getRuleContext(0, FormalParameterSectionContext);
    }
    public customAttribute(): CustomAttributeContext | null {
        return this.getRuleContext(0, CustomAttributeContext);
    }
    public functionDirective(): FunctionDirectiveContext[];
    public functionDirective(i: number): FunctionDirectiveContext | null;
    public functionDirective(i?: number): FunctionDirectiveContext[] | FunctionDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionDirectiveContext);
        }

        return this.getRuleContext(i, FunctionDirectiveContext);
    }
    public FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.FUNCTION, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_exportedProcHeading;
    }
}


export class MethodDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public methodDeclHeading(): MethodDeclHeadingContext {
        return this.getRuleContext(0, MethodDeclHeadingContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public methodDirective(): MethodDirectiveContext[];
    public methodDirective(i: number): MethodDirectiveContext | null;
    public methodDirective(i?: number): MethodDirectiveContext[] | MethodDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MethodDirectiveContext);
        }

        return this.getRuleContext(i, MethodDirectiveContext);
    }
    public methodBody(): MethodBodyContext | null {
        return this.getRuleContext(0, MethodBodyContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_methodDecl;
    }
}


export class MethodDeclHeadingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public methodKey(): MethodKeyContext | null {
        return this.getRuleContext(0, MethodKeyContext);
    }
    public methodName(): MethodNameContext {
        return this.getRuleContext(0, MethodNameContext)!;
    }
    public customAttribute(): CustomAttributeContext[];
    public customAttribute(i: number): CustomAttributeContext | null;
    public customAttribute(i?: number): CustomAttributeContext[] | CustomAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CustomAttributeContext);
        }

        return this.getRuleContext(i, CustomAttributeContext);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CLASS, 0);
    }
    public formalParameterSection(): FormalParameterSectionContext | null {
        return this.getRuleContext(0, FormalParameterSectionContext);
    }
    public FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.FUNCTION, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.COLON, 0);
    }
    public typeDecl(): TypeDeclContext | null {
        return this.getRuleContext(0, TypeDeclContext);
    }
    public OPERATOR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.OPERATOR, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_methodDeclHeading;
    }
}


export class MethodKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROCEDURE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PROCEDURE, 0);
    }
    public CONSTRUCTOR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CONSTRUCTOR, 0);
    }
    public DESTRUCTOR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DESTRUCTOR, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_methodKey;
    }
}


export class MethodNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.DOT);
    	} else {
    		return this.getToken(delphiParser.DOT, i);
    	}
    }
    public genericDefinition(): GenericDefinitionContext[];
    public genericDefinition(i: number): GenericDefinitionContext | null;
    public genericDefinition(i?: number): GenericDefinitionContext[] | GenericDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GenericDefinitionContext);
        }

        return this.getRuleContext(i, GenericDefinitionContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_methodName;
    }
}


export class ProcDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public procDeclHeading(): ProcDeclHeadingContext {
        return this.getRuleContext(0, ProcDeclHeadingContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public functionDirective(): FunctionDirectiveContext[];
    public functionDirective(i: number): FunctionDirectiveContext | null;
    public functionDirective(i?: number): FunctionDirectiveContext[] | FunctionDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionDirectiveContext);
        }

        return this.getRuleContext(i, FunctionDirectiveContext);
    }
    public procBody(): ProcBodyContext | null {
        return this.getRuleContext(0, ProcBodyContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_procDecl;
    }
}


export class ProcDeclHeadingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROCEDURE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PROCEDURE, 0);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public customAttribute(): CustomAttributeContext | null {
        return this.getRuleContext(0, CustomAttributeContext);
    }
    public formalParameterSection(): FormalParameterSectionContext | null {
        return this.getRuleContext(0, FormalParameterSectionContext);
    }
    public FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.FUNCTION, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.COLON, 0);
    }
    public typeDecl(): TypeDeclContext | null {
        return this.getRuleContext(0, TypeDeclContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_procDeclHeading;
    }
}


export class FormalParameterSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(delphiParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(delphiParser.RPAREN, 0)!;
    }
    public formalParameterList(): FormalParameterListContext | null {
        return this.getRuleContext(0, FormalParameterListContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_formalParameterSection;
    }
}


export class FormalParameterListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public formalParameter(): FormalParameterContext[];
    public formalParameter(i: number): FormalParameterContext | null;
    public formalParameter(i?: number): FormalParameterContext[] | FormalParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterContext);
        }

        return this.getRuleContext(i, FormalParameterContext);
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.SEMI);
    	} else {
    		return this.getToken(delphiParser.SEMI, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_formalParameterList;
    }
}


export class FormalParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identListFlat(): IdentListFlatContext {
        return this.getRuleContext(0, IdentListFlatContext)!;
    }
    public parmType(): ParmTypeContext | null {
        return this.getRuleContext(0, ParmTypeContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.COLON, 0);
    }
    public typeDecl(): TypeDeclContext | null {
        return this.getRuleContext(0, TypeDeclContext);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EQUAL, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_formalParameter;
    }
}


export class ParmTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONST(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CONST, 0);
    }
    public VAR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.VAR, 0);
    }
    public OUT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.OUT, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_parmType;
    }
}


export class MethodBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_methodBody;
    }
}


export class ProcBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FORWARD(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.FORWARD, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEMI, 0);
    }
    public functionDirective(): FunctionDirectiveContext[];
    public functionDirective(i: number): FunctionDirectiveContext | null;
    public functionDirective(i?: number): FunctionDirectiveContext[] | FunctionDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionDirectiveContext);
        }

        return this.getRuleContext(i, FunctionDirectiveContext);
    }
    public EXTERNAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EXTERNAL, 0);
    }
    public NAME(): antlr.TerminalNode[];
    public NAME(i: number): antlr.TerminalNode | null;
    public NAME(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.NAME);
    	} else {
    		return this.getToken(delphiParser.NAME, i);
    	}
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public INDEX(): antlr.TerminalNode[];
    public INDEX(i: number): antlr.TerminalNode | null;
    public INDEX(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.INDEX);
    	} else {
    		return this.getToken(delphiParser.INDEX, i);
    	}
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_procBody;
    }
}


export class CustomAttributeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_customAttribute;
    }
}


export class CustomAttributeListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public customAttributeDecl(): CustomAttributeDeclContext[];
    public customAttributeDecl(i: number): CustomAttributeDeclContext | null;
    public customAttributeDecl(i?: number): CustomAttributeDeclContext[] | CustomAttributeDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CustomAttributeDeclContext);
        }

        return this.getRuleContext(i, CustomAttributeDeclContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_customAttributeList;
    }
}


export class CustomAttributeDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACK(): antlr.TerminalNode {
        return this.getToken(delphiParser.LBRACK, 0)!;
    }
    public namespacedQualifiedIdent(): NamespacedQualifiedIdentContext {
        return this.getRuleContext(0, NamespacedQualifiedIdentContext)!;
    }
    public RBRACK(): antlr.TerminalNode {
        return this.getToken(delphiParser.RBRACK, 0)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RPAREN, 0);
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_customAttributeDecl;
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public anonymousExpression(): AnonymousExpressionContext | null {
        return this.getRuleContext(0, AnonymousExpressionContext);
    }
    public simpleExpression(): SimpleExpressionContext[];
    public simpleExpression(i: number): SimpleExpressionContext | null;
    public simpleExpression(i?: number): SimpleExpressionContext[] | SimpleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SimpleExpressionContext);
        }

        return this.getRuleContext(i, SimpleExpressionContext);
    }
    public relOp(): RelOpContext | null {
        return this.getRuleContext(0, RelOpContext);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EQUAL, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_expression;
    }
}


export class AnonymousExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROCEDURE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PROCEDURE, 0);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public formalParameterSection(): FormalParameterSectionContext | null {
        return this.getRuleContext(0, FormalParameterSectionContext);
    }
    public FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.FUNCTION, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.COLON, 0);
    }
    public typeDecl(): TypeDeclContext | null {
        return this.getRuleContext(0, TypeDeclContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_anonymousExpression;
    }
}


export class SimpleExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public factor(): FactorContext[];
    public factor(i: number): FactorContext | null;
    public factor(i?: number): FactorContext[] | FactorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FactorContext);
        }

        return this.getRuleContext(i, FactorContext);
    }
    public operator(): OperatorContext[];
    public operator(i: number): OperatorContext | null;
    public operator(i?: number): OperatorContext[] | OperatorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OperatorContext);
        }

        return this.getRuleContext(i, OperatorContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_simpleExpression;
    }
}


export class FactorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AT2(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.AT2, 0);
    }
    public factor(): FactorContext | null {
        return this.getRuleContext(0, FactorContext);
    }
    public DOUBLEAT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DOUBLEAT, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.NOT, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.MINUS, 0);
    }
    public POINTER2(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.POINTER2, 0);
    }
    public ident(): IdentContext | null {
        return this.getRuleContext(0, IdentContext);
    }
    public intNum(): IntNumContext | null {
        return this.getRuleContext(0, IntNumContext);
    }
    public realNum(): RealNumContext | null {
        return this.getRuleContext(0, RealNumContext);
    }
    public TkAsmHexNum(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.TkAsmHexNum, 0);
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.FALSE, 0);
    }
    public NIL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.NIL, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LPAREN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RPAREN, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DOT, 0);
    }
    public stringFactor(): StringFactorContext | null {
        return this.getRuleContext(0, StringFactorContext);
    }
    public setSection(): SetSectionContext | null {
        return this.getRuleContext(0, SetSectionContext);
    }
    public designator(): DesignatorContext | null {
        return this.getRuleContext(0, DesignatorContext);
    }
    public typeId(): TypeIdContext | null {
        return this.getRuleContext(0, TypeIdContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_factor;
    }
}


export class StringFactorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ControlString(): antlr.TerminalNode[];
    public ControlString(i: number): antlr.TerminalNode | null;
    public ControlString(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.ControlString);
    	} else {
    		return this.getToken(delphiParser.ControlString, i);
    	}
    }
    public QuotedString(): antlr.TerminalNode[];
    public QuotedString(i: number): antlr.TerminalNode | null;
    public QuotedString(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.QuotedString);
    	} else {
    		return this.getToken(delphiParser.QuotedString, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_stringFactor;
    }
}


export class SetSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACK(): antlr.TerminalNode {
        return this.getToken(delphiParser.LBRACK, 0)!;
    }
    public RBRACK(): antlr.TerminalNode {
        return this.getToken(delphiParser.RBRACK, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public DOTDOT(): antlr.TerminalNode[];
    public DOTDOT(i: number): antlr.TerminalNode | null;
    public DOTDOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.DOTDOT);
    	} else {
    		return this.getToken(delphiParser.DOTDOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_setSection;
    }
}


export class DesignatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INHERITED(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.INHERITED, 0);
    }
    public typeId(): TypeIdContext | null {
        return this.getRuleContext(0, TypeIdContext);
    }
    public designatorItem(): DesignatorItemContext[];
    public designatorItem(i: number): DesignatorItemContext | null;
    public designatorItem(i?: number): DesignatorItemContext[] | DesignatorItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DesignatorItemContext);
        }

        return this.getRuleContext(i, DesignatorItemContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_designator;
    }
}


export class DesignatorItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public POINTER2(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.POINTER2, 0);
    }
    public ident(): IdentContext | null {
        return this.getRuleContext(0, IdentContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DOT, 0);
    }
    public AT2(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.AT2, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LT, 0);
    }
    public genericTypeIdent(): GenericTypeIdentContext[];
    public genericTypeIdent(i: number): GenericTypeIdentContext | null;
    public genericTypeIdent(i?: number): GenericTypeIdentContext[] | GenericTypeIdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GenericTypeIdentContext);
        }

        return this.getRuleContext(i, GenericTypeIdentContext);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.GT, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public LBRACK(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LBRACK, 0);
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public RBRACK(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RBRACK, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RPAREN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public colonConstruct(): ColonConstructContext[];
    public colonConstruct(i: number): ColonConstructContext | null;
    public colonConstruct(i?: number): ColonConstructContext[] | ColonConstructContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColonConstructContext);
        }

        return this.getRuleContext(i, ColonConstructContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_designatorItem;
    }
}


export class ExpressionListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_expressionList;
    }
}


export class ColonConstructContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode[];
    public COLON(i: number): antlr.TerminalNode | null;
    public COLON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COLON);
    	} else {
    		return this.getToken(delphiParser.COLON, i);
    	}
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_colonConstruct;
    }
}


export class OperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.MINUS, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.OR, 0);
    }
    public XOR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.XOR, 0);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.STAR, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SLASH, 0);
    }
    public DIV(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DIV, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.MOD, 0);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.AND, 0);
    }
    public SHL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SHL, 0);
    }
    public SHR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SHR, 0);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.AS, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_operator;
    }
}


export class RelOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LT, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.GT, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LE, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.GE, 0);
    }
    public NOT_EQUAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.NOT_EQUAL, 0);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EQUAL, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.IN, 0);
    }
    public IS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.IS, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_relOp;
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public caseStatement(): CaseStatementContext | null {
        return this.getRuleContext(0, CaseStatementContext);
    }
    public repeatStatement(): RepeatStatementContext | null {
        return this.getRuleContext(0, RepeatStatementContext);
    }
    public whileStatement(): WhileStatementContext | null {
        return this.getRuleContext(0, WhileStatementContext);
    }
    public forStatement(): ForStatementContext | null {
        return this.getRuleContext(0, ForStatementContext);
    }
    public withStatement(): WithStatementContext | null {
        return this.getRuleContext(0, WithStatementContext);
    }
    public tryStatement(): TryStatementContext | null {
        return this.getRuleContext(0, TryStatementContext);
    }
    public raiseStatement(): RaiseStatementContext | null {
        return this.getRuleContext(0, RaiseStatementContext);
    }
    public assemblerStatement(): AssemblerStatementContext | null {
        return this.getRuleContext(0, AssemblerStatementContext);
    }
    public compoundStatement(): CompoundStatementContext | null {
        return this.getRuleContext(0, CompoundStatementContext);
    }
    public label(): LabelContext | null {
        return this.getRuleContext(0, LabelContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.COLON, 0);
    }
    public statement(): StatementContext | null {
        return this.getRuleContext(0, StatementContext);
    }
    public simpleStatement(): SimpleStatementContext | null {
        return this.getRuleContext(0, SimpleStatementContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_statement;
    }
}


export class IfStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(delphiParser.IF, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public THEN(): antlr.TerminalNode {
        return this.getToken(delphiParser.THEN, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.ELSE, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_ifStatement;
    }
}


export class CaseStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CASE(): antlr.TerminalNode {
        return this.getToken(delphiParser.CASE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public OF(): antlr.TerminalNode {
        return this.getToken(delphiParser.OF, 0)!;
    }
    public END(): antlr.TerminalNode {
        return this.getToken(delphiParser.END, 0)!;
    }
    public caseItem(): CaseItemContext[];
    public caseItem(i: number): CaseItemContext | null;
    public caseItem(i?: number): CaseItemContext[] | CaseItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CaseItemContext);
        }

        return this.getRuleContext(i, CaseItemContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.ELSE, 0);
    }
    public statementList(): StatementListContext | null {
        return this.getRuleContext(0, StatementListContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_caseStatement;
    }
}


export class CaseItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public caseLabel(): CaseLabelContext[];
    public caseLabel(i: number): CaseLabelContext | null;
    public caseLabel(i?: number): CaseLabelContext[] | CaseLabelContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CaseLabelContext);
        }

        return this.getRuleContext(i, CaseLabelContext);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(delphiParser.COLON, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_caseItem;
    }
}


export class CaseLabelContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public DOTDOT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DOTDOT, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_caseLabel;
    }
}


export class RepeatStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REPEAT(): antlr.TerminalNode {
        return this.getToken(delphiParser.REPEAT, 0)!;
    }
    public UNTIL(): antlr.TerminalNode {
        return this.getToken(delphiParser.UNTIL, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public statementList(): StatementListContext | null {
        return this.getRuleContext(0, StatementListContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_repeatStatement;
    }
}


export class WhileStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHILE(): antlr.TerminalNode {
        return this.getToken(delphiParser.WHILE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public DO(): antlr.TerminalNode {
        return this.getToken(delphiParser.DO, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_whileStatement;
    }
}


export class ForStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(delphiParser.FOR, 0)!;
    }
    public designator(): DesignatorContext {
        return this.getRuleContext(0, DesignatorContext)!;
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.ASSIGN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public TO(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.TO, 0);
    }
    public DO(): antlr.TerminalNode {
        return this.getToken(delphiParser.DO, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public DOWNTO(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DOWNTO, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.IN, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_forStatement;
    }
}


export class WithStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(delphiParser.WITH, 0)!;
    }
    public withItem(): WithItemContext {
        return this.getRuleContext(0, WithItemContext)!;
    }
    public DO(): antlr.TerminalNode {
        return this.getToken(delphiParser.DO, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_withStatement;
    }
}


export class WithItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public designator(): DesignatorContext[];
    public designator(i: number): DesignatorContext | null;
    public designator(i?: number): DesignatorContext[] | DesignatorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DesignatorContext);
        }

        return this.getRuleContext(i, DesignatorContext);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.AS, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_withItem;
    }
}


export class CompoundStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BEGIN(): antlr.TerminalNode {
        return this.getToken(delphiParser.BEGIN, 0)!;
    }
    public END(): antlr.TerminalNode {
        return this.getToken(delphiParser.END, 0)!;
    }
    public statementList(): StatementListContext | null {
        return this.getRuleContext(0, StatementListContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_compoundStatement;
    }
}


export class StatementListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.SEMI);
    	} else {
    		return this.getToken(delphiParser.SEMI, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_statementList;
    }
}


export class SimpleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public designator(): DesignatorContext | null {
        return this.getRuleContext(0, DesignatorContext);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.ASSIGN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public gotoStatement(): GotoStatementContext | null {
        return this.getRuleContext(0, GotoStatementContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_simpleStatement;
    }
}


export class GotoStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GOTO(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.GOTO, 0);
    }
    public label(): LabelContext | null {
        return this.getRuleContext(0, LabelContext);
    }
    public EXIT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EXIT, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LPAREN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RPAREN, 0);
    }
    public BREAK(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.BREAK, 0);
    }
    public CONTINUE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CONTINUE, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_gotoStatement;
    }
}


export class ConstExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LPAREN, 0);
    }
    public recordConstExpression(): RecordConstExpressionContext[];
    public recordConstExpression(i: number): RecordConstExpressionContext | null;
    public recordConstExpression(i?: number): RecordConstExpressionContext[] | RecordConstExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RecordConstExpressionContext);
        }

        return this.getRuleContext(i, RecordConstExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.RPAREN, 0);
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.SEMI);
    	} else {
    		return this.getToken(delphiParser.SEMI, i);
    	}
    }
    public constExpression(): ConstExpressionContext[];
    public constExpression(i: number): ConstExpressionContext | null;
    public constExpression(i?: number): ConstExpressionContext[] | ConstExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConstExpressionContext);
        }

        return this.getRuleContext(i, ConstExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_constExpression;
    }
}


export class RecordConstExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(delphiParser.COLON, 0)!;
    }
    public constExpression(): ConstExpressionContext {
        return this.getRuleContext(0, ConstExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_recordConstExpression;
    }
}


export class TryStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRY(): antlr.TerminalNode {
        return this.getToken(delphiParser.TRY, 0)!;
    }
    public EXCEPT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EXCEPT, 0);
    }
    public handlerList(): HandlerListContext | null {
        return this.getRuleContext(0, HandlerListContext);
    }
    public END(): antlr.TerminalNode {
        return this.getToken(delphiParser.END, 0)!;
    }
    public statementList(): StatementListContext[];
    public statementList(i: number): StatementListContext | null;
    public statementList(i?: number): StatementListContext[] | StatementListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementListContext);
        }

        return this.getRuleContext(i, StatementListContext);
    }
    public FINALLY(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.FINALLY, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_tryStatement;
    }
}


export class HandlerListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public handler(): HandlerContext[];
    public handler(i: number): HandlerContext | null;
    public handler(i?: number): HandlerContext[] | HandlerContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HandlerContext);
        }

        return this.getRuleContext(i, HandlerContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.ELSE, 0);
    }
    public statementList(): StatementListContext | null {
        return this.getRuleContext(0, StatementListContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_handlerList;
    }
}


export class HandlerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON(): antlr.TerminalNode {
        return this.getToken(delphiParser.ON, 0)!;
    }
    public typeId(): TypeIdContext {
        return this.getRuleContext(0, TypeIdContext)!;
    }
    public DO(): antlr.TerminalNode {
        return this.getToken(delphiParser.DO, 0)!;
    }
    public handlerStatement(): HandlerStatementContext {
        return this.getRuleContext(0, HandlerStatementContext)!;
    }
    public handlerIdent(): HandlerIdentContext | null {
        return this.getRuleContext(0, HandlerIdentContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_handler;
    }
}


export class HandlerIdentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(delphiParser.COLON, 0)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_handlerIdent;
    }
}


export class HandlerStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext | null {
        return this.getRuleContext(0, StatementContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_handlerStatement;
    }
}


export class RaiseStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RAISE(): antlr.TerminalNode {
        return this.getToken(delphiParser.RAISE, 0)!;
    }
    public designator(): DesignatorContext[];
    public designator(i: number): DesignatorContext | null;
    public designator(i?: number): DesignatorContext[] | DesignatorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DesignatorContext);
        }

        return this.getRuleContext(i, DesignatorContext);
    }
    public AT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.AT, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_raiseStatement;
    }
}


export class AssemblerStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASM(): antlr.TerminalNode {
        return this.getToken(delphiParser.ASM, 0)!;
    }
    public END(): antlr.TerminalNode[];
    public END(i: number): antlr.TerminalNode | null;
    public END(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.END);
    	} else {
    		return this.getToken(delphiParser.END, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_assemblerStatement;
    }
}


export class MethodDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public reintroduceDirective(): ReintroduceDirectiveContext | null {
        return this.getRuleContext(0, ReintroduceDirectiveContext);
    }
    public overloadDirective(): OverloadDirectiveContext | null {
        return this.getRuleContext(0, OverloadDirectiveContext);
    }
    public bindingDirective(): BindingDirectiveContext | null {
        return this.getRuleContext(0, BindingDirectiveContext);
    }
    public abstractDirective(): AbstractDirectiveContext | null {
        return this.getRuleContext(0, AbstractDirectiveContext);
    }
    public inlineDirective(): InlineDirectiveContext | null {
        return this.getRuleContext(0, InlineDirectiveContext);
    }
    public callConvention(): CallConventionContext | null {
        return this.getRuleContext(0, CallConventionContext);
    }
    public hintingDirective(): HintingDirectiveContext | null {
        return this.getRuleContext(0, HintingDirectiveContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEMI, 0);
    }
    public oldCallConventionDirective(): OldCallConventionDirectiveContext | null {
        return this.getRuleContext(0, OldCallConventionDirectiveContext);
    }
    public dispIDDirective(): DispIDDirectiveContext | null {
        return this.getRuleContext(0, DispIDDirectiveContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_methodDirective;
    }
}


export class FunctionDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public overloadDirective(): OverloadDirectiveContext | null {
        return this.getRuleContext(0, OverloadDirectiveContext);
    }
    public inlineDirective(): InlineDirectiveContext | null {
        return this.getRuleContext(0, InlineDirectiveContext);
    }
    public callConvention(): CallConventionContext | null {
        return this.getRuleContext(0, CallConventionContext);
    }
    public oldCallConventionDirective(): OldCallConventionDirectiveContext | null {
        return this.getRuleContext(0, OldCallConventionDirectiveContext);
    }
    public hintingDirective(): HintingDirectiveContext | null {
        return this.getRuleContext(0, HintingDirectiveContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEMI, 0);
    }
    public externalDirective(): ExternalDirectiveContext | null {
        return this.getRuleContext(0, ExternalDirectiveContext);
    }
    public callConventionNoSemi(): CallConventionNoSemiContext | null {
        return this.getRuleContext(0, CallConventionNoSemiContext);
    }
    public UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.UNSAFE, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_functionDirective;
    }
}


export class ReintroduceDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REINTRODUCE(): antlr.TerminalNode {
        return this.getToken(delphiParser.REINTRODUCE, 0)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_reintroduceDirective;
    }
}


export class OverloadDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OVERLOAD(): antlr.TerminalNode {
        return this.getToken(delphiParser.OVERLOAD, 0)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_overloadDirective;
    }
}


export class BindingDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MESSAGE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.MESSAGE, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public STATIC(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.STATIC, 0);
    }
    public DYNAMIC(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DYNAMIC, 0);
    }
    public OVERRIDE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.OVERRIDE, 0);
    }
    public VIRTUAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.VIRTUAL, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_bindingDirective;
    }
}


export class AbstractDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABSTRACT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.ABSTRACT, 0);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.FINAL, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_abstractDirective;
    }
}


export class InlineDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INLINE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.INLINE, 0);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public ASSEMBLER(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.ASSEMBLER, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_inlineDirective;
    }
}


export class CallConventionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CDECL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CDECL, 0);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public PASCAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PASCAL, 0);
    }
    public REGISTER(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.REGISTER, 0);
    }
    public SAFECALL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SAFECALL, 0);
    }
    public STDCALL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.STDCALL, 0);
    }
    public EXPORT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EXPORT, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_callConvention;
    }
}


export class CallConventionNoSemiContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CDECL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CDECL, 0);
    }
    public PASCAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PASCAL, 0);
    }
    public REGISTER(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.REGISTER, 0);
    }
    public SAFECALL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.SAFECALL, 0);
    }
    public STDCALL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.STDCALL, 0);
    }
    public EXPORT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EXPORT, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_callConventionNoSemi;
    }
}


export class OldCallConventionDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FAR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.FAR, 0);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LOCAL, 0);
    }
    public NEAR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.NEAR, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_oldCallConventionDirective;
    }
}


export class HintingDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEPRECATED(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DEPRECATED, 0);
    }
    public stringFactor(): StringFactorContext | null {
        return this.getRuleContext(0, StringFactorContext);
    }
    public EXPERIMENTAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EXPERIMENTAL, 0);
    }
    public PLATFORM(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.PLATFORM, 0);
    }
    public LIBRARY(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LIBRARY, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_hintingDirective;
    }
}


export class ExternalDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VARARGS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.VARARGS, 0);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public EXTERNAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EXTERNAL, 0);
    }
    public constExpression(): ConstExpressionContext | null {
        return this.getRuleContext(0, ConstExpressionContext);
    }
    public externalSpecifier(): ExternalSpecifierContext[];
    public externalSpecifier(i: number): ExternalSpecifierContext | null;
    public externalSpecifier(i?: number): ExternalSpecifierContext[] | ExternalSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExternalSpecifierContext);
        }

        return this.getRuleContext(i, ExternalSpecifierContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_externalDirective;
    }
}


export class ExternalSpecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NAME(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.NAME, 0);
    }
    public constExpression(): ConstExpressionContext {
        return this.getRuleContext(0, ConstExpressionContext)!;
    }
    public INDEX(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.INDEX, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_externalSpecifier;
    }
}


export class DispIDDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DISPID(): antlr.TerminalNode {
        return this.getToken(delphiParser.DISPID, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(delphiParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_dispIDDirective;
    }
}


export class IdentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TkIdentifier(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.TkIdentifier, 0);
    }
    public AMBER(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.AMBER, 0);
    }
    public usedKeywordsAsNames(): UsedKeywordsAsNamesContext | null {
        return this.getRuleContext(0, UsedKeywordsAsNamesContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_ident;
    }
}


export class UsedKeywordsAsNamesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NAME(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.NAME, 0);
    }
    public READONLY(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.READONLY, 0);
    }
    public ADD(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.ADD, 0);
    }
    public AT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.AT, 0);
    }
    public MESSAGE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.MESSAGE, 0);
    }
    public POINTER(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.POINTER, 0);
    }
    public INDEX(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.INDEX, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DEFAULT, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.STRING, 0);
    }
    public CONTINUE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CONTINUE, 0);
    }
    public READ(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.READ, 0);
    }
    public WRITE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.WRITE, 0);
    }
    public REGISTER(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.REGISTER, 0);
    }
    public VARIANT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.VARIANT, 0);
    }
    public OPERATOR(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.OPERATOR, 0);
    }
    public REMOVE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.REMOVE, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.LOCAL, 0);
    }
    public REFERENCE(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.REFERENCE, 0);
    }
    public CONTAINS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.CONTAINS, 0);
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.FINAL, 0);
    }
    public BREAK(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.BREAK, 0);
    }
    public EXIT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EXIT, 0);
    }
    public STRICT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.STRICT, 0);
    }
    public OUT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.OUT, 0);
    }
    public OBJECT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.OBJECT, 0);
    }
    public EXPORT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.EXPORT, 0);
    }
    public ANSISTRING(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.ANSISTRING, 0);
    }
    public IMPLEMENTS(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.IMPLEMENTS, 0);
    }
    public STORED(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.STORED, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_usedKeywordsAsNames;
    }
}


export class IdentListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_identList;
    }
}


export class IdentListFlatContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.COMMA);
    	} else {
    		return this.getToken(delphiParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_identListFlat;
    }
}


export class LabelContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TkIdentifier(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.TkIdentifier, 0);
    }
    public TkIntNum(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.TkIntNum, 0);
    }
    public TkHexNum(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.TkHexNum, 0);
    }
    public usedKeywordsAsNames(): UsedKeywordsAsNamesContext | null {
        return this.getRuleContext(0, UsedKeywordsAsNamesContext);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_label;
    }
}


export class IntNumContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TkIntNum(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.TkIntNum, 0);
    }
    public TkHexNum(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.TkHexNum, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_intNum;
    }
}


export class RealNumContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TkRealNum(): antlr.TerminalNode {
        return this.getToken(delphiParser.TkRealNum, 0)!;
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_realNum;
    }
}


export class NamespacedQualifiedIdentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedIdent(): QualifiedIdentContext {
        return this.getRuleContext(0, QualifiedIdentContext)!;
    }
    public namespaceName(): NamespaceNameContext | null {
        return this.getRuleContext(0, NamespaceNameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(delphiParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_namespacedQualifiedIdent;
    }
}


export class NamespaceNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.DOT);
    	} else {
    		return this.getToken(delphiParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_namespaceName;
    }
}


export class QualifiedIdentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(delphiParser.DOT);
    	} else {
    		return this.getToken(delphiParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return delphiParser.RULE_qualifiedIdent;
    }
}
