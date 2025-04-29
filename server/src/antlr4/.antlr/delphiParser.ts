// Generated from c:/Git/LSP/server/src/antlr4/delphi.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class delphiParser extends antlr.Parser {
    public static readonly ABSOLUTE = 1;
    public static readonly ABSTRACT = 2;
    public static readonly ADD = 3;
    public static readonly AND = 4;
    public static readonly ANSISTRING = 5;
    public static readonly ARRAY = 6;
    public static readonly AS = 7;
    public static readonly ASM = 8;
    public static readonly ASSEMBLER = 9;
    public static readonly ASSEMBLY = 10;
    public static readonly AT = 11;
    public static readonly AUTOMATED = 12;
    public static readonly BEGIN = 13;
    public static readonly BREAK = 14;
    public static readonly CASE = 15;
    public static readonly CDECL = 16;
    public static readonly CLASS = 17;
    public static readonly CONST = 18;
    public static readonly CONSTRUCTOR = 19;
    public static readonly CONTAINS = 20;
    public static readonly CONTINUE = 21;
    public static readonly DEFAULT = 22;
    public static readonly DEPRECATED = 23;
    public static readonly DESTRUCTOR = 24;
    public static readonly DISPID = 25;
    public static readonly DISPINTERFACE = 26;
    public static readonly DIV = 27;
    public static readonly DO = 28;
    public static readonly DOWNTO = 29;
    public static readonly DQ = 30;
    public static readonly DW = 31;
    public static readonly DYNAMIC = 32;
    public static readonly ELSE = 33;
    public static readonly END = 34;
    public static readonly EXCEPT = 35;
    public static readonly EXIT = 36;
    public static readonly EXPERIMENTAL = 37;
    public static readonly EXPORT = 38;
    public static readonly EXPORTS = 39;
    public static readonly EXTERNAL = 40;
    public static readonly FAR = 41;
    public static readonly FILE = 42;
    public static readonly FINAL = 43;
    public static readonly FINALIZATION = 44;
    public static readonly FINALLY = 45;
    public static readonly FOR = 46;
    public static readonly FORWARD = 47;
    public static readonly FUNCTION = 48;
    public static readonly GOTO = 49;
    public static readonly HELPER = 50;
    public static readonly IF = 51;
    public static readonly IMPLEMENTATION = 52;
    public static readonly IMPLEMENTS = 53;
    public static readonly IN = 54;
    public static readonly INDEX = 55;
    public static readonly INHERITED = 56;
    public static readonly INITIALIZATION = 57;
    public static readonly INLINE = 58;
    public static readonly INTERFACE = 59;
    public static readonly IS = 60;
    public static readonly LABEL = 61;
    public static readonly LIBRARY = 62;
    public static readonly LOCAL = 63;
    public static readonly MESSAGE = 64;
    public static readonly MOD = 65;
    public static readonly NAME = 66;
    public static readonly NEAR = 67;
    public static readonly NIL = 68;
    public static readonly NODEFAULT = 69;
    public static readonly NOT = 70;
    public static readonly OBJECT = 71;
    public static readonly OF = 72;
    public static readonly ON = 73;
    public static readonly OPERATOR = 74;
    public static readonly OR = 75;
    public static readonly OUT = 76;
    public static readonly OVERLOAD = 77;
    public static readonly OVERRIDE = 78;
    public static readonly PACKAGE = 79;
    public static readonly PACKED = 80;
    public static readonly PASCAL = 81;
    public static readonly PLATFORM = 82;
    public static readonly POINTER = 83;
    public static readonly PRIVATE = 84;
    public static readonly PROCEDURE = 85;
    public static readonly PROGRAM = 86;
    public static readonly PROPERTY = 87;
    public static readonly PROTECTED = 88;
    public static readonly PUBLIC = 89;
    public static readonly PUBLISHED = 90;
    public static readonly RAISE = 91;
    public static readonly READ = 92;
    public static readonly READONLY = 93;
    public static readonly RECORD = 94;
    public static readonly REFERENCE = 95;
    public static readonly REGISTER = 96;
    public static readonly REINTRODUCE = 97;
    public static readonly REMOVE = 98;
    public static readonly REPEAT = 99;
    public static readonly REQUIRES = 100;
    public static readonly RESIDENT = 101;
    public static readonly RESOURCESTRING = 102;
    public static readonly SAFECALL = 103;
    public static readonly SEALED = 104;
    public static readonly SET = 105;
    public static readonly SHL = 106;
    public static readonly SHR = 107;
    public static readonly STATIC = 108;
    public static readonly STDCALL = 109;
    public static readonly STORED = 110;
    public static readonly STRICT = 111;
    public static readonly STRING = 112;
    public static readonly THEN = 113;
    public static readonly THREADVAR = 114;
    public static readonly TO = 115;
    public static readonly TRY = 116;
    public static readonly TYPE = 117;
    public static readonly UNIT = 118;
    public static readonly UNSAFE = 119;
    public static readonly UNTIL = 120;
    public static readonly USES = 121;
    public static readonly VAR = 122;
    public static readonly VARARGS = 123;
    public static readonly VARIANT = 124;
    public static readonly VIRTUAL = 125;
    public static readonly WHILE = 126;
    public static readonly WITH = 127;
    public static readonly WRITE = 128;
    public static readonly WRITEONLY = 129;
    public static readonly XOR = 130;
    public static readonly FALSE = 131;
    public static readonly TRUE = 132;
    public static readonly PLUS = 133;
    public static readonly MINUS = 134;
    public static readonly STAR = 135;
    public static readonly SLASH = 136;
    public static readonly ASSIGN = 137;
    public static readonly COMMA = 138;
    public static readonly SEMI = 139;
    public static readonly COLON = 140;
    public static readonly EQUAL = 141;
    public static readonly NOT_EQUAL = 142;
    public static readonly LT = 143;
    public static readonly LE = 144;
    public static readonly GE = 145;
    public static readonly GT = 146;
    public static readonly LPAREN = 147;
    public static readonly RPAREN = 148;
    public static readonly LBRACK = 149;
    public static readonly LBRACK2 = 150;
    public static readonly RBRACK = 151;
    public static readonly RBRACK2 = 152;
    public static readonly POINTER2 = 153;
    public static readonly AT2 = 154;
    public static readonly DOT = 155;
    public static readonly DOTDOT = 156;
    public static readonly LCURLY = 157;
    public static readonly RCURLY = 158;
    public static readonly AMBER = 159;
    public static readonly DOUBLEAT = 160;
    public static readonly TkGlobalFunction = 161;
    public static readonly TkFunctionName = 162;
    public static readonly TkFunctionArgs = 163;
    public static readonly TkFunctionBody = 164;
    public static readonly TkFunctionReturn = 165;
    public static readonly TkCustomAttribute = 166;
    public static readonly TkCustomAttributeArgs = 167;
    public static readonly TkNewType = 168;
    public static readonly TkClass = 169;
    public static readonly TkRecord = 170;
    public static readonly TkRecordHelper = 171;
    public static readonly TkInterface = 172;
    public static readonly TkObject = 173;
    public static readonly TkClassOfType = 174;
    public static readonly TkVariableType = 175;
    public static readonly TkVariableIdents = 176;
    public static readonly TkVariableParam = 177;
    public static readonly TkGuid = 178;
    public static readonly TkClassParents = 179;
    public static readonly TkClassField = 180;
    public static readonly TkAnonymousExpression = 181;
    public static readonly TkIdentifier = 182;
    public static readonly TkIntNum = 183;
    public static readonly TkRealNum = 184;
    public static readonly TkHexNum = 185;
    public static readonly TkAsmHexNum = 186;
    public static readonly TkAsmHexLabel = 187;
    public static readonly QuotedString = 188;
    public static readonly ControlString = 189;
    public static readonly Hexdigitseq = 190;
    public static readonly COMMENT = 191;
    public static readonly WS = 192;
    public static readonly UnicodeBOM = 193;
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
    public static readonly RULE_expression = 113;
    public static readonly RULE_anonymousExpression = 114;
    public static readonly RULE_simpleExpression = 115;
    public static readonly RULE_factor = 116;
    public static readonly RULE_stringFactor = 117;
    public static readonly RULE_setSection = 118;
    public static readonly RULE_designator = 119;
    public static readonly RULE_designatorItem = 120;
    public static readonly RULE_expressionList = 121;
    public static readonly RULE_colonConstruct = 122;
    public static readonly RULE_operator = 123;
    public static readonly RULE_relOp = 124;
    public static readonly RULE_statement = 125;
    public static readonly RULE_ifStatement = 126;
    public static readonly RULE_caseStatement = 127;
    public static readonly RULE_caseItem = 128;
    public static readonly RULE_caseLabel = 129;
    public static readonly RULE_repeatStatement = 130;
    public static readonly RULE_whileStatement = 131;
    public static readonly RULE_forStatement = 132;
    public static readonly RULE_withStatement = 133;
    public static readonly RULE_withItem = 134;
    public static readonly RULE_compoundStatement = 135;
    public static readonly RULE_statementList = 136;
    public static readonly RULE_simpleStatement = 137;
    public static readonly RULE_gotoStatement = 138;
    public static readonly RULE_constExpression = 139;
    public static readonly RULE_recordConstExpression = 140;
    public static readonly RULE_tryStatement = 141;
    public static readonly RULE_handlerList = 142;
    public static readonly RULE_handler = 143;
    public static readonly RULE_handlerIdent = 144;
    public static readonly RULE_handlerStatement = 145;
    public static readonly RULE_raiseStatement = 146;
    public static readonly RULE_assemblerStatement = 147;
    public static readonly RULE_methodDirective = 148;
    public static readonly RULE_functionDirective = 149;
    public static readonly RULE_reintroduceDirective = 150;
    public static readonly RULE_overloadDirective = 151;
    public static readonly RULE_bindingDirective = 152;
    public static readonly RULE_abstractDirective = 153;
    public static readonly RULE_inlineDirective = 154;
    public static readonly RULE_callConvention = 155;
    public static readonly RULE_callConventionNoSemi = 156;
    public static readonly RULE_oldCallConventionDirective = 157;
    public static readonly RULE_hintingDirective = 158;
    public static readonly RULE_externalDirective = 159;
    public static readonly RULE_externalSpecifier = 160;
    public static readonly RULE_dispIDDirective = 161;
    public static readonly RULE_ident = 162;
    public static readonly RULE_usedKeywordsAsNames = 163;
    public static readonly RULE_identList = 164;
    public static readonly RULE_identListFlat = 165;
    public static readonly RULE_label = 166;
    public static readonly RULE_intNum = 167;
    public static readonly RULE_realNum = 168;
    public static readonly RULE_namespacedQualifiedIdent = 169;
    public static readonly RULE_namespaceName = 170;
    public static readonly RULE_qualifiedIdent = 171;

    public static readonly literalNames = [
        null, "'absolute'", "'abstract'", "'add'", "'and'", "'ansistring'", 
        "'array'", "'as'", "'asm'", "'assembler'", "'assembly'", "'at'", 
        "'automated'", "'begin'", "'break'", "'case'", "'cdecl'", "'class'", 
        "'const'", "'constructor'", "'contains'", "'continue'", "'default'", 
        "'deprecated'", "'destructor'", "'dispid'", "'dispinterface'", "'div'", 
        "'do'", "'downto'", "'dq'", "'dw'", "'dynamic'", "'else'", "'end'", 
        "'except'", "'exit'", "'experimental'", "'export'", "'exports'", 
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
        null, "ABSOLUTE", "ABSTRACT", "ADD", "AND", "ANSISTRING", "ARRAY", 
        "AS", "ASM", "ASSEMBLER", "ASSEMBLY", "AT", "AUTOMATED", "BEGIN", 
        "BREAK", "CASE", "CDECL", "CLASS", "CONST", "CONSTRUCTOR", "CONTAINS", 
        "CONTINUE", "DEFAULT", "DEPRECATED", "DESTRUCTOR", "DISPID", "DISPINTERFACE", 
        "DIV", "DO", "DOWNTO", "DQ", "DW", "DYNAMIC", "ELSE", "END", "EXCEPT", 
        "EXIT", "EXPERIMENTAL", "EXPORT", "EXPORTS", "EXTERNAL", "FAR", 
        "FILE", "FINAL", "FINALIZATION", "FINALLY", "FOR", "FORWARD", "FUNCTION", 
        "GOTO", "HELPER", "IF", "IMPLEMENTATION", "IMPLEMENTS", "IN", "INDEX", 
        "INHERITED", "INITIALIZATION", "INLINE", "INTERFACE", "IS", "LABEL", 
        "LIBRARY", "LOCAL", "MESSAGE", "MOD", "NAME", "NEAR", "NIL", "NODEFAULT", 
        "NOT", "OBJECT", "OF", "ON", "OPERATOR", "OR", "OUT", "OVERLOAD", 
        "OVERRIDE", "PACKAGE", "PACKED", "PASCAL", "PLATFORM", "POINTER", 
        "PRIVATE", "PROCEDURE", "PROGRAM", "PROPERTY", "PROTECTED", "PUBLIC", 
        "PUBLISHED", "RAISE", "READ", "READONLY", "RECORD", "REFERENCE", 
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
        "procBody", "expression", "anonymousExpression", "simpleExpression", 
        "factor", "stringFactor", "setSection", "designator", "designatorItem", 
        "expressionList", "colonConstruct", "operator", "relOp", "statement", 
        "ifStatement", "caseStatement", "caseItem", "caseLabel", "repeatStatement", 
        "whileStatement", "forStatement", "withStatement", "withItem", "compoundStatement", 
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
            this.state = 348;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                this.state = 344;
                this.program();
                }
                break;
            case delphiParser.LIBRARY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 345;
                this.library();
                }
                break;
            case delphiParser.UNIT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 346;
                this.unit();
                }
                break;
            case delphiParser.PACKAGE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 347;
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
            this.state = 351;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 86) {
                {
                this.state = 350;
                this.programHead();
                }
            }

            this.state = 354;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 121) {
                {
                this.state = 353;
                this.usesFileClause();
                }
            }

            this.state = 356;
            this.block();
            this.state = 357;
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
            this.state = 359;
            this.match(delphiParser.PROGRAM);
            this.state = 360;
            this.namespaceName();
            this.state = 362;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 147) {
                {
                this.state = 361;
                this.programParmSeq();
                }
            }

            this.state = 364;
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
            this.state = 366;
            this.match(delphiParser.LPAREN);
            this.state = 375;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7358504) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1477050501) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 190844969) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 278535) !== 0) || _la === 159 || _la === 182) {
                {
                this.state = 367;
                this.ident();
                this.state = 372;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 138) {
                    {
                    {
                    this.state = 368;
                    this.match(delphiParser.COMMA);
                    this.state = 369;
                    this.ident();
                    }
                    }
                    this.state = 374;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 377;
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
            this.state = 379;
            this.libraryHead();
            this.state = 381;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 121) {
                {
                this.state = 380;
                this.usesFileClause();
                }
            }

            this.state = 383;
            this.block();
            this.state = 384;
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
            this.state = 386;
            this.match(delphiParser.LIBRARY);
            this.state = 387;
            this.namespaceName();
            this.state = 391;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 37 || _la === 62 || _la === 82) {
                {
                {
                this.state = 388;
                this.hintingDirective();
                }
                }
                this.state = 393;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 394;
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
            this.state = 396;
            this.packageHead();
            this.state = 397;
            this.requiresClause();
            this.state = 399;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 398;
                this.containsClause();
                }
            }

            this.state = 401;
            this.match(delphiParser.END);
            this.state = 402;
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
            this.state = 404;
            this.match(delphiParser.PACKAGE);
            this.state = 405;
            this.namespaceName();
            this.state = 406;
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
            this.state = 408;
            this.unitHead();
            this.state = 409;
            this.unitInterface();
            this.state = 410;
            this.unitImplementation();
            this.state = 411;
            this.unitBlock();
            this.state = 412;
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
            this.state = 414;
            this.match(delphiParser.UNIT);
            this.state = 415;
            this.namespaceName();
            this.state = 419;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 37 || _la === 62 || _la === 82) {
                {
                {
                this.state = 416;
                this.hintingDirective();
                }
                }
                this.state = 421;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 422;
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
            this.state = 424;
            this.match(delphiParser.INTERFACE);
            this.state = 426;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 121) {
                {
                this.state = 425;
                this.usesClause();
                }
            }

            this.state = 431;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 2151678087) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 537001985) !== 0) || _la === 117 || _la === 122) {
                {
                {
                this.state = 428;
                this.interfaceDecl();
                }
                }
                this.state = 433;
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
            this.state = 434;
            this.match(delphiParser.IMPLEMENTATION);
            this.state = 436;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 121) {
                {
                this.state = 435;
                this.usesClause();
                }
            }

            this.state = 441;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 2151678087) !== 0) || _la === 61 || _la === 85 || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 1085441) !== 0)) {
                {
                {
                this.state = 438;
                this.declSection();
                }
                }
                this.state = 443;
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
            this.state = 449;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.INITIALIZATION:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 444;
                this.unitInitialization();
                this.state = 445;
                this.match(delphiParser.END);
                }
                break;
            case delphiParser.BEGIN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 447;
                this.compoundStatement();
                }
                break;
            case delphiParser.END:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 448;
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
            this.state = 451;
            this.match(delphiParser.INITIALIZATION);
            this.state = 452;
            this.statementList();
            this.state = 454;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 453;
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
            this.state = 456;
            this.match(delphiParser.FINALIZATION);
            this.state = 457;
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
            this.state = 459;
            this.match(delphiParser.CONTAINS);
            this.state = 460;
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
            this.state = 462;
            this.match(delphiParser.REQUIRES);
            this.state = 463;
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
            this.state = 465;
            this.match(delphiParser.USES);
            this.state = 466;
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
            this.state = 468;
            this.match(delphiParser.USES);
            this.state = 469;
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
            this.state = 471;
            this.namespaceFileName();
            this.state = 476;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 472;
                this.match(delphiParser.COMMA);
                this.state = 473;
                this.namespaceFileName();
                }
                }
                this.state = 478;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 479;
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
            this.state = 481;
            this.namespaceName();
            this.state = 484;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54) {
                {
                this.state = 482;
                this.match(delphiParser.IN);
                this.state = 483;
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
            this.state = 486;
            this.namespaceName();
            this.state = 491;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 487;
                this.match(delphiParser.COMMA);
                this.state = 488;
                this.namespaceName();
                }
                }
                this.state = 493;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 494;
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
            this.state = 499;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 496;
                    this.declSection();
                    }
                    }
                }
                this.state = 501;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            }
            this.state = 503;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 502;
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
            this.state = 507;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.BEGIN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 505;
                this.compoundStatement();
                }
                break;
            case delphiParser.ASM:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 506;
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
            this.state = 517;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 509;
                this.labelDeclSection();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 510;
                this.constSection();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 511;
                this.typeSection();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 512;
                this.varSection();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 513;
                this.exportedProcHeading();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 514;
                this.methodDecl();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 515;
                this.procDecl();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 516;
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
            this.state = 526;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 519;
                this.procDecl();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 520;
                this.methodDecl();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 521;
                this.typeSection();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 522;
                this.varSection();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 523;
                this.exportedProcHeading();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 524;
                this.exportsSection();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 525;
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
            this.state = 528;
            this.match(delphiParser.LABEL);
            this.state = 529;
            this.label();
            this.state = 534;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 530;
                this.match(delphiParser.COMMA);
                this.state = 531;
                this.label();
                }
                }
                this.state = 536;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 537;
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
            this.state = 539;
            this.constKey();
            this.state = 543;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 540;
                    this.constDeclaration();
                    }
                    }
                }
                this.state = 545;
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
            this.state = 546;
            _la = this.tokenStream.LA(1);
            if(!(_la === 18 || _la === 102)) {
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
            this.state = 548;
            this.ident();
            this.state = 551;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140) {
                {
                this.state = 549;
                this.match(delphiParser.COLON);
                this.state = 550;
                this.typeDecl();
                }
            }

            this.state = 553;
            this.match(delphiParser.EQUAL);
            this.state = 554;
            this.constExpression();
            this.state = 558;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 37 || _la === 62 || _la === 82) {
                {
                {
                this.state = 555;
                this.hintingDirective();
                }
                }
                this.state = 560;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 561;
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
            this.state = 563;
            this.match(delphiParser.TYPE);
            this.state = 564;
            this.typeDeclaration();
            this.state = 568;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 565;
                    this.typeDeclaration();
                    }
                    }
                }
                this.state = 570;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
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
            this.state = 571;
            this.genericTypeIdent();
            this.state = 572;
            this.match(delphiParser.EQUAL);
            this.state = 573;
            this.typeDecl();
            this.state = 577;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 37 || _la === 62 || _la === 82) {
                {
                {
                this.state = 574;
                this.hintingDirective();
                }
                }
                this.state = 579;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 580;
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
            this.state = 582;
            this.varKey();
            this.state = 583;
            this.varDeclaration();
            this.state = 587;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 584;
                    this.varDeclaration();
                    }
                    }
                }
                this.state = 589;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
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
            this.state = 590;
            _la = this.tokenStream.LA(1);
            if(!(_la === 114 || _la === 122)) {
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
            this.state = 592;
            this.identListFlat();
            this.state = 593;
            this.match(delphiParser.COLON);
            this.state = 594;
            this.typeDecl();
            this.state = 596;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1 || _la === 141) {
                {
                this.state = 595;
                this.varValueSpec();
                }
            }

            this.state = 601;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 37 || _la === 62 || _la === 82) {
                {
                {
                this.state = 598;
                this.hintingDirective();
                }
                }
                this.state = 603;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 604;
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
            this.state = 612;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 606;
                this.match(delphiParser.ABSOLUTE);
                this.state = 607;
                this.ident();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 608;
                this.match(delphiParser.ABSOLUTE);
                this.state = 609;
                this.constExpression();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 610;
                this.match(delphiParser.EQUAL);
                this.state = 611;
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
            this.state = 614;
            this.match(delphiParser.EXPORTS);
            this.state = 615;
            this.ident();
            this.state = 616;
            this.exportItem();
            this.state = 623;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 617;
                this.match(delphiParser.COMMA);
                this.state = 618;
                this.ident();
                this.state = 619;
                this.exportItem();
                }
                }
                this.state = 625;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 626;
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
            this.state = 633;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 147) {
                {
                this.state = 628;
                this.match(delphiParser.LPAREN);
                this.state = 630;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7620648) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1477050501) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 190844969) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 282631) !== 0) || _la === 159 || _la === 182) {
                    {
                    this.state = 629;
                    this.formalParameterList();
                    }
                }

                this.state = 632;
                this.match(delphiParser.RPAREN);
                }
            }

            this.state = 637;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 55) {
                {
                this.state = 635;
                this.match(delphiParser.INDEX);
                this.state = 636;
                this.expression();
                }
            }

            this.state = 641;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 66) {
                {
                this.state = 639;
                this.match(delphiParser.NAME);
                this.state = 640;
                this.expression();
                }
            }

            this.state = 644;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 101) {
                {
                this.state = 643;
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
            this.state = 659;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 646;
                this.strucType();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 647;
                this.pointerType();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 648;
                this.stringType();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 649;
                this.procedureType();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 650;
                this.variantType();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 652;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 117) {
                    {
                    this.state = 651;
                    this.match(delphiParser.TYPE);
                    }
                }

                this.state = 654;
                this.typeId();
                this.state = 656;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 41, this.context) ) {
                case 1:
                    {
                    this.state = 655;
                    this.genericPostfix();
                    }
                    break;
                }
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 658;
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
            this.state = 662;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 80) {
                {
                this.state = 661;
                this.match(delphiParser.PACKED);
                }
            }

            this.state = 664;
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
            this.state = 670;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.ARRAY:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 666;
                this.arrayType();
                }
                break;
            case delphiParser.SET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 667;
                this.setType();
                }
                break;
            case delphiParser.FILE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 668;
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
                this.state = 669;
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
            this.state = 672;
            this.match(delphiParser.ARRAY);
            this.state = 687;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 673;
                this.match(delphiParser.LBRACK);
                this.state = 675;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7358504) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1478103173) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1526890829) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 31735815) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 203857) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 223) !== 0)) {
                    {
                    this.state = 674;
                    this.arrayIndex();
                    }
                }

                this.state = 683;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 138) {
                    {
                    {
                    this.state = 677;
                    this.match(delphiParser.COMMA);
                    this.state = 679;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7358504) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1478103173) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1526890829) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 31735815) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 203857) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 223) !== 0)) {
                        {
                        this.state = 678;
                        this.arrayIndex();
                        }
                    }

                    }
                    }
                    this.state = 685;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 686;
                this.match(delphiParser.RBRACK);
                }
            }

            this.state = 689;
            this.match(delphiParser.OF);
            this.state = 690;
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
            this.state = 697;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 692;
                this.typeId();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 693;
                this.expression();
                this.state = 694;
                this.match(delphiParser.DOTDOT);
                this.state = 695;
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
            this.state = 701;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.CONST:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 699;
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
                this.state = 700;
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
            this.state = 703;
            this.match(delphiParser.SET);
            this.state = 704;
            this.match(delphiParser.OF);
            this.state = 705;
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
            this.state = 707;
            this.match(delphiParser.FILE);
            this.state = 710;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context) ) {
            case 1:
                {
                this.state = 708;
                this.match(delphiParser.OF);
                this.state = 709;
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
            this.state = 715;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.POINTER2:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 712;
                this.match(delphiParser.POINTER2);
                this.state = 713;
                this.typeDecl();
                }
                break;
            case delphiParser.POINTER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 714;
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
            this.state = 731;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 717;
                this.match(delphiParser.STRING);
                this.state = 722;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
                case 1:
                    {
                    this.state = 718;
                    this.match(delphiParser.LBRACK);
                    this.state = 719;
                    this.expression();
                    this.state = 720;
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
                this.state = 725;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 117) {
                    {
                    this.state = 724;
                    this.match(delphiParser.TYPE);
                    }
                }

                this.state = 727;
                this.match(delphiParser.ANSISTRING);
                this.state = 729;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
                case 1:
                    {
                    this.state = 728;
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
            this.state = 733;
            this.match(delphiParser.LPAREN);
            this.state = 734;
            this.intNum();
            this.state = 735;
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
            this.state = 740;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 737;
                this.methodType();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 738;
                this.simpleProcedureType();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 739;
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
            this.state = 742;
            this.procedureTypeHeading();
            this.state = 743;
            this.match(delphiParser.OF);
            this.state = 744;
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
            this.state = 746;
            this.procedureTypeHeading();
            this.state = 751;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
            case 1:
                {
                this.state = 748;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 139) {
                    {
                    this.state = 747;
                    this.match(delphiParser.SEMI);
                    }
                }

                this.state = 750;
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
            this.state = 753;
            this.match(delphiParser.REFERENCE);
            this.state = 754;
            this.match(delphiParser.TO);
            this.state = 755;
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
            this.state = 767;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.FUNCTION:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 757;
                this.match(delphiParser.FUNCTION);
                this.state = 759;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 758;
                    this.formalParameterSection();
                    }
                }

                this.state = 761;
                this.match(delphiParser.COLON);
                this.state = 762;
                this.typeDecl();
                }
                break;
            case delphiParser.PROCEDURE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 763;
                this.match(delphiParser.PROCEDURE);
                this.state = 765;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
                case 1:
                    {
                    this.state = 764;
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
            this.state = 769;
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
            this.state = 774;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 63, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 771;
                this.ident();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 772;
                this.subRangeType();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 773;
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
            this.state = 776;
            this.constExpression();
            this.state = 779;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
            case 1:
                {
                this.state = 777;
                this.match(delphiParser.DOTDOT);
                this.state = 778;
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
            this.state = 781;
            this.match(delphiParser.LPAREN);
            this.state = 782;
            this.ident();
            this.state = 785;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 141) {
                {
                this.state = 783;
                this.match(delphiParser.EQUAL);
                this.state = 784;
                this.expression();
                }
            }

            this.state = 795;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 787;
                this.match(delphiParser.COMMA);
                this.state = 788;
                this.ident();
                this.state = 791;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 141) {
                    {
                    this.state = 789;
                    this.match(delphiParser.EQUAL);
                    this.state = 790;
                    this.expression();
                    }
                }

                }
                }
                this.state = 797;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 798;
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
            this.state = 800;
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
            this.state = 802;
            this.qualifiedIdent();
            this.state = 804;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 143) {
                {
                this.state = 803;
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
            this.state = 808;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 69, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 806;
                this.simpleGenericDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 807;
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
            this.state = 810;
            this.match(delphiParser.LT);
            this.state = 811;
            this.ident();
            this.state = 816;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 812;
                this.match(delphiParser.COMMA);
                this.state = 813;
                this.ident();
                }
                }
                this.state = 818;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 819;
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
            this.state = 821;
            this.match(delphiParser.LT);
            this.state = 822;
            this.constrainedGeneric();
            this.state = 827;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 823;
                this.match(delphiParser.SEMI);
                this.state = 824;
                this.constrainedGeneric();
                }
                }
                this.state = 829;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 830;
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
            this.state = 832;
            this.ident();
            this.state = 842;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140) {
                {
                this.state = 833;
                this.match(delphiParser.COLON);
                this.state = 834;
                this.genericConstraint();
                this.state = 839;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 138) {
                    {
                    {
                    this.state = 835;
                    this.match(delphiParser.COMMA);
                    this.state = 836;
                    this.genericConstraint();
                    }
                    }
                    this.state = 841;
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
            this.state = 846;
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
                this.state = 844;
                this.ident();
                }
                break;
            case delphiParser.CLASS:
            case delphiParser.CONSTRUCTOR:
            case delphiParser.RECORD:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 845;
                _la = this.tokenStream.LA(1);
                if(!(_la === 17 || _la === 19 || _la === 94)) {
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
            this.state = 848;
            this.match(delphiParser.LT);
            this.state = 849;
            this.typeDecl();
            this.state = 854;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 850;
                this.match(delphiParser.COMMA);
                this.state = 851;
                this.typeDecl();
                }
                }
                this.state = 856;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 857;
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
            this.state = 866;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 859;
                this.classTypeTypeDecl();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 860;
                this.classTypeDecl();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 861;
                this.classHelperDecl();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 862;
                this.interfaceTypeDecl();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 863;
                this.objectDecl();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 864;
                this.recordDecl();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 865;
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
            this.state = 868;
            this.match(delphiParser.CLASS);
            this.state = 869;
            this.match(delphiParser.OF);
            this.state = 870;
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
            this.state = 890;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 872;
                this.match(delphiParser.CLASS);
                this.state = 874;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2 || _la === 104) {
                    {
                    this.state = 873;
                    this.classState();
                    }
                }

                this.state = 877;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 876;
                    this.classParent();
                    }
                }

                this.state = 882;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25057320) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1477054597) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 2339336233) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 282775) !== 0) || _la === 159 || _la === 182) {
                    {
                    {
                    this.state = 879;
                    this.classItem();
                    }
                    }
                    this.state = 884;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 885;
                this.match(delphiParser.END);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 886;
                this.match(delphiParser.CLASS);
                this.state = 888;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context) ) {
                case 1:
                    {
                    this.state = 887;
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
            this.state = 892;
            _la = this.tokenStream.LA(1);
            if(!(_la === 2 || _la === 104)) {
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
            this.state = 894;
            this.match(delphiParser.LPAREN);
            this.state = 895;
            this.genericTypeIdent();
            this.state = 900;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 896;
                this.match(delphiParser.COMMA);
                this.state = 897;
                this.genericTypeIdent();
                }
                }
                this.state = 902;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 903;
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
            this.state = 915;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 905;
                this.visibility();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 906;
                this.classMethod();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 907;
                this.classField();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 908;
                this.classProperty();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 909;
                this.constSection();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 910;
                this.typeSection();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 912;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 911;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 914;
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
            this.state = 917;
            this.match(delphiParser.CLASS);
            this.state = 918;
            this.match(delphiParser.HELPER);
            this.state = 920;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 147) {
                {
                this.state = 919;
                this.classParent();
                }
            }

            this.state = 922;
            this.match(delphiParser.FOR);
            this.state = 923;
            this.typeId();
            this.state = 927;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 17436672) !== 0) || _la === 48 || _la === 74 || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 1207959675) !== 0) || _la === 122) {
                {
                {
                this.state = 924;
                this.classHelperItem();
                }
                }
                this.state = 929;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 930;
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
            this.state = 939;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 932;
                this.visibility();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 933;
                this.classMethod();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 934;
                this.classProperty();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 936;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 935;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 938;
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
            this.state = 960;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 93, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 941;
                this.interfaceKey();
                this.state = 943;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 942;
                    this.classParent();
                    }
                }

                this.state = 946;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 149) {
                    {
                    this.state = 945;
                    this.interfaceGuid();
                    }
                }

                this.state = 951;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 2147483781) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & 10241) !== 0)) {
                    {
                    {
                    this.state = 948;
                    this.interfaceItem();
                    }
                    }
                    this.state = 953;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 954;
                this.match(delphiParser.END);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 956;
                this.interfaceKey();
                this.state = 958;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context) ) {
                case 1:
                    {
                    this.state = 957;
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
            this.state = 962;
            _la = this.tokenStream.LA(1);
            if(!(_la === 26 || _la === 59)) {
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
            this.state = 964;
            this.match(delphiParser.LBRACK);
            this.state = 965;
            this.match(delphiParser.QuotedString);
            this.state = 966;
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
            this.state = 973;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 968;
                this.classMethod();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 970;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 94, this.context) ) {
                case 1:
                    {
                    this.state = 969;
                    this.match(delphiParser.CLASS);
                    }
                    break;
                }
                this.state = 972;
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
            this.state = 975;
            this.match(delphiParser.OBJECT);
            this.state = 977;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 147) {
                {
                this.state = 976;
                this.classParent();
                }
            }

            this.state = 982;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 24795176) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1477054597) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 191787049) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 278535) !== 0) || _la === 159 || _la === 182) {
                {
                {
                this.state = 979;
                this.objectItem();
                }
                }
                this.state = 984;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 985;
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
            this.state = 990;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 98, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 987;
                this.visibility();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 988;
                this.classMethod();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 989;
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
            this.state = 994;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 99, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 992;
                this.simpleRecord();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 993;
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
            this.state = 996;
            this.match(delphiParser.RECORD);
            this.state = 1000;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 100, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 997;
                    this.recordField();
                    }
                    }
                }
                this.state = 1002;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 100, this.context);
            }
            this.state = 1006;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25057320) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1477054597) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 2339336233) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 282775) !== 0) || _la === 159 || _la === 182) {
                {
                {
                this.state = 1003;
                this.recordItem();
                }
                }
                this.state = 1008;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1009;
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
            this.state = 1011;
            this.match(delphiParser.RECORD);
            this.state = 1015;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7358504) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1477050501) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 190844969) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 278535) !== 0) || _la === 159 || _la === 182) {
                {
                {
                this.state = 1012;
                this.recordField();
                }
                }
                this.state = 1017;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1018;
            this.recordVariantSection();
            this.state = 1019;
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
            this.state = 1031;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 104, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1021;
                this.visibility();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1022;
                this.classMethod();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1023;
                this.classProperty();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1024;
                this.constSection();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1025;
                this.typeSection();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1026;
                this.recordField();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1028;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 1027;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 1030;
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
            this.state = 1033;
            this.identList();
            this.state = 1034;
            this.match(delphiParser.COLON);
            this.state = 1035;
            this.typeDecl();
            this.state = 1039;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 37 || _la === 62 || _la === 82) {
                {
                {
                this.state = 1036;
                this.hintingDirective();
                }
                }
                this.state = 1041;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1043;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 139) {
                {
                this.state = 1042;
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
            this.state = 1045;
            this.identList();
            this.state = 1046;
            this.match(delphiParser.COLON);
            this.state = 1047;
            this.typeDecl();
            this.state = 1051;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 37 || _la === 62 || _la === 82) {
                {
                {
                this.state = 1048;
                this.hintingDirective();
                }
                }
                this.state = 1053;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1055;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 139) {
                {
                this.state = 1054;
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
            this.state = 1057;
            this.match(delphiParser.CASE);
            this.state = 1061;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 109, this.context) ) {
            case 1:
                {
                this.state = 1058;
                this.ident();
                this.state = 1059;
                this.match(delphiParser.COLON);
                }
                break;
            }
            this.state = 1063;
            this.typeDecl();
            this.state = 1064;
            this.match(delphiParser.OF);
            this.state = 1067;
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
                this.state = 1065;
                this.recordVariant();
                }
                break;
            case delphiParser.SEMI:
                {
                this.state = 1066;
                this.match(delphiParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1073;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7358504) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1478103173) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1526890829) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 568606727) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 203857) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 223) !== 0)) {
                {
                this.state = 1071;
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
                    this.state = 1069;
                    this.recordVariant();
                    }
                    break;
                case delphiParser.SEMI:
                    {
                    this.state = 1070;
                    this.match(delphiParser.SEMI);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 1075;
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
            this.state = 1076;
            this.constExpression();
            this.state = 1081;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 1077;
                this.match(delphiParser.COMMA);
                this.state = 1078;
                this.constExpression();
                }
                }
                this.state = 1083;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1084;
            this.match(delphiParser.COLON);
            this.state = 1085;
            this.match(delphiParser.LPAREN);
            this.state = 1089;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7358504) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1477050501) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 190844969) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 278535) !== 0) || _la === 159 || _la === 182) {
                {
                {
                this.state = 1086;
                this.recordVariantField();
                }
                }
                this.state = 1091;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1092;
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
            this.state = 1094;
            this.match(delphiParser.RECORD);
            this.state = 1095;
            this.match(delphiParser.HELPER);
            this.state = 1096;
            this.match(delphiParser.FOR);
            this.state = 1097;
            this.typeId();
            this.state = 1101;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 17436672) !== 0) || _la === 48 || _la === 74 || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 134217851) !== 0)) {
                {
                {
                this.state = 1098;
                this.recordHelperItem();
                }
                }
                this.state = 1103;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1104;
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
            this.state = 1109;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 116, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1106;
                this.visibility();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1107;
                this.classMethod();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1108;
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
            this.state = 1164;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1112;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 1111;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 1114;
                this.methodKey();
                this.state = 1115;
                this.ident();
                this.state = 1117;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 143) {
                    {
                    this.state = 1116;
                    this.genericDefinition();
                    }
                }

                this.state = 1120;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1119;
                    this.formalParameterSection();
                    }
                }

                this.state = 1122;
                this.match(delphiParser.SEMI);
                this.state = 1126;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 120, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1123;
                        this.methodDirective();
                        }
                        }
                    }
                    this.state = 1128;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 120, this.context);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1130;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 1129;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 1132;
                this.match(delphiParser.FUNCTION);
                this.state = 1133;
                this.ident();
                this.state = 1135;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 143) {
                    {
                    this.state = 1134;
                    this.genericDefinition();
                    }
                }

                this.state = 1138;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1137;
                    this.formalParameterSection();
                    }
                }

                this.state = 1140;
                this.match(delphiParser.COLON);
                this.state = 1141;
                this.typeDecl();
                this.state = 1142;
                this.match(delphiParser.SEMI);
                this.state = 1146;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 124, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1143;
                        this.methodDirective();
                        }
                        }
                    }
                    this.state = 1148;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 124, this.context);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1150;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 1149;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 1152;
                this.match(delphiParser.OPERATOR);
                this.state = 1153;
                this.ident();
                this.state = 1155;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 143) {
                    {
                    this.state = 1154;
                    this.genericDefinition();
                    }
                }

                this.state = 1158;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1157;
                    this.formalParameterSection();
                    }
                }

                this.state = 1160;
                this.match(delphiParser.COLON);
                this.state = 1161;
                this.typeDecl();
                this.state = 1162;
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
            this.state = 1166;
            this.identList();
            this.state = 1167;
            this.match(delphiParser.COLON);
            this.state = 1168;
            this.typeDecl();
            this.state = 1169;
            this.match(delphiParser.SEMI);
            this.state = 1173;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 37 || _la === 62 || _la === 82) {
                {
                {
                this.state = 1170;
                this.hintingDirective();
                }
                }
                this.state = 1175;
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
            this.state = 1177;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 1176;
                this.match(delphiParser.CLASS);
                }
            }

            this.state = 1179;
            this.match(delphiParser.PROPERTY);
            this.state = 1180;
            this.ident();
            this.state = 1182;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 1181;
                this.classPropertyArray();
                }
            }

            this.state = 1186;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140) {
                {
                this.state = 1184;
                this.match(delphiParser.COLON);
                this.state = 1185;
                this.genericTypeIdent();
                }
            }

            this.state = 1189;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 55) {
                {
                this.state = 1188;
                this.classPropertyIndex();
                }
            }

            this.state = 1194;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & 2147483657) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 25165825) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 786433) !== 0)) {
                {
                {
                this.state = 1191;
                this.classPropertySpecifier();
                }
                }
                this.state = 1196;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1197;
            this.match(delphiParser.SEMI);
            this.state = 1201;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 135, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1198;
                    this.classPropertyEndSpecifier();
                    }
                    }
                }
                this.state = 1203;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 135, this.context);
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
            this.state = 1204;
            this.match(delphiParser.LBRACK);
            this.state = 1205;
            this.formalParameterList();
            this.state = 1206;
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
            this.state = 1208;
            this.match(delphiParser.INDEX);
            this.state = 1209;
            this.expression();
            this.state = 1211;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 136, this.context) ) {
            case 1:
                {
                this.state = 1210;
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
            this.state = 1222;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 137, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1213;
                this.classPropertyReadWrite();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1214;
                this.classPropertyDispInterface();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1215;
                this.match(delphiParser.STORED);
                this.state = 1216;
                this.expression();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1217;
                this.match(delphiParser.DEFAULT);
                this.state = 1218;
                this.expression();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1219;
                _la = this.tokenStream.LA(1);
                if(!(_la === 22 || _la === 69)) {
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
                this.state = 1220;
                this.match(delphiParser.IMPLEMENTS);
                this.state = 1221;
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
            this.state = 1236;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 138, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1224;
                this.match(delphiParser.STORED);
                this.state = 1225;
                this.expression();
                this.state = 1226;
                this.match(delphiParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1228;
                this.match(delphiParser.DEFAULT);
                this.state = 1229;
                this.expression();
                this.state = 1230;
                this.match(delphiParser.SEMI);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1232;
                this.match(delphiParser.DEFAULT);
                this.state = 1233;
                this.match(delphiParser.SEMI);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1234;
                this.match(delphiParser.NODEFAULT);
                this.state = 1235;
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
            this.state = 1254;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.READ:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1238;
                this.match(delphiParser.READ);
                this.state = 1239;
                this.qualifiedIdent();
                this.state = 1244;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 149) {
                    {
                    this.state = 1240;
                    this.match(delphiParser.LBRACK);
                    this.state = 1241;
                    this.expression();
                    this.state = 1242;
                    this.match(delphiParser.RBRACK);
                    }
                }

                }
                break;
            case delphiParser.WRITE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1246;
                this.match(delphiParser.WRITE);
                this.state = 1247;
                this.qualifiedIdent();
                this.state = 1252;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 149) {
                    {
                    this.state = 1248;
                    this.match(delphiParser.LBRACK);
                    this.state = 1249;
                    this.expression();
                    this.state = 1250;
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
            this.state = 1261;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.READONLY:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1256;
                this.match(delphiParser.READONLY);
                this.state = 1257;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.WRITEONLY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1258;
                this.match(delphiParser.WRITEONLY);
                this.state = 1259;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.DISPID:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1260;
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
            this.state = 1272;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 145, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1264;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 111) {
                    {
                    this.state = 1263;
                    this.match(delphiParser.STRICT);
                    }
                }

                this.state = 1266;
                this.match(delphiParser.PROTECTED);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1268;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 111) {
                    {
                    this.state = 1267;
                    this.match(delphiParser.STRICT);
                    }
                }

                this.state = 1270;
                this.match(delphiParser.PRIVATE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1271;
                _la = this.tokenStream.LA(1);
                if(!(_la === 12 || _la === 89 || _la === 90)) {
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
            this.state = 1300;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.PROCEDURE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1274;
                this.match(delphiParser.PROCEDURE);
                this.state = 1275;
                this.ident();
                this.state = 1277;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1276;
                    this.formalParameterSection();
                    }
                }

                this.state = 1279;
                this.match(delphiParser.COLON);
                this.state = 1280;
                this.typeDecl();
                this.state = 1281;
                this.match(delphiParser.SEMI);
                this.state = 1285;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 147, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1282;
                        this.functionDirective();
                        }
                        }
                    }
                    this.state = 1287;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 147, this.context);
                }
                }
                break;
            case delphiParser.FUNCTION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1288;
                this.match(delphiParser.FUNCTION);
                this.state = 1289;
                this.ident();
                this.state = 1291;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1290;
                    this.formalParameterSection();
                    }
                }

                this.state = 1293;
                this.match(delphiParser.SEMI);
                this.state = 1297;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 149, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1294;
                        this.functionDirective();
                        }
                        }
                    }
                    this.state = 1299;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 149, this.context);
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
            this.state = 1302;
            this.methodDeclHeading();
            this.state = 1303;
            this.match(delphiParser.SEMI);
            this.state = 1307;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 151, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1304;
                    this.methodDirective();
                    }
                    }
                }
                this.state = 1309;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 151, this.context);
            }
            this.state = 1311;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 152, this.context) ) {
            case 1:
                {
                this.state = 1310;
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
            this.state = 1343;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 160, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1314;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 1313;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 1316;
                this.methodKey();
                this.state = 1317;
                this.methodName();
                this.state = 1319;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1318;
                    this.formalParameterSection();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1322;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 1321;
                    this.match(delphiParser.CLASS);
                    }
                }

                this.state = 1324;
                this.match(delphiParser.FUNCTION);
                this.state = 1325;
                this.methodName();
                this.state = 1327;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1326;
                    this.formalParameterSection();
                    }
                }

                this.state = 1331;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 140) {
                    {
                    this.state = 1329;
                    this.match(delphiParser.COLON);
                    this.state = 1330;
                    this.typeDecl();
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1333;
                this.match(delphiParser.CLASS);
                this.state = 1334;
                this.match(delphiParser.OPERATOR);
                this.state = 1335;
                this.methodName();
                this.state = 1337;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1336;
                    this.formalParameterSection();
                    }
                }

                this.state = 1341;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 140) {
                    {
                    this.state = 1339;
                    this.match(delphiParser.COLON);
                    this.state = 1340;
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
            this.state = 1345;
            _la = this.tokenStream.LA(1);
            if(!(_la === 19 || _la === 24 || _la === 85)) {
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
            this.state = 1347;
            this.ident();
            this.state = 1349;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 143) {
                {
                this.state = 1348;
                this.genericDefinition();
                }
            }

            this.state = 1356;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context) ) {
            case 1:
                {
                this.state = 1351;
                this.match(delphiParser.DOT);
                this.state = 1352;
                this.ident();
                this.state = 1354;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 143) {
                    {
                    this.state = 1353;
                    this.genericDefinition();
                    }
                }

                }
                break;
            }
            this.state = 1358;
            this.match(delphiParser.DOT);
            this.state = 1359;
            this.ident();
            this.state = 1361;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 143) {
                {
                this.state = 1360;
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
            this.state = 1363;
            this.procDeclHeading();
            this.state = 1364;
            this.match(delphiParser.SEMI);
            this.state = 1368;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 165, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1365;
                    this.functionDirective();
                    }
                    }
                }
                this.state = 1370;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 165, this.context);
            }
            this.state = 1372;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context) ) {
            case 1:
                {
                this.state = 1371;
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
            this.state = 1387;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.PROCEDURE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1374;
                this.match(delphiParser.PROCEDURE);
                this.state = 1375;
                this.ident();
                this.state = 1377;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1376;
                    this.formalParameterSection();
                    }
                }

                }
                break;
            case delphiParser.FUNCTION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1379;
                this.match(delphiParser.FUNCTION);
                this.state = 1380;
                this.ident();
                this.state = 1382;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1381;
                    this.formalParameterSection();
                    }
                }

                this.state = 1384;
                this.match(delphiParser.COLON);
                this.state = 1385;
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
    public formalParameterSection(): FormalParameterSectionContext {
        let localContext = new FormalParameterSectionContext(this.context, this.state);
        this.enterRule(localContext, 214, delphiParser.RULE_formalParameterSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1389;
            this.match(delphiParser.LPAREN);
            this.state = 1391;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7620648) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1477050501) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 190844969) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 282631) !== 0) || _la === 159 || _la === 182) {
                {
                this.state = 1390;
                this.formalParameterList();
                }
            }

            this.state = 1393;
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
            this.state = 1395;
            this.formalParameter();
            this.state = 1400;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 1396;
                this.match(delphiParser.SEMI);
                this.state = 1397;
                this.formalParameter();
                }
                }
                this.state = 1402;
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
            this.state = 1404;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 172, this.context) ) {
            case 1:
                {
                this.state = 1403;
                this.parmType();
                }
                break;
            }
            this.state = 1406;
            this.identListFlat();
            this.state = 1409;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140) {
                {
                this.state = 1407;
                this.match(delphiParser.COLON);
                this.state = 1408;
                this.typeDecl();
                }
            }

            this.state = 1413;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 141) {
                {
                this.state = 1411;
                this.match(delphiParser.EQUAL);
                this.state = 1412;
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
            this.state = 1415;
            _la = this.tokenStream.LA(1);
            if(!(_la === 18 || _la === 76 || _la === 122)) {
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
            this.state = 1417;
            this.block();
            this.state = 1418;
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
            this.state = 1447;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.FORWARD:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1420;
                this.match(delphiParser.FORWARD);
                this.state = 1421;
                this.match(delphiParser.SEMI);
                this.state = 1425;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 175, this.context);
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
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 175, this.context);
                }
                }
                break;
            case delphiParser.EXTERNAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1428;
                this.match(delphiParser.EXTERNAL);
                this.state = 1435;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 177, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        this.state = 1433;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case delphiParser.NAME:
                            {
                            this.state = 1429;
                            this.match(delphiParser.NAME);
                            this.state = 1430;
                            this.expression();
                            }
                            break;
                        case delphiParser.INDEX:
                            {
                            this.state = 1431;
                            this.match(delphiParser.INDEX);
                            this.state = 1432;
                            this.expression();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                    }
                    this.state = 1437;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 177, this.context);
                }
                this.state = 1441;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 178, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1438;
                        this.functionDirective();
                        }
                        }
                    }
                    this.state = 1443;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 178, this.context);
                }
                }
                break;
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
                this.state = 1444;
                this.block();
                this.state = 1445;
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
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 226, delphiParser.RULE_expression);
        try {
            this.state = 1460;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.FUNCTION:
            case delphiParser.PROCEDURE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1449;
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
                this.state = 1450;
                this.simpleExpression();
                this.state = 1454;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 180, this.context) ) {
                case 1:
                    {
                    this.state = 1451;
                    this.relOp();
                    this.state = 1452;
                    this.simpleExpression();
                    }
                    break;
                }
                this.state = 1458;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 181, this.context) ) {
                case 1:
                    {
                    this.state = 1456;
                    this.match(delphiParser.EQUAL);
                    this.state = 1457;
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
        this.enterRule(localContext, 228, delphiParser.RULE_anonymousExpression);
        let _la: number;
        try {
            this.state = 1475;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.PROCEDURE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1462;
                this.match(delphiParser.PROCEDURE);
                this.state = 1464;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 183, this.context) ) {
                case 1:
                    {
                    this.state = 1463;
                    this.formalParameterSection();
                    }
                    break;
                }
                this.state = 1466;
                this.block();
                }
                break;
            case delphiParser.FUNCTION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1467;
                this.match(delphiParser.FUNCTION);
                this.state = 1469;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1468;
                    this.formalParameterSection();
                    }
                }

                this.state = 1471;
                this.match(delphiParser.COLON);
                this.state = 1472;
                this.typeDecl();
                this.state = 1473;
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
        this.enterRule(localContext, 230, delphiParser.RULE_simpleExpression);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1477;
            this.factor();
            this.state = 1483;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 186, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1478;
                    this.operator();
                    this.state = 1479;
                    this.factor();
                    }
                    }
                }
                this.state = 1485;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 186, this.context);
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
        this.enterRule(localContext, 232, delphiParser.RULE_factor);
        let _la: number;
        try {
            this.state = 1519;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 189, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1486;
                this.match(delphiParser.AT2);
                this.state = 1487;
                this.factor();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1488;
                this.match(delphiParser.DOUBLEAT);
                this.state = 1489;
                this.factor();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1490;
                this.match(delphiParser.NOT);
                this.state = 1491;
                this.factor();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1492;
                this.match(delphiParser.PLUS);
                this.state = 1493;
                this.factor();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1494;
                this.match(delphiParser.MINUS);
                this.state = 1495;
                this.factor();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1496;
                this.match(delphiParser.POINTER2);
                this.state = 1497;
                this.ident();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1498;
                this.intNum();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1499;
                this.realNum();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1500;
                _la = this.tokenStream.LA(1);
                if(!(_la === 68 || _la === 131 || _la === 132 || _la === 186)) {
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
                this.state = 1501;
                this.match(delphiParser.LPAREN);
                this.state = 1502;
                this.expression();
                this.state = 1503;
                this.match(delphiParser.RPAREN);
                this.state = 1505;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 187, this.context) ) {
                case 1:
                    {
                    this.state = 1504;
                    this.match(delphiParser.POINTER2);
                    }
                    break;
                }
                this.state = 1509;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 188, this.context) ) {
                case 1:
                    {
                    this.state = 1507;
                    this.match(delphiParser.DOT);
                    this.state = 1508;
                    this.expression();
                    }
                    break;
                }
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1511;
                this.stringFactor();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1512;
                this.setSection();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1513;
                this.designator();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1514;
                this.typeId();
                this.state = 1515;
                this.match(delphiParser.LPAREN);
                this.state = 1516;
                this.expression();
                this.state = 1517;
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
        this.enterRule(localContext, 234, delphiParser.RULE_stringFactor);
        try {
            let alternative: number;
            this.state = 1543;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.ControlString:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1521;
                this.match(delphiParser.ControlString);
                this.state = 1526;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 190, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1522;
                        this.match(delphiParser.QuotedString);
                        this.state = 1523;
                        this.match(delphiParser.ControlString);
                        }
                        }
                    }
                    this.state = 1528;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 190, this.context);
                }
                this.state = 1530;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 191, this.context) ) {
                case 1:
                    {
                    this.state = 1529;
                    this.match(delphiParser.QuotedString);
                    }
                    break;
                }
                }
                break;
            case delphiParser.QuotedString:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1532;
                this.match(delphiParser.QuotedString);
                this.state = 1537;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 192, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1533;
                        this.match(delphiParser.ControlString);
                        this.state = 1534;
                        this.match(delphiParser.QuotedString);
                        }
                        }
                    }
                    this.state = 1539;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 192, this.context);
                }
                this.state = 1541;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 193, this.context) ) {
                case 1:
                    {
                    this.state = 1540;
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
        this.enterRule(localContext, 236, delphiParser.RULE_setSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1545;
            this.match(delphiParser.LBRACK);
            this.state = 1554;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7358504) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1478103173) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1526890829) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 31735815) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 203857) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 223) !== 0)) {
                {
                this.state = 1546;
                this.expression();
                this.state = 1551;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 138 || _la === 156) {
                    {
                    {
                    this.state = 1547;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 138 || _la === 156)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1548;
                    this.expression();
                    }
                    }
                    this.state = 1553;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1556;
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
        this.enterRule(localContext, 238, delphiParser.RULE_designator);
        try {
            let alternative: number;
            this.state = 1565;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.INHERITED:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1558;
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
                this.state = 1559;
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
                this.state = 1561;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 1560;
                        this.designatorItem();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1563;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 197, this.context);
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
        this.enterRule(localContext, 240, delphiParser.RULE_designatorItem);
        let _la: number;
        try {
            this.state = 1603;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.POINTER2:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1567;
                this.match(delphiParser.POINTER2);
                }
                break;
            case delphiParser.AT2:
            case delphiParser.DOT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1568;
                _la = this.tokenStream.LA(1);
                if(!(_la === 154 || _la === 155)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1569;
                this.ident();
                }
                break;
            case delphiParser.LT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1570;
                this.match(delphiParser.LT);
                this.state = 1571;
                this.genericTypeIdent();
                this.state = 1576;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 138) {
                    {
                    {
                    this.state = 1572;
                    this.match(delphiParser.COMMA);
                    this.state = 1573;
                    this.genericTypeIdent();
                    }
                    }
                    this.state = 1578;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1579;
                this.match(delphiParser.GT);
                }
                break;
            case delphiParser.LBRACK:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1581;
                this.match(delphiParser.LBRACK);
                this.state = 1582;
                this.expressionList();
                this.state = 1583;
                this.match(delphiParser.RBRACK);
                }
                break;
            case delphiParser.LPAREN:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1585;
                this.match(delphiParser.LPAREN);
                this.state = 1600;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7358504) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1478103173) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1526890829) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 31735815) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 203857) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 223) !== 0)) {
                    {
                    this.state = 1586;
                    this.expression();
                    this.state = 1588;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 140) {
                        {
                        this.state = 1587;
                        this.colonConstruct();
                        }
                    }

                    this.state = 1597;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 138) {
                        {
                        {
                        this.state = 1590;
                        this.match(delphiParser.COMMA);
                        this.state = 1591;
                        this.expression();
                        this.state = 1593;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 140) {
                            {
                            this.state = 1592;
                            this.colonConstruct();
                            }
                        }

                        }
                        }
                        this.state = 1599;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1602;
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
        this.enterRule(localContext, 242, delphiParser.RULE_expressionList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1605;
            this.expression();
            this.state = 1610;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 1606;
                this.match(delphiParser.COMMA);
                this.state = 1607;
                this.expression();
                }
                }
                this.state = 1612;
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
        this.enterRule(localContext, 244, delphiParser.RULE_colonConstruct);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1613;
            this.match(delphiParser.COLON);
            this.state = 1614;
            this.expression();
            this.state = 1617;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140) {
                {
                this.state = 1615;
                this.match(delphiParser.COLON);
                this.state = 1616;
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
        this.enterRule(localContext, 246, delphiParser.RULE_operator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1619;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 134217872) !== 0) || _la === 65 || _la === 75 || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 2030043139) !== 0))) {
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
        this.enterRule(localContext, 248, delphiParser.RULE_relOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1621;
            _la = this.tokenStream.LA(1);
            if(!(_la === 54 || _la === 60 || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & 63) !== 0))) {
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
        this.enterRule(localContext, 250, delphiParser.RULE_statement);
        try {
            this.state = 1638;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 207, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1623;
                this.ifStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1624;
                this.caseStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1625;
                this.repeatStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1626;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1627;
                this.forStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1628;
                this.withStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1629;
                this.tryStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1630;
                this.raiseStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1631;
                this.assemblerStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1632;
                this.compoundStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1633;
                this.label();
                this.state = 1634;
                this.match(delphiParser.COLON);
                this.state = 1635;
                this.statement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1637;
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
        this.enterRule(localContext, 252, delphiParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1640;
            this.match(delphiParser.IF);
            this.state = 1641;
            this.expression();
            this.state = 1642;
            this.match(delphiParser.THEN);
            this.state = 1643;
            this.statement();
            this.state = 1646;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context) ) {
            case 1:
                {
                this.state = 1644;
                this.match(delphiParser.ELSE);
                this.state = 1645;
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
        this.enterRule(localContext, 254, delphiParser.RULE_caseStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1648;
            this.match(delphiParser.CASE);
            this.state = 1649;
            this.expression();
            this.state = 1650;
            this.match(delphiParser.OF);
            this.state = 1654;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7358504) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1478103173) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1526890829) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 31735815) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 203857) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 223) !== 0)) {
                {
                {
                this.state = 1651;
                this.caseItem();
                }
                }
                this.state = 1656;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1662;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 33) {
                {
                this.state = 1657;
                this.match(delphiParser.ELSE);
                this.state = 1658;
                this.statementList();
                this.state = 1660;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 139) {
                    {
                    this.state = 1659;
                    this.match(delphiParser.SEMI);
                    }
                }

                }
            }

            this.state = 1664;
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
        this.enterRule(localContext, 256, delphiParser.RULE_caseItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1666;
            this.caseLabel();
            this.state = 1671;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 1667;
                this.match(delphiParser.COMMA);
                this.state = 1668;
                this.caseLabel();
                }
                }
                this.state = 1673;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1674;
            this.match(delphiParser.COLON);
            this.state = 1675;
            this.statement();
            this.state = 1677;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 139) {
                {
                this.state = 1676;
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
        this.enterRule(localContext, 258, delphiParser.RULE_caseLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1679;
            this.expression();
            this.state = 1682;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 156) {
                {
                this.state = 1680;
                this.match(delphiParser.DOTDOT);
                this.state = 1681;
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
        this.enterRule(localContext, 260, delphiParser.RULE_repeatStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1684;
            this.match(delphiParser.REPEAT);
            this.state = 1686;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7399720) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1478141061) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 460329001) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 475207) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 72785) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 11) !== 0)) {
                {
                this.state = 1685;
                this.statementList();
                }
            }

            this.state = 1688;
            this.match(delphiParser.UNTIL);
            this.state = 1689;
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
        this.enterRule(localContext, 262, delphiParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1691;
            this.match(delphiParser.WHILE);
            this.state = 1692;
            this.expression();
            this.state = 1693;
            this.match(delphiParser.DO);
            this.state = 1694;
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
        this.enterRule(localContext, 264, delphiParser.RULE_forStatement);
        try {
            this.state = 1721;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 216, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1696;
                this.match(delphiParser.FOR);
                this.state = 1697;
                this.designator();
                this.state = 1698;
                this.match(delphiParser.ASSIGN);
                this.state = 1699;
                this.expression();
                this.state = 1700;
                this.match(delphiParser.TO);
                this.state = 1701;
                this.expression();
                this.state = 1702;
                this.match(delphiParser.DO);
                this.state = 1703;
                this.statement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1705;
                this.match(delphiParser.FOR);
                this.state = 1706;
                this.designator();
                this.state = 1707;
                this.match(delphiParser.ASSIGN);
                this.state = 1708;
                this.expression();
                this.state = 1709;
                this.match(delphiParser.DOWNTO);
                this.state = 1710;
                this.expression();
                this.state = 1711;
                this.match(delphiParser.DO);
                this.state = 1712;
                this.statement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1714;
                this.match(delphiParser.FOR);
                this.state = 1715;
                this.designator();
                this.state = 1716;
                this.match(delphiParser.IN);
                this.state = 1717;
                this.expression();
                this.state = 1718;
                this.match(delphiParser.DO);
                this.state = 1719;
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
        this.enterRule(localContext, 266, delphiParser.RULE_withStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1723;
            this.match(delphiParser.WITH);
            this.state = 1724;
            this.withItem();
            this.state = 1725;
            this.match(delphiParser.DO);
            this.state = 1726;
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
        this.enterRule(localContext, 268, delphiParser.RULE_withItem);
        let _la: number;
        try {
            this.state = 1740;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 218, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1728;
                this.designator();
                this.state = 1729;
                this.match(delphiParser.AS);
                this.state = 1730;
                this.designator();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1732;
                this.designator();
                this.state = 1737;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 138) {
                    {
                    {
                    this.state = 1733;
                    this.match(delphiParser.COMMA);
                    this.state = 1734;
                    this.designator();
                    }
                    }
                    this.state = 1739;
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
        this.enterRule(localContext, 270, delphiParser.RULE_compoundStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1742;
            this.match(delphiParser.BEGIN);
            this.state = 1744;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7399720) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1478141061) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 460329001) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 475207) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 72785) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 11) !== 0)) {
                {
                this.state = 1743;
                this.statementList();
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
    public statementList(): StatementListContext {
        let localContext = new StatementListContext(this.context, this.state);
        this.enterRule(localContext, 272, delphiParser.RULE_statementList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1748;
            this.statement();
            this.state = 1755;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 221, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1749;
                    this.match(delphiParser.SEMI);
                    this.state = 1751;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7399720) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1478141061) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 460329001) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 475207) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 72785) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 11) !== 0)) {
                        {
                        this.state = 1750;
                        this.statement();
                        }
                    }

                    }
                    }
                }
                this.state = 1757;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 221, this.context);
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
        this.enterRule(localContext, 274, delphiParser.RULE_simpleStatement);
        try {
            this.state = 1764;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 222, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1758;
                this.designator();
                this.state = 1759;
                this.match(delphiParser.ASSIGN);
                this.state = 1760;
                this.expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1762;
                this.designator();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1763;
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
        this.enterRule(localContext, 276, delphiParser.RULE_gotoStatement);
        let _la: number;
        try {
            this.state = 1776;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.GOTO:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1766;
                this.match(delphiParser.GOTO);
                this.state = 1767;
                this.label();
                }
                break;
            case delphiParser.EXIT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1768;
                this.match(delphiParser.EXIT);
                this.state = 1773;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 223, this.context) ) {
                case 1:
                    {
                    this.state = 1769;
                    this.match(delphiParser.LPAREN);
                    this.state = 1770;
                    this.expression();
                    this.state = 1771;
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
                this.state = 1775;
                _la = this.tokenStream.LA(1);
                if(!(_la === 14 || _la === 21)) {
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
        this.enterRule(localContext, 278, delphiParser.RULE_constExpression);
        let _la: number;
        try {
            this.state = 1801;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 227, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1778;
                this.match(delphiParser.LPAREN);
                this.state = 1779;
                this.recordConstExpression();
                this.state = 1784;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 139) {
                    {
                    {
                    this.state = 1780;
                    this.match(delphiParser.SEMI);
                    this.state = 1781;
                    this.recordConstExpression();
                    }
                    }
                    this.state = 1786;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1787;
                this.match(delphiParser.RPAREN);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1789;
                this.match(delphiParser.LPAREN);
                this.state = 1790;
                this.constExpression();
                this.state = 1795;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 138) {
                    {
                    {
                    this.state = 1791;
                    this.match(delphiParser.COMMA);
                    this.state = 1792;
                    this.constExpression();
                    }
                    }
                    this.state = 1797;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1798;
                this.match(delphiParser.RPAREN);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1800;
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
        this.enterRule(localContext, 280, delphiParser.RULE_recordConstExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1803;
            this.ident();
            this.state = 1804;
            this.match(delphiParser.COLON);
            this.state = 1805;
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
        this.enterRule(localContext, 282, delphiParser.RULE_tryStatement);
        let _la: number;
        try {
            this.state = 1824;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 231, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1807;
                this.match(delphiParser.TRY);
                this.state = 1809;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7399720) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1478141061) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 460329001) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 475207) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 72785) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 11) !== 0)) {
                    {
                    this.state = 1808;
                    this.statementList();
                    }
                }

                this.state = 1811;
                this.match(delphiParser.EXCEPT);
                this.state = 1812;
                this.handlerList();
                this.state = 1813;
                this.match(delphiParser.END);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1815;
                this.match(delphiParser.TRY);
                this.state = 1817;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7399720) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1478141061) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 460329001) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 475207) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 72785) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 11) !== 0)) {
                    {
                    this.state = 1816;
                    this.statementList();
                    }
                }

                this.state = 1819;
                this.match(delphiParser.FINALLY);
                this.state = 1821;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7399720) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1478141061) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 460329001) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 475207) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 72785) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 11) !== 0)) {
                    {
                    this.state = 1820;
                    this.statementList();
                    }
                }

                this.state = 1823;
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
        this.enterRule(localContext, 284, delphiParser.RULE_handlerList);
        let _la: number;
        try {
            this.state = 1837;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.ELSE:
            case delphiParser.END:
            case delphiParser.ON:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1829;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 73) {
                    {
                    {
                    this.state = 1826;
                    this.handler();
                    }
                    }
                    this.state = 1831;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1834;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 33) {
                    {
                    this.state = 1832;
                    this.match(delphiParser.ELSE);
                    this.state = 1833;
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
                this.state = 1836;
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
        this.enterRule(localContext, 286, delphiParser.RULE_handler);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1839;
            this.match(delphiParser.ON);
            this.state = 1841;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 235, this.context) ) {
            case 1:
                {
                this.state = 1840;
                this.handlerIdent();
                }
                break;
            }
            this.state = 1843;
            this.typeId();
            this.state = 1844;
            this.match(delphiParser.DO);
            this.state = 1845;
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
        this.enterRule(localContext, 288, delphiParser.RULE_handlerIdent);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1847;
            this.ident();
            this.state = 1848;
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
        this.enterRule(localContext, 290, delphiParser.RULE_handlerStatement);
        let _la: number;
        try {
            this.state = 1855;
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
                this.state = 1850;
                this.statement();
                this.state = 1852;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 139) {
                    {
                    this.state = 1851;
                    this.match(delphiParser.SEMI);
                    }
                }

                }
                break;
            case delphiParser.SEMI:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1854;
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
        this.enterRule(localContext, 292, delphiParser.RULE_raiseStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1857;
            this.match(delphiParser.RAISE);
            this.state = 1859;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 238, this.context) ) {
            case 1:
                {
                this.state = 1858;
                this.designator();
                }
                break;
            }
            this.state = 1863;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 239, this.context) ) {
            case 1:
                {
                this.state = 1861;
                this.match(delphiParser.AT);
                this.state = 1862;
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
        this.enterRule(localContext, 294, delphiParser.RULE_assemblerStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1865;
            this.match(delphiParser.ASM);
            this.state = 1869;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967291) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || _la === 192 || _la === 193) {
                {
                {
                this.state = 1866;
                _la = this.tokenStream.LA(1);
                if(_la<=0 || _la === 34) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 1871;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1872;
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
        this.enterRule(localContext, 296, delphiParser.RULE_methodDirective);
        try {
            this.state = 1885;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.REINTRODUCE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1874;
                this.reintroduceDirective();
                }
                break;
            case delphiParser.OVERLOAD:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1875;
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
                this.state = 1876;
                this.bindingDirective();
                }
                break;
            case delphiParser.ABSTRACT:
            case delphiParser.FINAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1877;
                this.abstractDirective();
                }
                break;
            case delphiParser.ASSEMBLER:
            case delphiParser.INLINE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1878;
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
                this.state = 1879;
                this.callConvention();
                }
                break;
            case delphiParser.DEPRECATED:
            case delphiParser.EXPERIMENTAL:
            case delphiParser.LIBRARY:
            case delphiParser.PLATFORM:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1880;
                this.hintingDirective();
                this.state = 1881;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.FAR:
            case delphiParser.LOCAL:
            case delphiParser.NEAR:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1883;
                this.oldCallConventionDirective();
                }
                break;
            case delphiParser.DISPID:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1884;
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
        this.enterRule(localContext, 298, delphiParser.RULE_functionDirective);
        let _la: number;
        try {
            this.state = 1900;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 243, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1887;
                this.overloadDirective();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1888;
                this.inlineDirective();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1889;
                this.callConvention();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1890;
                this.oldCallConventionDirective();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1891;
                this.hintingDirective();
                this.state = 1892;
                this.match(delphiParser.SEMI);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1895;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 16 || _la === 38 || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 272662529) !== 0)) {
                    {
                    this.state = 1894;
                    this.callConventionNoSemi();
                    }
                }

                this.state = 1897;
                this.externalDirective();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1898;
                this.match(delphiParser.UNSAFE);
                this.state = 1899;
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
        this.enterRule(localContext, 300, delphiParser.RULE_reintroduceDirective);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1902;
            this.match(delphiParser.REINTRODUCE);
            this.state = 1903;
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
        this.enterRule(localContext, 302, delphiParser.RULE_overloadDirective);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1905;
            this.match(delphiParser.OVERLOAD);
            this.state = 1907;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 244, this.context) ) {
            case 1:
                {
                this.state = 1906;
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
        this.enterRule(localContext, 304, delphiParser.RULE_bindingDirective);
        try {
            this.state = 1921;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.MESSAGE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1909;
                this.match(delphiParser.MESSAGE);
                this.state = 1910;
                this.expression();
                this.state = 1911;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.STATIC:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1913;
                this.match(delphiParser.STATIC);
                this.state = 1914;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.DYNAMIC:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1915;
                this.match(delphiParser.DYNAMIC);
                this.state = 1916;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.OVERRIDE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1917;
                this.match(delphiParser.OVERRIDE);
                this.state = 1918;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.VIRTUAL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1919;
                this.match(delphiParser.VIRTUAL);
                this.state = 1920;
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
        this.enterRule(localContext, 306, delphiParser.RULE_abstractDirective);
        try {
            this.state = 1927;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.ABSTRACT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1923;
                this.match(delphiParser.ABSTRACT);
                this.state = 1924;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.FINAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1925;
                this.match(delphiParser.FINAL);
                this.state = 1926;
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
        this.enterRule(localContext, 308, delphiParser.RULE_inlineDirective);
        try {
            this.state = 1933;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.INLINE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1929;
                this.match(delphiParser.INLINE);
                this.state = 1930;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.ASSEMBLER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1931;
                this.match(delphiParser.ASSEMBLER);
                this.state = 1932;
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
        this.enterRule(localContext, 310, delphiParser.RULE_callConvention);
        try {
            this.state = 1947;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.CDECL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1935;
                this.match(delphiParser.CDECL);
                this.state = 1936;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.PASCAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1937;
                this.match(delphiParser.PASCAL);
                this.state = 1938;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.REGISTER:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1939;
                this.match(delphiParser.REGISTER);
                this.state = 1940;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.SAFECALL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1941;
                this.match(delphiParser.SAFECALL);
                this.state = 1942;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.STDCALL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1943;
                this.match(delphiParser.STDCALL);
                this.state = 1944;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.EXPORT:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1945;
                this.match(delphiParser.EXPORT);
                this.state = 1946;
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
        this.enterRule(localContext, 312, delphiParser.RULE_callConventionNoSemi);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1949;
            _la = this.tokenStream.LA(1);
            if(!(_la === 16 || _la === 38 || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 272662529) !== 0))) {
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
        this.enterRule(localContext, 314, delphiParser.RULE_oldCallConventionDirective);
        try {
            this.state = 1957;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.FAR:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1951;
                this.match(delphiParser.FAR);
                this.state = 1952;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.LOCAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1953;
                this.match(delphiParser.LOCAL);
                this.state = 1954;
                this.match(delphiParser.SEMI);
                }
                break;
            case delphiParser.NEAR:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1955;
                this.match(delphiParser.NEAR);
                this.state = 1956;
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
        this.enterRule(localContext, 316, delphiParser.RULE_hintingDirective);
        let _la: number;
        try {
            this.state = 1964;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.DEPRECATED:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1959;
                this.match(delphiParser.DEPRECATED);
                this.state = 1961;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 188 || _la === 189) {
                    {
                    this.state = 1960;
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
                this.state = 1963;
                _la = this.tokenStream.LA(1);
                if(!(_la === 37 || _la === 62 || _la === 82)) {
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
        this.enterRule(localContext, 318, delphiParser.RULE_externalDirective);
        let _la: number;
        try {
            this.state = 1980;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 253, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1966;
                this.match(delphiParser.VARARGS);
                this.state = 1967;
                this.match(delphiParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1968;
                this.match(delphiParser.EXTERNAL);
                this.state = 1969;
                this.match(delphiParser.SEMI);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1970;
                this.match(delphiParser.EXTERNAL);
                this.state = 1971;
                this.constExpression();
                this.state = 1975;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 55 || _la === 66) {
                    {
                    {
                    this.state = 1972;
                    this.externalSpecifier();
                    }
                    }
                    this.state = 1977;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1978;
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
        this.enterRule(localContext, 320, delphiParser.RULE_externalSpecifier);
        try {
            this.state = 1986;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.NAME:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1982;
                this.match(delphiParser.NAME);
                this.state = 1983;
                this.constExpression();
                }
                break;
            case delphiParser.INDEX:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1984;
                this.match(delphiParser.INDEX);
                this.state = 1985;
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
        this.enterRule(localContext, 322, delphiParser.RULE_dispIDDirective);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1988;
            this.match(delphiParser.DISPID);
            this.state = 1989;
            this.expression();
            this.state = 1990;
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
        this.enterRule(localContext, 324, delphiParser.RULE_ident);
        try {
            this.state = 1996;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.TkIdentifier:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1992;
                this.match(delphiParser.TkIdentifier);
                }
                break;
            case delphiParser.AMBER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1993;
                this.match(delphiParser.AMBER);
                this.state = 1994;
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
                this.state = 1995;
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
        this.enterRule(localContext, 326, delphiParser.RULE_usedKeywordsAsNames);
        let _la: number;
        try {
            this.state = 2001;
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
                this.state = 1998;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 6293512) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 268438017) !== 0) || _la === 93 || _la === 112)) {
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
                this.state = 1999;
                _la = this.tokenStream.LA(1);
                if(!(_la === 20 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 2148532225) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 89) !== 0) || _la === 124 || _la === 128)) {
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
                this.state = 2000;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 14 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 131077) !== 0) || _la === 71 || _la === 76 || _la === 110 || _la === 111)) {
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
        this.enterRule(localContext, 328, delphiParser.RULE_identList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2003;
            this.ident();
            this.state = 2008;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 2004;
                this.match(delphiParser.COMMA);
                this.state = 2005;
                this.ident();
                }
                }
                this.state = 2010;
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
        this.enterRule(localContext, 330, delphiParser.RULE_identListFlat);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2011;
            this.ident();
            this.state = 2016;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 138) {
                {
                {
                this.state = 2012;
                this.match(delphiParser.COMMA);
                this.state = 2013;
                this.ident();
                }
                }
                this.state = 2018;
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
        this.enterRule(localContext, 332, delphiParser.RULE_label);
        let _la: number;
        try {
            this.state = 2021;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case delphiParser.TkIdentifier:
            case delphiParser.TkIntNum:
            case delphiParser.TkHexNum:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2019;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 11) !== 0))) {
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
                this.state = 2020;
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
        this.enterRule(localContext, 334, delphiParser.RULE_intNum);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2023;
            _la = this.tokenStream.LA(1);
            if(!(_la === 183 || _la === 185)) {
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
        this.enterRule(localContext, 336, delphiParser.RULE_realNum);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2025;
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
        this.enterRule(localContext, 338, delphiParser.RULE_namespacedQualifiedIdent);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2030;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 260, this.context) ) {
            case 1:
                {
                this.state = 2027;
                this.namespaceName();
                this.state = 2028;
                this.match(delphiParser.DOT);
                }
                break;
            }
            this.state = 2032;
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
        this.enterRule(localContext, 340, delphiParser.RULE_namespaceName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2034;
            this.ident();
            this.state = 2039;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 261, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2035;
                    this.match(delphiParser.DOT);
                    this.state = 2036;
                    this.ident();
                    }
                    }
                }
                this.state = 2041;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 261, this.context);
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
        this.enterRule(localContext, 342, delphiParser.RULE_qualifiedIdent);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2047;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 262, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2042;
                    this.ident();
                    this.state = 2043;
                    this.match(delphiParser.DOT);
                    }
                    }
                }
                this.state = 2049;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 262, this.context);
            }
            this.state = 2050;
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
        4,1,193,2053,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        2,170,7,170,2,171,7,171,1,0,1,0,1,0,1,0,3,0,349,8,0,1,1,3,1,352,
        8,1,1,1,3,1,355,8,1,1,1,1,1,1,1,1,2,1,2,1,2,3,2,363,8,2,1,2,1,2,
        1,3,1,3,1,3,1,3,5,3,371,8,3,10,3,12,3,374,9,3,3,3,376,8,3,1,3,1,
        3,1,4,1,4,3,4,382,8,4,1,4,1,4,1,4,1,5,1,5,1,5,5,5,390,8,5,10,5,12,
        5,393,9,5,1,5,1,5,1,6,1,6,1,6,3,6,400,8,6,1,6,1,6,1,6,1,7,1,7,1,
        7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,5,9,418,8,9,10,9,12,9,
        421,9,9,1,9,1,9,1,10,1,10,3,10,427,8,10,1,10,5,10,430,8,10,10,10,
        12,10,433,9,10,1,11,1,11,3,11,437,8,11,1,11,5,11,440,8,11,10,11,
        12,11,443,9,11,1,12,1,12,1,12,1,12,1,12,3,12,450,8,12,1,13,1,13,
        1,13,3,13,455,8,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,
        1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,5,19,475,8,19,10,19,
        12,19,478,9,19,1,19,1,19,1,20,1,20,1,20,3,20,485,8,20,1,21,1,21,
        1,21,5,21,490,8,21,10,21,12,21,493,9,21,1,21,1,21,1,22,5,22,498,
        8,22,10,22,12,22,501,9,22,1,22,3,22,504,8,22,1,23,1,23,3,23,508,
        8,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,518,8,24,1,25,
        1,25,1,25,1,25,1,25,1,25,1,25,3,25,527,8,25,1,26,1,26,1,26,1,26,
        5,26,533,8,26,10,26,12,26,536,9,26,1,26,1,26,1,27,1,27,5,27,542,
        8,27,10,27,12,27,545,9,27,1,28,1,28,1,29,1,29,1,29,3,29,552,8,29,
        1,29,1,29,1,29,5,29,557,8,29,10,29,12,29,560,9,29,1,29,1,29,1,30,
        1,30,1,30,5,30,567,8,30,10,30,12,30,570,9,30,1,31,1,31,1,31,1,31,
        5,31,576,8,31,10,31,12,31,579,9,31,1,31,1,31,1,32,1,32,1,32,5,32,
        586,8,32,10,32,12,32,589,9,32,1,33,1,33,1,34,1,34,1,34,1,34,3,34,
        597,8,34,1,34,5,34,600,8,34,10,34,12,34,603,9,34,1,34,1,34,1,35,
        1,35,1,35,1,35,1,35,1,35,3,35,613,8,35,1,36,1,36,1,36,1,36,1,36,
        1,36,1,36,5,36,622,8,36,10,36,12,36,625,9,36,1,36,1,36,1,37,1,37,
        3,37,631,8,37,1,37,3,37,634,8,37,1,37,1,37,3,37,638,8,37,1,37,1,
        37,3,37,642,8,37,1,37,3,37,645,8,37,1,38,1,38,1,38,1,38,1,38,1,38,
        3,38,653,8,38,1,38,1,38,3,38,657,8,38,1,38,3,38,660,8,38,1,39,3,
        39,663,8,39,1,39,1,39,1,40,1,40,1,40,1,40,3,40,671,8,40,1,41,1,41,
        1,41,3,41,676,8,41,1,41,1,41,3,41,680,8,41,5,41,682,8,41,10,41,12,
        41,685,9,41,1,41,3,41,688,8,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,
        1,42,3,42,698,8,42,1,43,1,43,3,43,702,8,43,1,44,1,44,1,44,1,44,1,
        45,1,45,1,45,3,45,711,8,45,1,46,1,46,1,46,3,46,716,8,46,1,47,1,47,
        1,47,1,47,1,47,3,47,723,8,47,1,47,3,47,726,8,47,1,47,1,47,3,47,730,
        8,47,3,47,732,8,47,1,48,1,48,1,48,1,48,1,49,1,49,1,49,3,49,741,8,
        49,1,50,1,50,1,50,1,50,1,51,1,51,3,51,749,8,51,1,51,3,51,752,8,51,
        1,52,1,52,1,52,1,52,1,53,1,53,3,53,760,8,53,1,53,1,53,1,53,1,53,
        3,53,766,8,53,3,53,768,8,53,1,54,1,54,1,55,1,55,1,55,3,55,775,8,
        55,1,56,1,56,1,56,3,56,780,8,56,1,57,1,57,1,57,1,57,3,57,786,8,57,
        1,57,1,57,1,57,1,57,3,57,792,8,57,5,57,794,8,57,10,57,12,57,797,
        9,57,1,57,1,57,1,58,1,58,1,59,1,59,3,59,805,8,59,1,60,1,60,3,60,
        809,8,60,1,61,1,61,1,61,1,61,5,61,815,8,61,10,61,12,61,818,9,61,
        1,61,1,61,1,62,1,62,1,62,1,62,5,62,826,8,62,10,62,12,62,829,9,62,
        1,62,1,62,1,63,1,63,1,63,1,63,1,63,5,63,838,8,63,10,63,12,63,841,
        9,63,3,63,843,8,63,1,64,1,64,3,64,847,8,64,1,65,1,65,1,65,1,65,5,
        65,853,8,65,10,65,12,65,856,9,65,1,65,1,65,1,66,1,66,1,66,1,66,1,
        66,1,66,1,66,3,66,867,8,66,1,67,1,67,1,67,1,67,1,68,1,68,3,68,875,
        8,68,1,68,3,68,878,8,68,1,68,5,68,881,8,68,10,68,12,68,884,9,68,
        1,68,1,68,1,68,3,68,889,8,68,3,68,891,8,68,1,69,1,69,1,70,1,70,1,
        70,1,70,5,70,899,8,70,10,70,12,70,902,9,70,1,70,1,70,1,71,1,71,1,
        71,1,71,1,71,1,71,1,71,3,71,913,8,71,1,71,3,71,916,8,71,1,72,1,72,
        1,72,3,72,921,8,72,1,72,1,72,1,72,5,72,926,8,72,10,72,12,72,929,
        9,72,1,72,1,72,1,73,1,73,1,73,1,73,3,73,937,8,73,1,73,3,73,940,8,
        73,1,74,1,74,3,74,944,8,74,1,74,3,74,947,8,74,1,74,5,74,950,8,74,
        10,74,12,74,953,9,74,1,74,1,74,1,74,1,74,3,74,959,8,74,3,74,961,
        8,74,1,75,1,75,1,76,1,76,1,76,1,76,1,77,1,77,3,77,971,8,77,1,77,
        3,77,974,8,77,1,78,1,78,3,78,978,8,78,1,78,5,78,981,8,78,10,78,12,
        78,984,9,78,1,78,1,78,1,79,1,79,1,79,3,79,991,8,79,1,80,1,80,3,80,
        995,8,80,1,81,1,81,5,81,999,8,81,10,81,12,81,1002,9,81,1,81,5,81,
        1005,8,81,10,81,12,81,1008,9,81,1,81,1,81,1,82,1,82,5,82,1014,8,
        82,10,82,12,82,1017,9,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,
        1,83,1,83,3,83,1029,8,83,1,83,3,83,1032,8,83,1,84,1,84,1,84,1,84,
        5,84,1038,8,84,10,84,12,84,1041,9,84,1,84,3,84,1044,8,84,1,85,1,
        85,1,85,1,85,5,85,1050,8,85,10,85,12,85,1053,9,85,1,85,3,85,1056,
        8,85,1,86,1,86,1,86,1,86,3,86,1062,8,86,1,86,1,86,1,86,1,86,3,86,
        1068,8,86,1,86,1,86,5,86,1072,8,86,10,86,12,86,1075,9,86,1,87,1,
        87,1,87,5,87,1080,8,87,10,87,12,87,1083,9,87,1,87,1,87,1,87,5,87,
        1088,8,87,10,87,12,87,1091,9,87,1,87,1,87,1,88,1,88,1,88,1,88,1,
        88,5,88,1100,8,88,10,88,12,88,1103,9,88,1,88,1,88,1,89,1,89,1,89,
        3,89,1110,8,89,1,90,3,90,1113,8,90,1,90,1,90,1,90,3,90,1118,8,90,
        1,90,3,90,1121,8,90,1,90,1,90,5,90,1125,8,90,10,90,12,90,1128,9,
        90,1,90,3,90,1131,8,90,1,90,1,90,1,90,3,90,1136,8,90,1,90,3,90,1139,
        8,90,1,90,1,90,1,90,1,90,5,90,1145,8,90,10,90,12,90,1148,9,90,1,
        90,3,90,1151,8,90,1,90,1,90,1,90,3,90,1156,8,90,1,90,3,90,1159,8,
        90,1,90,1,90,1,90,1,90,3,90,1165,8,90,1,91,1,91,1,91,1,91,1,91,5,
        91,1172,8,91,10,91,12,91,1175,9,91,1,92,3,92,1178,8,92,1,92,1,92,
        1,92,3,92,1183,8,92,1,92,1,92,3,92,1187,8,92,1,92,3,92,1190,8,92,
        1,92,5,92,1193,8,92,10,92,12,92,1196,9,92,1,92,1,92,5,92,1200,8,
        92,10,92,12,92,1203,9,92,1,93,1,93,1,93,1,93,1,94,1,94,1,94,3,94,
        1212,8,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,3,95,1223,
        8,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,
        3,96,1237,8,96,1,97,1,97,1,97,1,97,1,97,1,97,3,97,1245,8,97,1,97,
        1,97,1,97,1,97,1,97,1,97,3,97,1253,8,97,3,97,1255,8,97,1,98,1,98,
        1,98,1,98,1,98,3,98,1262,8,98,1,99,3,99,1265,8,99,1,99,1,99,3,99,
        1269,8,99,1,99,1,99,3,99,1273,8,99,1,100,1,100,1,100,3,100,1278,
        8,100,1,100,1,100,1,100,1,100,5,100,1284,8,100,10,100,12,100,1287,
        9,100,1,100,1,100,1,100,3,100,1292,8,100,1,100,1,100,5,100,1296,
        8,100,10,100,12,100,1299,9,100,3,100,1301,8,100,1,101,1,101,1,101,
        5,101,1306,8,101,10,101,12,101,1309,9,101,1,101,3,101,1312,8,101,
        1,102,3,102,1315,8,102,1,102,1,102,1,102,3,102,1320,8,102,1,102,
        3,102,1323,8,102,1,102,1,102,1,102,3,102,1328,8,102,1,102,1,102,
        3,102,1332,8,102,1,102,1,102,1,102,1,102,3,102,1338,8,102,1,102,
        1,102,3,102,1342,8,102,3,102,1344,8,102,1,103,1,103,1,104,1,104,
        3,104,1350,8,104,1,104,1,104,1,104,3,104,1355,8,104,3,104,1357,8,
        104,1,104,1,104,1,104,3,104,1362,8,104,1,105,1,105,1,105,5,105,1367,
        8,105,10,105,12,105,1370,9,105,1,105,3,105,1373,8,105,1,106,1,106,
        1,106,3,106,1378,8,106,1,106,1,106,1,106,3,106,1383,8,106,1,106,
        1,106,1,106,3,106,1388,8,106,1,107,1,107,3,107,1392,8,107,1,107,
        1,107,1,108,1,108,1,108,5,108,1399,8,108,10,108,12,108,1402,9,108,
        1,109,3,109,1405,8,109,1,109,1,109,1,109,3,109,1410,8,109,1,109,
        1,109,3,109,1414,8,109,1,110,1,110,1,111,1,111,1,111,1,112,1,112,
        1,112,5,112,1424,8,112,10,112,12,112,1427,9,112,1,112,1,112,1,112,
        1,112,1,112,5,112,1434,8,112,10,112,12,112,1437,9,112,1,112,5,112,
        1440,8,112,10,112,12,112,1443,9,112,1,112,1,112,1,112,3,112,1448,
        8,112,1,113,1,113,1,113,1,113,1,113,3,113,1455,8,113,1,113,1,113,
        3,113,1459,8,113,3,113,1461,8,113,1,114,1,114,3,114,1465,8,114,1,
        114,1,114,1,114,3,114,1470,8,114,1,114,1,114,1,114,1,114,3,114,1476,
        8,114,1,115,1,115,1,115,1,115,5,115,1482,8,115,10,115,12,115,1485,
        9,115,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,
        1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,3,116,1506,
        8,116,1,116,1,116,3,116,1510,8,116,1,116,1,116,1,116,1,116,1,116,
        1,116,1,116,1,116,3,116,1520,8,116,1,117,1,117,1,117,5,117,1525,
        8,117,10,117,12,117,1528,9,117,1,117,3,117,1531,8,117,1,117,1,117,
        1,117,5,117,1536,8,117,10,117,12,117,1539,9,117,1,117,3,117,1542,
        8,117,3,117,1544,8,117,1,118,1,118,1,118,1,118,5,118,1550,8,118,
        10,118,12,118,1553,9,118,3,118,1555,8,118,1,118,1,118,1,119,1,119,
        1,119,4,119,1562,8,119,11,119,12,119,1563,3,119,1566,8,119,1,120,
        1,120,1,120,1,120,1,120,1,120,1,120,5,120,1575,8,120,10,120,12,120,
        1578,9,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,
        3,120,1589,8,120,1,120,1,120,1,120,3,120,1594,8,120,5,120,1596,8,
        120,10,120,12,120,1599,9,120,3,120,1601,8,120,1,120,3,120,1604,8,
        120,1,121,1,121,1,121,5,121,1609,8,121,10,121,12,121,1612,9,121,
        1,122,1,122,1,122,1,122,3,122,1618,8,122,1,123,1,123,1,124,1,124,
        1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,
        1,125,1,125,1,125,1,125,3,125,1639,8,125,1,126,1,126,1,126,1,126,
        1,126,1,126,3,126,1647,8,126,1,127,1,127,1,127,1,127,5,127,1653,
        8,127,10,127,12,127,1656,9,127,1,127,1,127,1,127,3,127,1661,8,127,
        3,127,1663,8,127,1,127,1,127,1,128,1,128,1,128,5,128,1670,8,128,
        10,128,12,128,1673,9,128,1,128,1,128,1,128,3,128,1678,8,128,1,129,
        1,129,1,129,3,129,1683,8,129,1,130,1,130,3,130,1687,8,130,1,130,
        1,130,1,130,1,131,1,131,1,131,1,131,1,131,1,132,1,132,1,132,1,132,
        1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,
        1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,3,132,
        1722,8,132,1,133,1,133,1,133,1,133,1,133,1,134,1,134,1,134,1,134,
        1,134,1,134,1,134,5,134,1736,8,134,10,134,12,134,1739,9,134,3,134,
        1741,8,134,1,135,1,135,3,135,1745,8,135,1,135,1,135,1,136,1,136,
        1,136,3,136,1752,8,136,5,136,1754,8,136,10,136,12,136,1757,9,136,
        1,137,1,137,1,137,1,137,1,137,1,137,3,137,1765,8,137,1,138,1,138,
        1,138,1,138,1,138,1,138,1,138,3,138,1774,8,138,1,138,3,138,1777,
        8,138,1,139,1,139,1,139,1,139,5,139,1783,8,139,10,139,12,139,1786,
        9,139,1,139,1,139,1,139,1,139,1,139,1,139,5,139,1794,8,139,10,139,
        12,139,1797,9,139,1,139,1,139,1,139,3,139,1802,8,139,1,140,1,140,
        1,140,1,140,1,141,1,141,3,141,1810,8,141,1,141,1,141,1,141,1,141,
        1,141,1,141,3,141,1818,8,141,1,141,1,141,3,141,1822,8,141,1,141,
        3,141,1825,8,141,1,142,5,142,1828,8,142,10,142,12,142,1831,9,142,
        1,142,1,142,3,142,1835,8,142,1,142,3,142,1838,8,142,1,143,1,143,
        3,143,1842,8,143,1,143,1,143,1,143,1,143,1,144,1,144,1,144,1,145,
        1,145,3,145,1853,8,145,1,145,3,145,1856,8,145,1,146,1,146,3,146,
        1860,8,146,1,146,1,146,3,146,1864,8,146,1,147,1,147,5,147,1868,8,
        147,10,147,12,147,1871,9,147,1,147,1,147,1,148,1,148,1,148,1,148,
        1,148,1,148,1,148,1,148,1,148,1,148,1,148,3,148,1886,8,148,1,149,
        1,149,1,149,1,149,1,149,1,149,1,149,1,149,3,149,1896,8,149,1,149,
        1,149,1,149,3,149,1901,8,149,1,150,1,150,1,150,1,151,1,151,3,151,
        1908,8,151,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,
        1,152,1,152,1,152,3,152,1922,8,152,1,153,1,153,1,153,1,153,3,153,
        1928,8,153,1,154,1,154,1,154,1,154,3,154,1934,8,154,1,155,1,155,
        1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,3,155,
        1948,8,155,1,156,1,156,1,157,1,157,1,157,1,157,1,157,1,157,3,157,
        1958,8,157,1,158,1,158,3,158,1962,8,158,1,158,3,158,1965,8,158,1,
        159,1,159,1,159,1,159,1,159,1,159,1,159,5,159,1974,8,159,10,159,
        12,159,1977,9,159,1,159,1,159,3,159,1981,8,159,1,160,1,160,1,160,
        1,160,3,160,1987,8,160,1,161,1,161,1,161,1,161,1,162,1,162,1,162,
        1,162,3,162,1997,8,162,1,163,1,163,1,163,3,163,2002,8,163,1,164,
        1,164,1,164,5,164,2007,8,164,10,164,12,164,2010,9,164,1,165,1,165,
        1,165,5,165,2015,8,165,10,165,12,165,2018,9,165,1,166,1,166,3,166,
        2022,8,166,1,167,1,167,1,168,1,168,1,169,1,169,1,169,3,169,2031,
        8,169,1,169,1,169,1,170,1,170,1,170,5,170,2038,8,170,10,170,12,170,
        2041,9,170,1,171,1,171,1,171,5,171,2046,8,171,10,171,12,171,2049,
        9,171,1,171,1,171,1,171,0,0,172,0,2,4,6,8,10,12,14,16,18,20,22,24,
        26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,
        70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,
        110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,
        142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,
        174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,
        206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,
        238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,
        270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,
        302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,
        334,336,338,340,342,0,23,2,0,18,18,102,102,2,0,114,114,122,122,3,
        0,17,17,19,19,94,94,2,0,2,2,104,104,2,0,26,26,59,59,2,0,22,22,69,
        69,2,0,12,12,89,90,3,0,19,19,24,24,85,85,3,0,18,18,76,76,122,122,
        3,0,68,68,131,132,186,186,2,0,138,138,156,156,1,0,154,155,8,0,4,
        4,7,7,27,27,65,65,75,75,106,107,130,130,133,136,3,0,54,54,60,60,
        141,146,2,0,14,14,21,21,1,0,34,34,6,0,16,16,38,38,81,81,96,96,103,
        103,109,109,3,0,37,37,62,62,82,82,9,0,3,3,11,11,21,22,55,55,64,64,
        66,66,83,83,93,93,112,112,9,0,20,20,43,43,63,63,74,74,92,92,95,96,
        98,98,124,124,128,128,8,0,5,5,14,14,36,36,38,38,53,53,71,71,76,76,
        110,111,2,0,182,183,185,185,2,0,183,183,185,185,2250,0,348,1,0,0,
        0,2,351,1,0,0,0,4,359,1,0,0,0,6,366,1,0,0,0,8,379,1,0,0,0,10,386,
        1,0,0,0,12,396,1,0,0,0,14,404,1,0,0,0,16,408,1,0,0,0,18,414,1,0,
        0,0,20,424,1,0,0,0,22,434,1,0,0,0,24,449,1,0,0,0,26,451,1,0,0,0,
        28,456,1,0,0,0,30,459,1,0,0,0,32,462,1,0,0,0,34,465,1,0,0,0,36,468,
        1,0,0,0,38,471,1,0,0,0,40,481,1,0,0,0,42,486,1,0,0,0,44,499,1,0,
        0,0,46,507,1,0,0,0,48,517,1,0,0,0,50,526,1,0,0,0,52,528,1,0,0,0,
        54,539,1,0,0,0,56,546,1,0,0,0,58,548,1,0,0,0,60,563,1,0,0,0,62,571,
        1,0,0,0,64,582,1,0,0,0,66,590,1,0,0,0,68,592,1,0,0,0,70,612,1,0,
        0,0,72,614,1,0,0,0,74,633,1,0,0,0,76,659,1,0,0,0,78,662,1,0,0,0,
        80,670,1,0,0,0,82,672,1,0,0,0,84,697,1,0,0,0,86,701,1,0,0,0,88,703,
        1,0,0,0,90,707,1,0,0,0,92,715,1,0,0,0,94,731,1,0,0,0,96,733,1,0,
        0,0,98,740,1,0,0,0,100,742,1,0,0,0,102,746,1,0,0,0,104,753,1,0,0,
        0,106,767,1,0,0,0,108,769,1,0,0,0,110,774,1,0,0,0,112,776,1,0,0,
        0,114,781,1,0,0,0,116,800,1,0,0,0,118,802,1,0,0,0,120,808,1,0,0,
        0,122,810,1,0,0,0,124,821,1,0,0,0,126,832,1,0,0,0,128,846,1,0,0,
        0,130,848,1,0,0,0,132,866,1,0,0,0,134,868,1,0,0,0,136,890,1,0,0,
        0,138,892,1,0,0,0,140,894,1,0,0,0,142,915,1,0,0,0,144,917,1,0,0,
        0,146,939,1,0,0,0,148,960,1,0,0,0,150,962,1,0,0,0,152,964,1,0,0,
        0,154,973,1,0,0,0,156,975,1,0,0,0,158,990,1,0,0,0,160,994,1,0,0,
        0,162,996,1,0,0,0,164,1011,1,0,0,0,166,1031,1,0,0,0,168,1033,1,0,
        0,0,170,1045,1,0,0,0,172,1057,1,0,0,0,174,1076,1,0,0,0,176,1094,
        1,0,0,0,178,1109,1,0,0,0,180,1164,1,0,0,0,182,1166,1,0,0,0,184,1177,
        1,0,0,0,186,1204,1,0,0,0,188,1208,1,0,0,0,190,1222,1,0,0,0,192,1236,
        1,0,0,0,194,1254,1,0,0,0,196,1261,1,0,0,0,198,1272,1,0,0,0,200,1300,
        1,0,0,0,202,1302,1,0,0,0,204,1343,1,0,0,0,206,1345,1,0,0,0,208,1347,
        1,0,0,0,210,1363,1,0,0,0,212,1387,1,0,0,0,214,1389,1,0,0,0,216,1395,
        1,0,0,0,218,1404,1,0,0,0,220,1415,1,0,0,0,222,1417,1,0,0,0,224,1447,
        1,0,0,0,226,1460,1,0,0,0,228,1475,1,0,0,0,230,1477,1,0,0,0,232,1519,
        1,0,0,0,234,1543,1,0,0,0,236,1545,1,0,0,0,238,1565,1,0,0,0,240,1603,
        1,0,0,0,242,1605,1,0,0,0,244,1613,1,0,0,0,246,1619,1,0,0,0,248,1621,
        1,0,0,0,250,1638,1,0,0,0,252,1640,1,0,0,0,254,1648,1,0,0,0,256,1666,
        1,0,0,0,258,1679,1,0,0,0,260,1684,1,0,0,0,262,1691,1,0,0,0,264,1721,
        1,0,0,0,266,1723,1,0,0,0,268,1740,1,0,0,0,270,1742,1,0,0,0,272,1748,
        1,0,0,0,274,1764,1,0,0,0,276,1776,1,0,0,0,278,1801,1,0,0,0,280,1803,
        1,0,0,0,282,1824,1,0,0,0,284,1837,1,0,0,0,286,1839,1,0,0,0,288,1847,
        1,0,0,0,290,1855,1,0,0,0,292,1857,1,0,0,0,294,1865,1,0,0,0,296,1885,
        1,0,0,0,298,1900,1,0,0,0,300,1902,1,0,0,0,302,1905,1,0,0,0,304,1921,
        1,0,0,0,306,1927,1,0,0,0,308,1933,1,0,0,0,310,1947,1,0,0,0,312,1949,
        1,0,0,0,314,1957,1,0,0,0,316,1964,1,0,0,0,318,1980,1,0,0,0,320,1986,
        1,0,0,0,322,1988,1,0,0,0,324,1996,1,0,0,0,326,2001,1,0,0,0,328,2003,
        1,0,0,0,330,2011,1,0,0,0,332,2021,1,0,0,0,334,2023,1,0,0,0,336,2025,
        1,0,0,0,338,2030,1,0,0,0,340,2034,1,0,0,0,342,2047,1,0,0,0,344,349,
        3,2,1,0,345,349,3,8,4,0,346,349,3,16,8,0,347,349,3,12,6,0,348,344,
        1,0,0,0,348,345,1,0,0,0,348,346,1,0,0,0,348,347,1,0,0,0,349,1,1,
        0,0,0,350,352,3,4,2,0,351,350,1,0,0,0,351,352,1,0,0,0,352,354,1,
        0,0,0,353,355,3,36,18,0,354,353,1,0,0,0,354,355,1,0,0,0,355,356,
        1,0,0,0,356,357,3,44,22,0,357,358,5,155,0,0,358,3,1,0,0,0,359,360,
        5,86,0,0,360,362,3,340,170,0,361,363,3,6,3,0,362,361,1,0,0,0,362,
        363,1,0,0,0,363,364,1,0,0,0,364,365,5,139,0,0,365,5,1,0,0,0,366,
        375,5,147,0,0,367,372,3,324,162,0,368,369,5,138,0,0,369,371,3,324,
        162,0,370,368,1,0,0,0,371,374,1,0,0,0,372,370,1,0,0,0,372,373,1,
        0,0,0,373,376,1,0,0,0,374,372,1,0,0,0,375,367,1,0,0,0,375,376,1,
        0,0,0,376,377,1,0,0,0,377,378,5,148,0,0,378,7,1,0,0,0,379,381,3,
        10,5,0,380,382,3,36,18,0,381,380,1,0,0,0,381,382,1,0,0,0,382,383,
        1,0,0,0,383,384,3,44,22,0,384,385,5,155,0,0,385,9,1,0,0,0,386,387,
        5,62,0,0,387,391,3,340,170,0,388,390,3,316,158,0,389,388,1,0,0,0,
        390,393,1,0,0,0,391,389,1,0,0,0,391,392,1,0,0,0,392,394,1,0,0,0,
        393,391,1,0,0,0,394,395,5,139,0,0,395,11,1,0,0,0,396,397,3,14,7,
        0,397,399,3,32,16,0,398,400,3,30,15,0,399,398,1,0,0,0,399,400,1,
        0,0,0,400,401,1,0,0,0,401,402,5,34,0,0,402,403,5,155,0,0,403,13,
        1,0,0,0,404,405,5,79,0,0,405,406,3,340,170,0,406,407,5,139,0,0,407,
        15,1,0,0,0,408,409,3,18,9,0,409,410,3,20,10,0,410,411,3,22,11,0,
        411,412,3,24,12,0,412,413,5,155,0,0,413,17,1,0,0,0,414,415,5,118,
        0,0,415,419,3,340,170,0,416,418,3,316,158,0,417,416,1,0,0,0,418,
        421,1,0,0,0,419,417,1,0,0,0,419,420,1,0,0,0,420,422,1,0,0,0,421,
        419,1,0,0,0,422,423,5,139,0,0,423,19,1,0,0,0,424,426,5,59,0,0,425,
        427,3,34,17,0,426,425,1,0,0,0,426,427,1,0,0,0,427,431,1,0,0,0,428,
        430,3,50,25,0,429,428,1,0,0,0,430,433,1,0,0,0,431,429,1,0,0,0,431,
        432,1,0,0,0,432,21,1,0,0,0,433,431,1,0,0,0,434,436,5,52,0,0,435,
        437,3,34,17,0,436,435,1,0,0,0,436,437,1,0,0,0,437,441,1,0,0,0,438,
        440,3,48,24,0,439,438,1,0,0,0,440,443,1,0,0,0,441,439,1,0,0,0,441,
        442,1,0,0,0,442,23,1,0,0,0,443,441,1,0,0,0,444,445,3,26,13,0,445,
        446,5,34,0,0,446,450,1,0,0,0,447,450,3,270,135,0,448,450,5,34,0,
        0,449,444,1,0,0,0,449,447,1,0,0,0,449,448,1,0,0,0,450,25,1,0,0,0,
        451,452,5,57,0,0,452,454,3,272,136,0,453,455,3,28,14,0,454,453,1,
        0,0,0,454,455,1,0,0,0,455,27,1,0,0,0,456,457,5,44,0,0,457,458,3,
        272,136,0,458,29,1,0,0,0,459,460,5,20,0,0,460,461,3,38,19,0,461,
        31,1,0,0,0,462,463,5,100,0,0,463,464,3,42,21,0,464,33,1,0,0,0,465,
        466,5,121,0,0,466,467,3,42,21,0,467,35,1,0,0,0,468,469,5,121,0,0,
        469,470,3,38,19,0,470,37,1,0,0,0,471,476,3,40,20,0,472,473,5,138,
        0,0,473,475,3,40,20,0,474,472,1,0,0,0,475,478,1,0,0,0,476,474,1,
        0,0,0,476,477,1,0,0,0,477,479,1,0,0,0,478,476,1,0,0,0,479,480,5,
        139,0,0,480,39,1,0,0,0,481,484,3,340,170,0,482,483,5,54,0,0,483,
        485,5,188,0,0,484,482,1,0,0,0,484,485,1,0,0,0,485,41,1,0,0,0,486,
        491,3,340,170,0,487,488,5,138,0,0,488,490,3,340,170,0,489,487,1,
        0,0,0,490,493,1,0,0,0,491,489,1,0,0,0,491,492,1,0,0,0,492,494,1,
        0,0,0,493,491,1,0,0,0,494,495,5,139,0,0,495,43,1,0,0,0,496,498,3,
        48,24,0,497,496,1,0,0,0,498,501,1,0,0,0,499,497,1,0,0,0,499,500,
        1,0,0,0,500,503,1,0,0,0,501,499,1,0,0,0,502,504,3,46,23,0,503,502,
        1,0,0,0,503,504,1,0,0,0,504,45,1,0,0,0,505,508,3,270,135,0,506,508,
        3,294,147,0,507,505,1,0,0,0,507,506,1,0,0,0,508,47,1,0,0,0,509,518,
        3,52,26,0,510,518,3,54,27,0,511,518,3,60,30,0,512,518,3,64,32,0,
        513,518,3,200,100,0,514,518,3,202,101,0,515,518,3,210,105,0,516,
        518,3,72,36,0,517,509,1,0,0,0,517,510,1,0,0,0,517,511,1,0,0,0,517,
        512,1,0,0,0,517,513,1,0,0,0,517,514,1,0,0,0,517,515,1,0,0,0,517,
        516,1,0,0,0,518,49,1,0,0,0,519,527,3,210,105,0,520,527,3,202,101,
        0,521,527,3,60,30,0,522,527,3,64,32,0,523,527,3,200,100,0,524,527,
        3,72,36,0,525,527,3,54,27,0,526,519,1,0,0,0,526,520,1,0,0,0,526,
        521,1,0,0,0,526,522,1,0,0,0,526,523,1,0,0,0,526,524,1,0,0,0,526,
        525,1,0,0,0,527,51,1,0,0,0,528,529,5,61,0,0,529,534,3,332,166,0,
        530,531,5,138,0,0,531,533,3,332,166,0,532,530,1,0,0,0,533,536,1,
        0,0,0,534,532,1,0,0,0,534,535,1,0,0,0,535,537,1,0,0,0,536,534,1,
        0,0,0,537,538,5,139,0,0,538,53,1,0,0,0,539,543,3,56,28,0,540,542,
        3,58,29,0,541,540,1,0,0,0,542,545,1,0,0,0,543,541,1,0,0,0,543,544,
        1,0,0,0,544,55,1,0,0,0,545,543,1,0,0,0,546,547,7,0,0,0,547,57,1,
        0,0,0,548,551,3,324,162,0,549,550,5,140,0,0,550,552,3,76,38,0,551,
        549,1,0,0,0,551,552,1,0,0,0,552,553,1,0,0,0,553,554,5,141,0,0,554,
        558,3,278,139,0,555,557,3,316,158,0,556,555,1,0,0,0,557,560,1,0,
        0,0,558,556,1,0,0,0,558,559,1,0,0,0,559,561,1,0,0,0,560,558,1,0,
        0,0,561,562,5,139,0,0,562,59,1,0,0,0,563,564,5,117,0,0,564,568,3,
        62,31,0,565,567,3,62,31,0,566,565,1,0,0,0,567,570,1,0,0,0,568,566,
        1,0,0,0,568,569,1,0,0,0,569,61,1,0,0,0,570,568,1,0,0,0,571,572,3,
        118,59,0,572,573,5,141,0,0,573,577,3,76,38,0,574,576,3,316,158,0,
        575,574,1,0,0,0,576,579,1,0,0,0,577,575,1,0,0,0,577,578,1,0,0,0,
        578,580,1,0,0,0,579,577,1,0,0,0,580,581,5,139,0,0,581,63,1,0,0,0,
        582,583,3,66,33,0,583,587,3,68,34,0,584,586,3,68,34,0,585,584,1,
        0,0,0,586,589,1,0,0,0,587,585,1,0,0,0,587,588,1,0,0,0,588,65,1,0,
        0,0,589,587,1,0,0,0,590,591,7,1,0,0,591,67,1,0,0,0,592,593,3,330,
        165,0,593,594,5,140,0,0,594,596,3,76,38,0,595,597,3,70,35,0,596,
        595,1,0,0,0,596,597,1,0,0,0,597,601,1,0,0,0,598,600,3,316,158,0,
        599,598,1,0,0,0,600,603,1,0,0,0,601,599,1,0,0,0,601,602,1,0,0,0,
        602,604,1,0,0,0,603,601,1,0,0,0,604,605,5,139,0,0,605,69,1,0,0,0,
        606,607,5,1,0,0,607,613,3,324,162,0,608,609,5,1,0,0,609,613,3,278,
        139,0,610,611,5,141,0,0,611,613,3,278,139,0,612,606,1,0,0,0,612,
        608,1,0,0,0,612,610,1,0,0,0,613,71,1,0,0,0,614,615,5,39,0,0,615,
        616,3,324,162,0,616,623,3,74,37,0,617,618,5,138,0,0,618,619,3,324,
        162,0,619,620,3,74,37,0,620,622,1,0,0,0,621,617,1,0,0,0,622,625,
        1,0,0,0,623,621,1,0,0,0,623,624,1,0,0,0,624,626,1,0,0,0,625,623,
        1,0,0,0,626,627,5,139,0,0,627,73,1,0,0,0,628,630,5,147,0,0,629,631,
        3,216,108,0,630,629,1,0,0,0,630,631,1,0,0,0,631,632,1,0,0,0,632,
        634,5,148,0,0,633,628,1,0,0,0,633,634,1,0,0,0,634,637,1,0,0,0,635,
        636,5,55,0,0,636,638,3,226,113,0,637,635,1,0,0,0,637,638,1,0,0,0,
        638,641,1,0,0,0,639,640,5,66,0,0,640,642,3,226,113,0,641,639,1,0,
        0,0,641,642,1,0,0,0,642,644,1,0,0,0,643,645,5,101,0,0,644,643,1,
        0,0,0,644,645,1,0,0,0,645,75,1,0,0,0,646,660,3,78,39,0,647,660,3,
        92,46,0,648,660,3,94,47,0,649,660,3,98,49,0,650,660,3,108,54,0,651,
        653,5,117,0,0,652,651,1,0,0,0,652,653,1,0,0,0,653,654,1,0,0,0,654,
        656,3,116,58,0,655,657,3,130,65,0,656,655,1,0,0,0,656,657,1,0,0,
        0,657,660,1,0,0,0,658,660,3,110,55,0,659,646,1,0,0,0,659,647,1,0,
        0,0,659,648,1,0,0,0,659,649,1,0,0,0,659,650,1,0,0,0,659,652,1,0,
        0,0,659,658,1,0,0,0,660,77,1,0,0,0,661,663,5,80,0,0,662,661,1,0,
        0,0,662,663,1,0,0,0,663,664,1,0,0,0,664,665,3,80,40,0,665,79,1,0,
        0,0,666,671,3,82,41,0,667,671,3,88,44,0,668,671,3,90,45,0,669,671,
        3,132,66,0,670,666,1,0,0,0,670,667,1,0,0,0,670,668,1,0,0,0,670,669,
        1,0,0,0,671,81,1,0,0,0,672,687,5,6,0,0,673,675,5,149,0,0,674,676,
        3,84,42,0,675,674,1,0,0,0,675,676,1,0,0,0,676,683,1,0,0,0,677,679,
        5,138,0,0,678,680,3,84,42,0,679,678,1,0,0,0,679,680,1,0,0,0,680,
        682,1,0,0,0,681,677,1,0,0,0,682,685,1,0,0,0,683,681,1,0,0,0,683,
        684,1,0,0,0,684,686,1,0,0,0,685,683,1,0,0,0,686,688,5,151,0,0,687,
        673,1,0,0,0,687,688,1,0,0,0,688,689,1,0,0,0,689,690,5,72,0,0,690,
        691,3,86,43,0,691,83,1,0,0,0,692,698,3,116,58,0,693,694,3,226,113,
        0,694,695,5,156,0,0,695,696,3,226,113,0,696,698,1,0,0,0,697,692,
        1,0,0,0,697,693,1,0,0,0,698,85,1,0,0,0,699,702,5,18,0,0,700,702,
        3,76,38,0,701,699,1,0,0,0,701,700,1,0,0,0,702,87,1,0,0,0,703,704,
        5,105,0,0,704,705,5,72,0,0,705,706,3,76,38,0,706,89,1,0,0,0,707,
        710,5,42,0,0,708,709,5,72,0,0,709,711,3,76,38,0,710,708,1,0,0,0,
        710,711,1,0,0,0,711,91,1,0,0,0,712,713,5,153,0,0,713,716,3,76,38,
        0,714,716,5,83,0,0,715,712,1,0,0,0,715,714,1,0,0,0,716,93,1,0,0,
        0,717,722,5,112,0,0,718,719,5,149,0,0,719,720,3,226,113,0,720,721,
        5,151,0,0,721,723,1,0,0,0,722,718,1,0,0,0,722,723,1,0,0,0,723,732,
        1,0,0,0,724,726,5,117,0,0,725,724,1,0,0,0,725,726,1,0,0,0,726,727,
        1,0,0,0,727,729,5,5,0,0,728,730,3,96,48,0,729,728,1,0,0,0,729,730,
        1,0,0,0,730,732,1,0,0,0,731,717,1,0,0,0,731,725,1,0,0,0,732,95,1,
        0,0,0,733,734,5,147,0,0,734,735,3,334,167,0,735,736,5,148,0,0,736,
        97,1,0,0,0,737,741,3,100,50,0,738,741,3,102,51,0,739,741,3,104,52,
        0,740,737,1,0,0,0,740,738,1,0,0,0,740,739,1,0,0,0,741,99,1,0,0,0,
        742,743,3,106,53,0,743,744,5,72,0,0,744,745,5,71,0,0,745,101,1,0,
        0,0,746,751,3,106,53,0,747,749,5,139,0,0,748,747,1,0,0,0,748,749,
        1,0,0,0,749,750,1,0,0,0,750,752,3,312,156,0,751,748,1,0,0,0,751,
        752,1,0,0,0,752,103,1,0,0,0,753,754,5,95,0,0,754,755,5,115,0,0,755,
        756,3,106,53,0,756,105,1,0,0,0,757,759,5,48,0,0,758,760,3,214,107,
        0,759,758,1,0,0,0,759,760,1,0,0,0,760,761,1,0,0,0,761,762,5,140,
        0,0,762,768,3,76,38,0,763,765,5,85,0,0,764,766,3,214,107,0,765,764,
        1,0,0,0,765,766,1,0,0,0,766,768,1,0,0,0,767,757,1,0,0,0,767,763,
        1,0,0,0,768,107,1,0,0,0,769,770,5,124,0,0,770,109,1,0,0,0,771,775,
        3,324,162,0,772,775,3,112,56,0,773,775,3,114,57,0,774,771,1,0,0,
        0,774,772,1,0,0,0,774,773,1,0,0,0,775,111,1,0,0,0,776,779,3,278,
        139,0,777,778,5,156,0,0,778,780,3,278,139,0,779,777,1,0,0,0,779,
        780,1,0,0,0,780,113,1,0,0,0,781,782,5,147,0,0,782,785,3,324,162,
        0,783,784,5,141,0,0,784,786,3,226,113,0,785,783,1,0,0,0,785,786,
        1,0,0,0,786,795,1,0,0,0,787,788,5,138,0,0,788,791,3,324,162,0,789,
        790,5,141,0,0,790,792,3,226,113,0,791,789,1,0,0,0,791,792,1,0,0,
        0,792,794,1,0,0,0,793,787,1,0,0,0,794,797,1,0,0,0,795,793,1,0,0,
        0,795,796,1,0,0,0,796,798,1,0,0,0,797,795,1,0,0,0,798,799,5,148,
        0,0,799,115,1,0,0,0,800,801,3,338,169,0,801,117,1,0,0,0,802,804,
        3,342,171,0,803,805,3,120,60,0,804,803,1,0,0,0,804,805,1,0,0,0,805,
        119,1,0,0,0,806,809,3,122,61,0,807,809,3,124,62,0,808,806,1,0,0,
        0,808,807,1,0,0,0,809,121,1,0,0,0,810,811,5,143,0,0,811,816,3,324,
        162,0,812,813,5,138,0,0,813,815,3,324,162,0,814,812,1,0,0,0,815,
        818,1,0,0,0,816,814,1,0,0,0,816,817,1,0,0,0,817,819,1,0,0,0,818,
        816,1,0,0,0,819,820,5,146,0,0,820,123,1,0,0,0,821,822,5,143,0,0,
        822,827,3,126,63,0,823,824,5,139,0,0,824,826,3,126,63,0,825,823,
        1,0,0,0,826,829,1,0,0,0,827,825,1,0,0,0,827,828,1,0,0,0,828,830,
        1,0,0,0,829,827,1,0,0,0,830,831,5,146,0,0,831,125,1,0,0,0,832,842,
        3,324,162,0,833,834,5,140,0,0,834,839,3,128,64,0,835,836,5,138,0,
        0,836,838,3,128,64,0,837,835,1,0,0,0,838,841,1,0,0,0,839,837,1,0,
        0,0,839,840,1,0,0,0,840,843,1,0,0,0,841,839,1,0,0,0,842,833,1,0,
        0,0,842,843,1,0,0,0,843,127,1,0,0,0,844,847,3,324,162,0,845,847,
        7,2,0,0,846,844,1,0,0,0,846,845,1,0,0,0,847,129,1,0,0,0,848,849,
        5,143,0,0,849,854,3,76,38,0,850,851,5,138,0,0,851,853,3,76,38,0,
        852,850,1,0,0,0,853,856,1,0,0,0,854,852,1,0,0,0,854,855,1,0,0,0,
        855,857,1,0,0,0,856,854,1,0,0,0,857,858,5,146,0,0,858,131,1,0,0,
        0,859,867,3,134,67,0,860,867,3,136,68,0,861,867,3,144,72,0,862,867,
        3,148,74,0,863,867,3,156,78,0,864,867,3,160,80,0,865,867,3,176,88,
        0,866,859,1,0,0,0,866,860,1,0,0,0,866,861,1,0,0,0,866,862,1,0,0,
        0,866,863,1,0,0,0,866,864,1,0,0,0,866,865,1,0,0,0,867,133,1,0,0,
        0,868,869,5,17,0,0,869,870,5,72,0,0,870,871,3,116,58,0,871,135,1,
        0,0,0,872,874,5,17,0,0,873,875,3,138,69,0,874,873,1,0,0,0,874,875,
        1,0,0,0,875,877,1,0,0,0,876,878,3,140,70,0,877,876,1,0,0,0,877,878,
        1,0,0,0,878,882,1,0,0,0,879,881,3,142,71,0,880,879,1,0,0,0,881,884,
        1,0,0,0,882,880,1,0,0,0,882,883,1,0,0,0,883,885,1,0,0,0,884,882,
        1,0,0,0,885,891,5,34,0,0,886,888,5,17,0,0,887,889,3,140,70,0,888,
        887,1,0,0,0,888,889,1,0,0,0,889,891,1,0,0,0,890,872,1,0,0,0,890,
        886,1,0,0,0,891,137,1,0,0,0,892,893,7,3,0,0,893,139,1,0,0,0,894,
        895,5,147,0,0,895,900,3,118,59,0,896,897,5,138,0,0,897,899,3,118,
        59,0,898,896,1,0,0,0,899,902,1,0,0,0,900,898,1,0,0,0,900,901,1,0,
        0,0,901,903,1,0,0,0,902,900,1,0,0,0,903,904,5,148,0,0,904,141,1,
        0,0,0,905,916,3,198,99,0,906,916,3,180,90,0,907,916,3,182,91,0,908,
        916,3,184,92,0,909,916,3,54,27,0,910,916,3,60,30,0,911,913,5,17,
        0,0,912,911,1,0,0,0,912,913,1,0,0,0,913,914,1,0,0,0,914,916,3,64,
        32,0,915,905,1,0,0,0,915,906,1,0,0,0,915,907,1,0,0,0,915,908,1,0,
        0,0,915,909,1,0,0,0,915,910,1,0,0,0,915,912,1,0,0,0,916,143,1,0,
        0,0,917,918,5,17,0,0,918,920,5,50,0,0,919,921,3,140,70,0,920,919,
        1,0,0,0,920,921,1,0,0,0,921,922,1,0,0,0,922,923,5,46,0,0,923,927,
        3,116,58,0,924,926,3,146,73,0,925,924,1,0,0,0,926,929,1,0,0,0,927,
        925,1,0,0,0,927,928,1,0,0,0,928,930,1,0,0,0,929,927,1,0,0,0,930,
        931,5,34,0,0,931,145,1,0,0,0,932,940,3,198,99,0,933,940,3,180,90,
        0,934,940,3,184,92,0,935,937,5,17,0,0,936,935,1,0,0,0,936,937,1,
        0,0,0,937,938,1,0,0,0,938,940,3,64,32,0,939,932,1,0,0,0,939,933,
        1,0,0,0,939,934,1,0,0,0,939,936,1,0,0,0,940,147,1,0,0,0,941,943,
        3,150,75,0,942,944,3,140,70,0,943,942,1,0,0,0,943,944,1,0,0,0,944,
        946,1,0,0,0,945,947,3,152,76,0,946,945,1,0,0,0,946,947,1,0,0,0,947,
        951,1,0,0,0,948,950,3,154,77,0,949,948,1,0,0,0,950,953,1,0,0,0,951,
        949,1,0,0,0,951,952,1,0,0,0,952,954,1,0,0,0,953,951,1,0,0,0,954,
        955,5,34,0,0,955,961,1,0,0,0,956,958,3,150,75,0,957,959,3,140,70,
        0,958,957,1,0,0,0,958,959,1,0,0,0,959,961,1,0,0,0,960,941,1,0,0,
        0,960,956,1,0,0,0,961,149,1,0,0,0,962,963,7,4,0,0,963,151,1,0,0,
        0,964,965,5,149,0,0,965,966,5,188,0,0,966,967,5,151,0,0,967,153,
        1,0,0,0,968,974,3,180,90,0,969,971,5,17,0,0,970,969,1,0,0,0,970,
        971,1,0,0,0,971,972,1,0,0,0,972,974,3,184,92,0,973,968,1,0,0,0,973,
        970,1,0,0,0,974,155,1,0,0,0,975,977,5,71,0,0,976,978,3,140,70,0,
        977,976,1,0,0,0,977,978,1,0,0,0,978,982,1,0,0,0,979,981,3,158,79,
        0,980,979,1,0,0,0,981,984,1,0,0,0,982,980,1,0,0,0,982,983,1,0,0,
        0,983,985,1,0,0,0,984,982,1,0,0,0,985,986,5,34,0,0,986,157,1,0,0,
        0,987,991,3,198,99,0,988,991,3,180,90,0,989,991,3,182,91,0,990,987,
        1,0,0,0,990,988,1,0,0,0,990,989,1,0,0,0,991,159,1,0,0,0,992,995,
        3,162,81,0,993,995,3,164,82,0,994,992,1,0,0,0,994,993,1,0,0,0,995,
        161,1,0,0,0,996,1000,5,94,0,0,997,999,3,168,84,0,998,997,1,0,0,0,
        999,1002,1,0,0,0,1000,998,1,0,0,0,1000,1001,1,0,0,0,1001,1006,1,
        0,0,0,1002,1000,1,0,0,0,1003,1005,3,166,83,0,1004,1003,1,0,0,0,1005,
        1008,1,0,0,0,1006,1004,1,0,0,0,1006,1007,1,0,0,0,1007,1009,1,0,0,
        0,1008,1006,1,0,0,0,1009,1010,5,34,0,0,1010,163,1,0,0,0,1011,1015,
        5,94,0,0,1012,1014,3,168,84,0,1013,1012,1,0,0,0,1014,1017,1,0,0,
        0,1015,1013,1,0,0,0,1015,1016,1,0,0,0,1016,1018,1,0,0,0,1017,1015,
        1,0,0,0,1018,1019,3,172,86,0,1019,1020,5,34,0,0,1020,165,1,0,0,0,
        1021,1032,3,198,99,0,1022,1032,3,180,90,0,1023,1032,3,184,92,0,1024,
        1032,3,54,27,0,1025,1032,3,60,30,0,1026,1032,3,168,84,0,1027,1029,
        5,17,0,0,1028,1027,1,0,0,0,1028,1029,1,0,0,0,1029,1030,1,0,0,0,1030,
        1032,3,64,32,0,1031,1021,1,0,0,0,1031,1022,1,0,0,0,1031,1023,1,0,
        0,0,1031,1024,1,0,0,0,1031,1025,1,0,0,0,1031,1026,1,0,0,0,1031,1028,
        1,0,0,0,1032,167,1,0,0,0,1033,1034,3,328,164,0,1034,1035,5,140,0,
        0,1035,1039,3,76,38,0,1036,1038,3,316,158,0,1037,1036,1,0,0,0,1038,
        1041,1,0,0,0,1039,1037,1,0,0,0,1039,1040,1,0,0,0,1040,1043,1,0,0,
        0,1041,1039,1,0,0,0,1042,1044,5,139,0,0,1043,1042,1,0,0,0,1043,1044,
        1,0,0,0,1044,169,1,0,0,0,1045,1046,3,328,164,0,1046,1047,5,140,0,
        0,1047,1051,3,76,38,0,1048,1050,3,316,158,0,1049,1048,1,0,0,0,1050,
        1053,1,0,0,0,1051,1049,1,0,0,0,1051,1052,1,0,0,0,1052,1055,1,0,0,
        0,1053,1051,1,0,0,0,1054,1056,5,139,0,0,1055,1054,1,0,0,0,1055,1056,
        1,0,0,0,1056,171,1,0,0,0,1057,1061,5,15,0,0,1058,1059,3,324,162,
        0,1059,1060,5,140,0,0,1060,1062,1,0,0,0,1061,1058,1,0,0,0,1061,1062,
        1,0,0,0,1062,1063,1,0,0,0,1063,1064,3,76,38,0,1064,1067,5,72,0,0,
        1065,1068,3,174,87,0,1066,1068,5,139,0,0,1067,1065,1,0,0,0,1067,
        1066,1,0,0,0,1068,1073,1,0,0,0,1069,1072,3,174,87,0,1070,1072,5,
        139,0,0,1071,1069,1,0,0,0,1071,1070,1,0,0,0,1072,1075,1,0,0,0,1073,
        1071,1,0,0,0,1073,1074,1,0,0,0,1074,173,1,0,0,0,1075,1073,1,0,0,
        0,1076,1081,3,278,139,0,1077,1078,5,138,0,0,1078,1080,3,278,139,
        0,1079,1077,1,0,0,0,1080,1083,1,0,0,0,1081,1079,1,0,0,0,1081,1082,
        1,0,0,0,1082,1084,1,0,0,0,1083,1081,1,0,0,0,1084,1085,5,140,0,0,
        1085,1089,5,147,0,0,1086,1088,3,170,85,0,1087,1086,1,0,0,0,1088,
        1091,1,0,0,0,1089,1087,1,0,0,0,1089,1090,1,0,0,0,1090,1092,1,0,0,
        0,1091,1089,1,0,0,0,1092,1093,5,148,0,0,1093,175,1,0,0,0,1094,1095,
        5,94,0,0,1095,1096,5,50,0,0,1096,1097,5,46,0,0,1097,1101,3,116,58,
        0,1098,1100,3,178,89,0,1099,1098,1,0,0,0,1100,1103,1,0,0,0,1101,
        1099,1,0,0,0,1101,1102,1,0,0,0,1102,1104,1,0,0,0,1103,1101,1,0,0,
        0,1104,1105,5,34,0,0,1105,177,1,0,0,0,1106,1110,3,198,99,0,1107,
        1110,3,180,90,0,1108,1110,3,184,92,0,1109,1106,1,0,0,0,1109,1107,
        1,0,0,0,1109,1108,1,0,0,0,1110,179,1,0,0,0,1111,1113,5,17,0,0,1112,
        1111,1,0,0,0,1112,1113,1,0,0,0,1113,1114,1,0,0,0,1114,1115,3,206,
        103,0,1115,1117,3,324,162,0,1116,1118,3,120,60,0,1117,1116,1,0,0,
        0,1117,1118,1,0,0,0,1118,1120,1,0,0,0,1119,1121,3,214,107,0,1120,
        1119,1,0,0,0,1120,1121,1,0,0,0,1121,1122,1,0,0,0,1122,1126,5,139,
        0,0,1123,1125,3,296,148,0,1124,1123,1,0,0,0,1125,1128,1,0,0,0,1126,
        1124,1,0,0,0,1126,1127,1,0,0,0,1127,1165,1,0,0,0,1128,1126,1,0,0,
        0,1129,1131,5,17,0,0,1130,1129,1,0,0,0,1130,1131,1,0,0,0,1131,1132,
        1,0,0,0,1132,1133,5,48,0,0,1133,1135,3,324,162,0,1134,1136,3,120,
        60,0,1135,1134,1,0,0,0,1135,1136,1,0,0,0,1136,1138,1,0,0,0,1137,
        1139,3,214,107,0,1138,1137,1,0,0,0,1138,1139,1,0,0,0,1139,1140,1,
        0,0,0,1140,1141,5,140,0,0,1141,1142,3,76,38,0,1142,1146,5,139,0,
        0,1143,1145,3,296,148,0,1144,1143,1,0,0,0,1145,1148,1,0,0,0,1146,
        1144,1,0,0,0,1146,1147,1,0,0,0,1147,1165,1,0,0,0,1148,1146,1,0,0,
        0,1149,1151,5,17,0,0,1150,1149,1,0,0,0,1150,1151,1,0,0,0,1151,1152,
        1,0,0,0,1152,1153,5,74,0,0,1153,1155,3,324,162,0,1154,1156,3,120,
        60,0,1155,1154,1,0,0,0,1155,1156,1,0,0,0,1156,1158,1,0,0,0,1157,
        1159,3,214,107,0,1158,1157,1,0,0,0,1158,1159,1,0,0,0,1159,1160,1,
        0,0,0,1160,1161,5,140,0,0,1161,1162,3,76,38,0,1162,1163,5,139,0,
        0,1163,1165,1,0,0,0,1164,1112,1,0,0,0,1164,1130,1,0,0,0,1164,1150,
        1,0,0,0,1165,181,1,0,0,0,1166,1167,3,328,164,0,1167,1168,5,140,0,
        0,1168,1169,3,76,38,0,1169,1173,5,139,0,0,1170,1172,3,316,158,0,
        1171,1170,1,0,0,0,1172,1175,1,0,0,0,1173,1171,1,0,0,0,1173,1174,
        1,0,0,0,1174,183,1,0,0,0,1175,1173,1,0,0,0,1176,1178,5,17,0,0,1177,
        1176,1,0,0,0,1177,1178,1,0,0,0,1178,1179,1,0,0,0,1179,1180,5,87,
        0,0,1180,1182,3,324,162,0,1181,1183,3,186,93,0,1182,1181,1,0,0,0,
        1182,1183,1,0,0,0,1183,1186,1,0,0,0,1184,1185,5,140,0,0,1185,1187,
        3,118,59,0,1186,1184,1,0,0,0,1186,1187,1,0,0,0,1187,1189,1,0,0,0,
        1188,1190,3,188,94,0,1189,1188,1,0,0,0,1189,1190,1,0,0,0,1190,1194,
        1,0,0,0,1191,1193,3,190,95,0,1192,1191,1,0,0,0,1193,1196,1,0,0,0,
        1194,1192,1,0,0,0,1194,1195,1,0,0,0,1195,1197,1,0,0,0,1196,1194,
        1,0,0,0,1197,1201,5,139,0,0,1198,1200,3,192,96,0,1199,1198,1,0,0,
        0,1200,1203,1,0,0,0,1201,1199,1,0,0,0,1201,1202,1,0,0,0,1202,185,
        1,0,0,0,1203,1201,1,0,0,0,1204,1205,5,149,0,0,1205,1206,3,216,108,
        0,1206,1207,5,151,0,0,1207,187,1,0,0,0,1208,1209,5,55,0,0,1209,1211,
        3,226,113,0,1210,1212,5,139,0,0,1211,1210,1,0,0,0,1211,1212,1,0,
        0,0,1212,189,1,0,0,0,1213,1223,3,194,97,0,1214,1223,3,196,98,0,1215,
        1216,5,110,0,0,1216,1223,3,226,113,0,1217,1218,5,22,0,0,1218,1223,
        3,226,113,0,1219,1223,7,5,0,0,1220,1221,5,53,0,0,1221,1223,3,116,
        58,0,1222,1213,1,0,0,0,1222,1214,1,0,0,0,1222,1215,1,0,0,0,1222,
        1217,1,0,0,0,1222,1219,1,0,0,0,1222,1220,1,0,0,0,1223,191,1,0,0,
        0,1224,1225,5,110,0,0,1225,1226,3,226,113,0,1226,1227,5,139,0,0,
        1227,1237,1,0,0,0,1228,1229,5,22,0,0,1229,1230,3,226,113,0,1230,
        1231,5,139,0,0,1231,1237,1,0,0,0,1232,1233,5,22,0,0,1233,1237,5,
        139,0,0,1234,1235,5,69,0,0,1235,1237,5,139,0,0,1236,1224,1,0,0,0,
        1236,1228,1,0,0,0,1236,1232,1,0,0,0,1236,1234,1,0,0,0,1237,193,1,
        0,0,0,1238,1239,5,92,0,0,1239,1244,3,342,171,0,1240,1241,5,149,0,
        0,1241,1242,3,226,113,0,1242,1243,5,151,0,0,1243,1245,1,0,0,0,1244,
        1240,1,0,0,0,1244,1245,1,0,0,0,1245,1255,1,0,0,0,1246,1247,5,128,
        0,0,1247,1252,3,342,171,0,1248,1249,5,149,0,0,1249,1250,3,226,113,
        0,1250,1251,5,151,0,0,1251,1253,1,0,0,0,1252,1248,1,0,0,0,1252,1253,
        1,0,0,0,1253,1255,1,0,0,0,1254,1238,1,0,0,0,1254,1246,1,0,0,0,1255,
        195,1,0,0,0,1256,1257,5,93,0,0,1257,1262,5,139,0,0,1258,1259,5,129,
        0,0,1259,1262,5,139,0,0,1260,1262,3,322,161,0,1261,1256,1,0,0,0,
        1261,1258,1,0,0,0,1261,1260,1,0,0,0,1262,197,1,0,0,0,1263,1265,5,
        111,0,0,1264,1263,1,0,0,0,1264,1265,1,0,0,0,1265,1266,1,0,0,0,1266,
        1273,5,88,0,0,1267,1269,5,111,0,0,1268,1267,1,0,0,0,1268,1269,1,
        0,0,0,1269,1270,1,0,0,0,1270,1273,5,84,0,0,1271,1273,7,6,0,0,1272,
        1264,1,0,0,0,1272,1268,1,0,0,0,1272,1271,1,0,0,0,1273,199,1,0,0,
        0,1274,1275,5,85,0,0,1275,1277,3,324,162,0,1276,1278,3,214,107,0,
        1277,1276,1,0,0,0,1277,1278,1,0,0,0,1278,1279,1,0,0,0,1279,1280,
        5,140,0,0,1280,1281,3,76,38,0,1281,1285,5,139,0,0,1282,1284,3,298,
        149,0,1283,1282,1,0,0,0,1284,1287,1,0,0,0,1285,1283,1,0,0,0,1285,
        1286,1,0,0,0,1286,1301,1,0,0,0,1287,1285,1,0,0,0,1288,1289,5,48,
        0,0,1289,1291,3,324,162,0,1290,1292,3,214,107,0,1291,1290,1,0,0,
        0,1291,1292,1,0,0,0,1292,1293,1,0,0,0,1293,1297,5,139,0,0,1294,1296,
        3,298,149,0,1295,1294,1,0,0,0,1296,1299,1,0,0,0,1297,1295,1,0,0,
        0,1297,1298,1,0,0,0,1298,1301,1,0,0,0,1299,1297,1,0,0,0,1300,1274,
        1,0,0,0,1300,1288,1,0,0,0,1301,201,1,0,0,0,1302,1303,3,204,102,0,
        1303,1307,5,139,0,0,1304,1306,3,296,148,0,1305,1304,1,0,0,0,1306,
        1309,1,0,0,0,1307,1305,1,0,0,0,1307,1308,1,0,0,0,1308,1311,1,0,0,
        0,1309,1307,1,0,0,0,1310,1312,3,222,111,0,1311,1310,1,0,0,0,1311,
        1312,1,0,0,0,1312,203,1,0,0,0,1313,1315,5,17,0,0,1314,1313,1,0,0,
        0,1314,1315,1,0,0,0,1315,1316,1,0,0,0,1316,1317,3,206,103,0,1317,
        1319,3,208,104,0,1318,1320,3,214,107,0,1319,1318,1,0,0,0,1319,1320,
        1,0,0,0,1320,1344,1,0,0,0,1321,1323,5,17,0,0,1322,1321,1,0,0,0,1322,
        1323,1,0,0,0,1323,1324,1,0,0,0,1324,1325,5,48,0,0,1325,1327,3,208,
        104,0,1326,1328,3,214,107,0,1327,1326,1,0,0,0,1327,1328,1,0,0,0,
        1328,1331,1,0,0,0,1329,1330,5,140,0,0,1330,1332,3,76,38,0,1331,1329,
        1,0,0,0,1331,1332,1,0,0,0,1332,1344,1,0,0,0,1333,1334,5,17,0,0,1334,
        1335,5,74,0,0,1335,1337,3,208,104,0,1336,1338,3,214,107,0,1337,1336,
        1,0,0,0,1337,1338,1,0,0,0,1338,1341,1,0,0,0,1339,1340,5,140,0,0,
        1340,1342,3,76,38,0,1341,1339,1,0,0,0,1341,1342,1,0,0,0,1342,1344,
        1,0,0,0,1343,1314,1,0,0,0,1343,1322,1,0,0,0,1343,1333,1,0,0,0,1344,
        205,1,0,0,0,1345,1346,7,7,0,0,1346,207,1,0,0,0,1347,1349,3,324,162,
        0,1348,1350,3,120,60,0,1349,1348,1,0,0,0,1349,1350,1,0,0,0,1350,
        1356,1,0,0,0,1351,1352,5,155,0,0,1352,1354,3,324,162,0,1353,1355,
        3,120,60,0,1354,1353,1,0,0,0,1354,1355,1,0,0,0,1355,1357,1,0,0,0,
        1356,1351,1,0,0,0,1356,1357,1,0,0,0,1357,1358,1,0,0,0,1358,1359,
        5,155,0,0,1359,1361,3,324,162,0,1360,1362,3,120,60,0,1361,1360,1,
        0,0,0,1361,1362,1,0,0,0,1362,209,1,0,0,0,1363,1364,3,212,106,0,1364,
        1368,5,139,0,0,1365,1367,3,298,149,0,1366,1365,1,0,0,0,1367,1370,
        1,0,0,0,1368,1366,1,0,0,0,1368,1369,1,0,0,0,1369,1372,1,0,0,0,1370,
        1368,1,0,0,0,1371,1373,3,224,112,0,1372,1371,1,0,0,0,1372,1373,1,
        0,0,0,1373,211,1,0,0,0,1374,1375,5,85,0,0,1375,1377,3,324,162,0,
        1376,1378,3,214,107,0,1377,1376,1,0,0,0,1377,1378,1,0,0,0,1378,1388,
        1,0,0,0,1379,1380,5,48,0,0,1380,1382,3,324,162,0,1381,1383,3,214,
        107,0,1382,1381,1,0,0,0,1382,1383,1,0,0,0,1383,1384,1,0,0,0,1384,
        1385,5,140,0,0,1385,1386,3,76,38,0,1386,1388,1,0,0,0,1387,1374,1,
        0,0,0,1387,1379,1,0,0,0,1388,213,1,0,0,0,1389,1391,5,147,0,0,1390,
        1392,3,216,108,0,1391,1390,1,0,0,0,1391,1392,1,0,0,0,1392,1393,1,
        0,0,0,1393,1394,5,148,0,0,1394,215,1,0,0,0,1395,1400,3,218,109,0,
        1396,1397,5,139,0,0,1397,1399,3,218,109,0,1398,1396,1,0,0,0,1399,
        1402,1,0,0,0,1400,1398,1,0,0,0,1400,1401,1,0,0,0,1401,217,1,0,0,
        0,1402,1400,1,0,0,0,1403,1405,3,220,110,0,1404,1403,1,0,0,0,1404,
        1405,1,0,0,0,1405,1406,1,0,0,0,1406,1409,3,330,165,0,1407,1408,5,
        140,0,0,1408,1410,3,76,38,0,1409,1407,1,0,0,0,1409,1410,1,0,0,0,
        1410,1413,1,0,0,0,1411,1412,5,141,0,0,1412,1414,3,226,113,0,1413,
        1411,1,0,0,0,1413,1414,1,0,0,0,1414,219,1,0,0,0,1415,1416,7,8,0,
        0,1416,221,1,0,0,0,1417,1418,3,44,22,0,1418,1419,5,139,0,0,1419,
        223,1,0,0,0,1420,1421,5,47,0,0,1421,1425,5,139,0,0,1422,1424,3,298,
        149,0,1423,1422,1,0,0,0,1424,1427,1,0,0,0,1425,1423,1,0,0,0,1425,
        1426,1,0,0,0,1426,1448,1,0,0,0,1427,1425,1,0,0,0,1428,1435,5,40,
        0,0,1429,1430,5,66,0,0,1430,1434,3,226,113,0,1431,1432,5,55,0,0,
        1432,1434,3,226,113,0,1433,1429,1,0,0,0,1433,1431,1,0,0,0,1434,1437,
        1,0,0,0,1435,1433,1,0,0,0,1435,1436,1,0,0,0,1436,1441,1,0,0,0,1437,
        1435,1,0,0,0,1438,1440,3,298,149,0,1439,1438,1,0,0,0,1440,1443,1,
        0,0,0,1441,1439,1,0,0,0,1441,1442,1,0,0,0,1442,1448,1,0,0,0,1443,
        1441,1,0,0,0,1444,1445,3,44,22,0,1445,1446,5,139,0,0,1446,1448,1,
        0,0,0,1447,1420,1,0,0,0,1447,1428,1,0,0,0,1447,1444,1,0,0,0,1448,
        225,1,0,0,0,1449,1461,3,228,114,0,1450,1454,3,230,115,0,1451,1452,
        3,248,124,0,1452,1453,3,230,115,0,1453,1455,1,0,0,0,1454,1451,1,
        0,0,0,1454,1455,1,0,0,0,1455,1458,1,0,0,0,1456,1457,5,141,0,0,1457,
        1459,3,226,113,0,1458,1456,1,0,0,0,1458,1459,1,0,0,0,1459,1461,1,
        0,0,0,1460,1449,1,0,0,0,1460,1450,1,0,0,0,1461,227,1,0,0,0,1462,
        1464,5,85,0,0,1463,1465,3,214,107,0,1464,1463,1,0,0,0,1464,1465,
        1,0,0,0,1465,1466,1,0,0,0,1466,1476,3,44,22,0,1467,1469,5,48,0,0,
        1468,1470,3,214,107,0,1469,1468,1,0,0,0,1469,1470,1,0,0,0,1470,1471,
        1,0,0,0,1471,1472,5,140,0,0,1472,1473,3,76,38,0,1473,1474,3,44,22,
        0,1474,1476,1,0,0,0,1475,1462,1,0,0,0,1475,1467,1,0,0,0,1476,229,
        1,0,0,0,1477,1483,3,232,116,0,1478,1479,3,246,123,0,1479,1480,3,
        232,116,0,1480,1482,1,0,0,0,1481,1478,1,0,0,0,1482,1485,1,0,0,0,
        1483,1481,1,0,0,0,1483,1484,1,0,0,0,1484,231,1,0,0,0,1485,1483,1,
        0,0,0,1486,1487,5,154,0,0,1487,1520,3,232,116,0,1488,1489,5,160,
        0,0,1489,1520,3,232,116,0,1490,1491,5,70,0,0,1491,1520,3,232,116,
        0,1492,1493,5,133,0,0,1493,1520,3,232,116,0,1494,1495,5,134,0,0,
        1495,1520,3,232,116,0,1496,1497,5,153,0,0,1497,1520,3,324,162,0,
        1498,1520,3,334,167,0,1499,1520,3,336,168,0,1500,1520,7,9,0,0,1501,
        1502,5,147,0,0,1502,1503,3,226,113,0,1503,1505,5,148,0,0,1504,1506,
        5,153,0,0,1505,1504,1,0,0,0,1505,1506,1,0,0,0,1506,1509,1,0,0,0,
        1507,1508,5,155,0,0,1508,1510,3,226,113,0,1509,1507,1,0,0,0,1509,
        1510,1,0,0,0,1510,1520,1,0,0,0,1511,1520,3,234,117,0,1512,1520,3,
        236,118,0,1513,1520,3,238,119,0,1514,1515,3,116,58,0,1515,1516,5,
        147,0,0,1516,1517,3,226,113,0,1517,1518,5,148,0,0,1518,1520,1,0,
        0,0,1519,1486,1,0,0,0,1519,1488,1,0,0,0,1519,1490,1,0,0,0,1519,1492,
        1,0,0,0,1519,1494,1,0,0,0,1519,1496,1,0,0,0,1519,1498,1,0,0,0,1519,
        1499,1,0,0,0,1519,1500,1,0,0,0,1519,1501,1,0,0,0,1519,1511,1,0,0,
        0,1519,1512,1,0,0,0,1519,1513,1,0,0,0,1519,1514,1,0,0,0,1520,233,
        1,0,0,0,1521,1526,5,189,0,0,1522,1523,5,188,0,0,1523,1525,5,189,
        0,0,1524,1522,1,0,0,0,1525,1528,1,0,0,0,1526,1524,1,0,0,0,1526,1527,
        1,0,0,0,1527,1530,1,0,0,0,1528,1526,1,0,0,0,1529,1531,5,188,0,0,
        1530,1529,1,0,0,0,1530,1531,1,0,0,0,1531,1544,1,0,0,0,1532,1537,
        5,188,0,0,1533,1534,5,189,0,0,1534,1536,5,188,0,0,1535,1533,1,0,
        0,0,1536,1539,1,0,0,0,1537,1535,1,0,0,0,1537,1538,1,0,0,0,1538,1541,
        1,0,0,0,1539,1537,1,0,0,0,1540,1542,5,189,0,0,1541,1540,1,0,0,0,
        1541,1542,1,0,0,0,1542,1544,1,0,0,0,1543,1521,1,0,0,0,1543,1532,
        1,0,0,0,1544,235,1,0,0,0,1545,1554,5,149,0,0,1546,1551,3,226,113,
        0,1547,1548,7,10,0,0,1548,1550,3,226,113,0,1549,1547,1,0,0,0,1550,
        1553,1,0,0,0,1551,1549,1,0,0,0,1551,1552,1,0,0,0,1552,1555,1,0,0,
        0,1553,1551,1,0,0,0,1554,1546,1,0,0,0,1554,1555,1,0,0,0,1555,1556,
        1,0,0,0,1556,1557,5,151,0,0,1557,237,1,0,0,0,1558,1566,5,56,0,0,
        1559,1566,3,116,58,0,1560,1562,3,240,120,0,1561,1560,1,0,0,0,1562,
        1563,1,0,0,0,1563,1561,1,0,0,0,1563,1564,1,0,0,0,1564,1566,1,0,0,
        0,1565,1558,1,0,0,0,1565,1559,1,0,0,0,1565,1561,1,0,0,0,1566,239,
        1,0,0,0,1567,1604,5,153,0,0,1568,1569,7,11,0,0,1569,1604,3,324,162,
        0,1570,1571,5,143,0,0,1571,1576,3,118,59,0,1572,1573,5,138,0,0,1573,
        1575,3,118,59,0,1574,1572,1,0,0,0,1575,1578,1,0,0,0,1576,1574,1,
        0,0,0,1576,1577,1,0,0,0,1577,1579,1,0,0,0,1578,1576,1,0,0,0,1579,
        1580,5,146,0,0,1580,1604,1,0,0,0,1581,1582,5,149,0,0,1582,1583,3,
        242,121,0,1583,1584,5,151,0,0,1584,1604,1,0,0,0,1585,1600,5,147,
        0,0,1586,1588,3,226,113,0,1587,1589,3,244,122,0,1588,1587,1,0,0,
        0,1588,1589,1,0,0,0,1589,1597,1,0,0,0,1590,1591,5,138,0,0,1591,1593,
        3,226,113,0,1592,1594,3,244,122,0,1593,1592,1,0,0,0,1593,1594,1,
        0,0,0,1594,1596,1,0,0,0,1595,1590,1,0,0,0,1596,1599,1,0,0,0,1597,
        1595,1,0,0,0,1597,1598,1,0,0,0,1598,1601,1,0,0,0,1599,1597,1,0,0,
        0,1600,1586,1,0,0,0,1600,1601,1,0,0,0,1601,1602,1,0,0,0,1602,1604,
        5,148,0,0,1603,1567,1,0,0,0,1603,1568,1,0,0,0,1603,1570,1,0,0,0,
        1603,1581,1,0,0,0,1603,1585,1,0,0,0,1604,241,1,0,0,0,1605,1610,3,
        226,113,0,1606,1607,5,138,0,0,1607,1609,3,226,113,0,1608,1606,1,
        0,0,0,1609,1612,1,0,0,0,1610,1608,1,0,0,0,1610,1611,1,0,0,0,1611,
        243,1,0,0,0,1612,1610,1,0,0,0,1613,1614,5,140,0,0,1614,1617,3,226,
        113,0,1615,1616,5,140,0,0,1616,1618,3,226,113,0,1617,1615,1,0,0,
        0,1617,1618,1,0,0,0,1618,245,1,0,0,0,1619,1620,7,12,0,0,1620,247,
        1,0,0,0,1621,1622,7,13,0,0,1622,249,1,0,0,0,1623,1639,3,252,126,
        0,1624,1639,3,254,127,0,1625,1639,3,260,130,0,1626,1639,3,262,131,
        0,1627,1639,3,264,132,0,1628,1639,3,266,133,0,1629,1639,3,282,141,
        0,1630,1639,3,292,146,0,1631,1639,3,294,147,0,1632,1639,3,270,135,
        0,1633,1634,3,332,166,0,1634,1635,5,140,0,0,1635,1636,3,250,125,
        0,1636,1639,1,0,0,0,1637,1639,3,274,137,0,1638,1623,1,0,0,0,1638,
        1624,1,0,0,0,1638,1625,1,0,0,0,1638,1626,1,0,0,0,1638,1627,1,0,0,
        0,1638,1628,1,0,0,0,1638,1629,1,0,0,0,1638,1630,1,0,0,0,1638,1631,
        1,0,0,0,1638,1632,1,0,0,0,1638,1633,1,0,0,0,1638,1637,1,0,0,0,1639,
        251,1,0,0,0,1640,1641,5,51,0,0,1641,1642,3,226,113,0,1642,1643,5,
        113,0,0,1643,1646,3,250,125,0,1644,1645,5,33,0,0,1645,1647,3,250,
        125,0,1646,1644,1,0,0,0,1646,1647,1,0,0,0,1647,253,1,0,0,0,1648,
        1649,5,15,0,0,1649,1650,3,226,113,0,1650,1654,5,72,0,0,1651,1653,
        3,256,128,0,1652,1651,1,0,0,0,1653,1656,1,0,0,0,1654,1652,1,0,0,
        0,1654,1655,1,0,0,0,1655,1662,1,0,0,0,1656,1654,1,0,0,0,1657,1658,
        5,33,0,0,1658,1660,3,272,136,0,1659,1661,5,139,0,0,1660,1659,1,0,
        0,0,1660,1661,1,0,0,0,1661,1663,1,0,0,0,1662,1657,1,0,0,0,1662,1663,
        1,0,0,0,1663,1664,1,0,0,0,1664,1665,5,34,0,0,1665,255,1,0,0,0,1666,
        1671,3,258,129,0,1667,1668,5,138,0,0,1668,1670,3,258,129,0,1669,
        1667,1,0,0,0,1670,1673,1,0,0,0,1671,1669,1,0,0,0,1671,1672,1,0,0,
        0,1672,1674,1,0,0,0,1673,1671,1,0,0,0,1674,1675,5,140,0,0,1675,1677,
        3,250,125,0,1676,1678,5,139,0,0,1677,1676,1,0,0,0,1677,1678,1,0,
        0,0,1678,257,1,0,0,0,1679,1682,3,226,113,0,1680,1681,5,156,0,0,1681,
        1683,3,226,113,0,1682,1680,1,0,0,0,1682,1683,1,0,0,0,1683,259,1,
        0,0,0,1684,1686,5,99,0,0,1685,1687,3,272,136,0,1686,1685,1,0,0,0,
        1686,1687,1,0,0,0,1687,1688,1,0,0,0,1688,1689,5,120,0,0,1689,1690,
        3,226,113,0,1690,261,1,0,0,0,1691,1692,5,126,0,0,1692,1693,3,226,
        113,0,1693,1694,5,28,0,0,1694,1695,3,250,125,0,1695,263,1,0,0,0,
        1696,1697,5,46,0,0,1697,1698,3,238,119,0,1698,1699,5,137,0,0,1699,
        1700,3,226,113,0,1700,1701,5,115,0,0,1701,1702,3,226,113,0,1702,
        1703,5,28,0,0,1703,1704,3,250,125,0,1704,1722,1,0,0,0,1705,1706,
        5,46,0,0,1706,1707,3,238,119,0,1707,1708,5,137,0,0,1708,1709,3,226,
        113,0,1709,1710,5,29,0,0,1710,1711,3,226,113,0,1711,1712,5,28,0,
        0,1712,1713,3,250,125,0,1713,1722,1,0,0,0,1714,1715,5,46,0,0,1715,
        1716,3,238,119,0,1716,1717,5,54,0,0,1717,1718,3,226,113,0,1718,1719,
        5,28,0,0,1719,1720,3,250,125,0,1720,1722,1,0,0,0,1721,1696,1,0,0,
        0,1721,1705,1,0,0,0,1721,1714,1,0,0,0,1722,265,1,0,0,0,1723,1724,
        5,127,0,0,1724,1725,3,268,134,0,1725,1726,5,28,0,0,1726,1727,3,250,
        125,0,1727,267,1,0,0,0,1728,1729,3,238,119,0,1729,1730,5,7,0,0,1730,
        1731,3,238,119,0,1731,1741,1,0,0,0,1732,1737,3,238,119,0,1733,1734,
        5,138,0,0,1734,1736,3,238,119,0,1735,1733,1,0,0,0,1736,1739,1,0,
        0,0,1737,1735,1,0,0,0,1737,1738,1,0,0,0,1738,1741,1,0,0,0,1739,1737,
        1,0,0,0,1740,1728,1,0,0,0,1740,1732,1,0,0,0,1741,269,1,0,0,0,1742,
        1744,5,13,0,0,1743,1745,3,272,136,0,1744,1743,1,0,0,0,1744,1745,
        1,0,0,0,1745,1746,1,0,0,0,1746,1747,5,34,0,0,1747,271,1,0,0,0,1748,
        1755,3,250,125,0,1749,1751,5,139,0,0,1750,1752,3,250,125,0,1751,
        1750,1,0,0,0,1751,1752,1,0,0,0,1752,1754,1,0,0,0,1753,1749,1,0,0,
        0,1754,1757,1,0,0,0,1755,1753,1,0,0,0,1755,1756,1,0,0,0,1756,273,
        1,0,0,0,1757,1755,1,0,0,0,1758,1759,3,238,119,0,1759,1760,5,137,
        0,0,1760,1761,3,226,113,0,1761,1765,1,0,0,0,1762,1765,3,238,119,
        0,1763,1765,3,276,138,0,1764,1758,1,0,0,0,1764,1762,1,0,0,0,1764,
        1763,1,0,0,0,1765,275,1,0,0,0,1766,1767,5,49,0,0,1767,1777,3,332,
        166,0,1768,1773,5,36,0,0,1769,1770,5,147,0,0,1770,1771,3,226,113,
        0,1771,1772,5,148,0,0,1772,1774,1,0,0,0,1773,1769,1,0,0,0,1773,1774,
        1,0,0,0,1774,1777,1,0,0,0,1775,1777,7,14,0,0,1776,1766,1,0,0,0,1776,
        1768,1,0,0,0,1776,1775,1,0,0,0,1777,277,1,0,0,0,1778,1779,5,147,
        0,0,1779,1784,3,280,140,0,1780,1781,5,139,0,0,1781,1783,3,280,140,
        0,1782,1780,1,0,0,0,1783,1786,1,0,0,0,1784,1782,1,0,0,0,1784,1785,
        1,0,0,0,1785,1787,1,0,0,0,1786,1784,1,0,0,0,1787,1788,5,148,0,0,
        1788,1802,1,0,0,0,1789,1790,5,147,0,0,1790,1795,3,278,139,0,1791,
        1792,5,138,0,0,1792,1794,3,278,139,0,1793,1791,1,0,0,0,1794,1797,
        1,0,0,0,1795,1793,1,0,0,0,1795,1796,1,0,0,0,1796,1798,1,0,0,0,1797,
        1795,1,0,0,0,1798,1799,5,148,0,0,1799,1802,1,0,0,0,1800,1802,3,226,
        113,0,1801,1778,1,0,0,0,1801,1789,1,0,0,0,1801,1800,1,0,0,0,1802,
        279,1,0,0,0,1803,1804,3,324,162,0,1804,1805,5,140,0,0,1805,1806,
        3,278,139,0,1806,281,1,0,0,0,1807,1809,5,116,0,0,1808,1810,3,272,
        136,0,1809,1808,1,0,0,0,1809,1810,1,0,0,0,1810,1811,1,0,0,0,1811,
        1812,5,35,0,0,1812,1813,3,284,142,0,1813,1814,5,34,0,0,1814,1825,
        1,0,0,0,1815,1817,5,116,0,0,1816,1818,3,272,136,0,1817,1816,1,0,
        0,0,1817,1818,1,0,0,0,1818,1819,1,0,0,0,1819,1821,5,45,0,0,1820,
        1822,3,272,136,0,1821,1820,1,0,0,0,1821,1822,1,0,0,0,1822,1823,1,
        0,0,0,1823,1825,5,34,0,0,1824,1807,1,0,0,0,1824,1815,1,0,0,0,1825,
        283,1,0,0,0,1826,1828,3,286,143,0,1827,1826,1,0,0,0,1828,1831,1,
        0,0,0,1829,1827,1,0,0,0,1829,1830,1,0,0,0,1830,1834,1,0,0,0,1831,
        1829,1,0,0,0,1832,1833,5,33,0,0,1833,1835,3,272,136,0,1834,1832,
        1,0,0,0,1834,1835,1,0,0,0,1835,1838,1,0,0,0,1836,1838,3,272,136,
        0,1837,1829,1,0,0,0,1837,1836,1,0,0,0,1838,285,1,0,0,0,1839,1841,
        5,73,0,0,1840,1842,3,288,144,0,1841,1840,1,0,0,0,1841,1842,1,0,0,
        0,1842,1843,1,0,0,0,1843,1844,3,116,58,0,1844,1845,5,28,0,0,1845,
        1846,3,290,145,0,1846,287,1,0,0,0,1847,1848,3,324,162,0,1848,1849,
        5,140,0,0,1849,289,1,0,0,0,1850,1852,3,250,125,0,1851,1853,5,139,
        0,0,1852,1851,1,0,0,0,1852,1853,1,0,0,0,1853,1856,1,0,0,0,1854,1856,
        5,139,0,0,1855,1850,1,0,0,0,1855,1854,1,0,0,0,1856,291,1,0,0,0,1857,
        1859,5,91,0,0,1858,1860,3,238,119,0,1859,1858,1,0,0,0,1859,1860,
        1,0,0,0,1860,1863,1,0,0,0,1861,1862,5,11,0,0,1862,1864,3,238,119,
        0,1863,1861,1,0,0,0,1863,1864,1,0,0,0,1864,293,1,0,0,0,1865,1869,
        5,8,0,0,1866,1868,8,15,0,0,1867,1866,1,0,0,0,1868,1871,1,0,0,0,1869,
        1867,1,0,0,0,1869,1870,1,0,0,0,1870,1872,1,0,0,0,1871,1869,1,0,0,
        0,1872,1873,5,34,0,0,1873,295,1,0,0,0,1874,1886,3,300,150,0,1875,
        1886,3,302,151,0,1876,1886,3,304,152,0,1877,1886,3,306,153,0,1878,
        1886,3,308,154,0,1879,1886,3,310,155,0,1880,1881,3,316,158,0,1881,
        1882,5,139,0,0,1882,1886,1,0,0,0,1883,1886,3,314,157,0,1884,1886,
        3,322,161,0,1885,1874,1,0,0,0,1885,1875,1,0,0,0,1885,1876,1,0,0,
        0,1885,1877,1,0,0,0,1885,1878,1,0,0,0,1885,1879,1,0,0,0,1885,1880,
        1,0,0,0,1885,1883,1,0,0,0,1885,1884,1,0,0,0,1886,297,1,0,0,0,1887,
        1901,3,302,151,0,1888,1901,3,308,154,0,1889,1901,3,310,155,0,1890,
        1901,3,314,157,0,1891,1892,3,316,158,0,1892,1893,5,139,0,0,1893,
        1901,1,0,0,0,1894,1896,3,312,156,0,1895,1894,1,0,0,0,1895,1896,1,
        0,0,0,1896,1897,1,0,0,0,1897,1901,3,318,159,0,1898,1899,5,119,0,
        0,1899,1901,5,139,0,0,1900,1887,1,0,0,0,1900,1888,1,0,0,0,1900,1889,
        1,0,0,0,1900,1890,1,0,0,0,1900,1891,1,0,0,0,1900,1895,1,0,0,0,1900,
        1898,1,0,0,0,1901,299,1,0,0,0,1902,1903,5,97,0,0,1903,1904,5,139,
        0,0,1904,301,1,0,0,0,1905,1907,5,77,0,0,1906,1908,5,139,0,0,1907,
        1906,1,0,0,0,1907,1908,1,0,0,0,1908,303,1,0,0,0,1909,1910,5,64,0,
        0,1910,1911,3,226,113,0,1911,1912,5,139,0,0,1912,1922,1,0,0,0,1913,
        1914,5,108,0,0,1914,1922,5,139,0,0,1915,1916,5,32,0,0,1916,1922,
        5,139,0,0,1917,1918,5,78,0,0,1918,1922,5,139,0,0,1919,1920,5,125,
        0,0,1920,1922,5,139,0,0,1921,1909,1,0,0,0,1921,1913,1,0,0,0,1921,
        1915,1,0,0,0,1921,1917,1,0,0,0,1921,1919,1,0,0,0,1922,305,1,0,0,
        0,1923,1924,5,2,0,0,1924,1928,5,139,0,0,1925,1926,5,43,0,0,1926,
        1928,5,139,0,0,1927,1923,1,0,0,0,1927,1925,1,0,0,0,1928,307,1,0,
        0,0,1929,1930,5,58,0,0,1930,1934,5,139,0,0,1931,1932,5,9,0,0,1932,
        1934,5,139,0,0,1933,1929,1,0,0,0,1933,1931,1,0,0,0,1934,309,1,0,
        0,0,1935,1936,5,16,0,0,1936,1948,5,139,0,0,1937,1938,5,81,0,0,1938,
        1948,5,139,0,0,1939,1940,5,96,0,0,1940,1948,5,139,0,0,1941,1942,
        5,103,0,0,1942,1948,5,139,0,0,1943,1944,5,109,0,0,1944,1948,5,139,
        0,0,1945,1946,5,38,0,0,1946,1948,5,139,0,0,1947,1935,1,0,0,0,1947,
        1937,1,0,0,0,1947,1939,1,0,0,0,1947,1941,1,0,0,0,1947,1943,1,0,0,
        0,1947,1945,1,0,0,0,1948,311,1,0,0,0,1949,1950,7,16,0,0,1950,313,
        1,0,0,0,1951,1952,5,41,0,0,1952,1958,5,139,0,0,1953,1954,5,63,0,
        0,1954,1958,5,139,0,0,1955,1956,5,67,0,0,1956,1958,5,139,0,0,1957,
        1951,1,0,0,0,1957,1953,1,0,0,0,1957,1955,1,0,0,0,1958,315,1,0,0,
        0,1959,1961,5,23,0,0,1960,1962,3,234,117,0,1961,1960,1,0,0,0,1961,
        1962,1,0,0,0,1962,1965,1,0,0,0,1963,1965,7,17,0,0,1964,1959,1,0,
        0,0,1964,1963,1,0,0,0,1965,317,1,0,0,0,1966,1967,5,123,0,0,1967,
        1981,5,139,0,0,1968,1969,5,40,0,0,1969,1981,5,139,0,0,1970,1971,
        5,40,0,0,1971,1975,3,278,139,0,1972,1974,3,320,160,0,1973,1972,1,
        0,0,0,1974,1977,1,0,0,0,1975,1973,1,0,0,0,1975,1976,1,0,0,0,1976,
        1978,1,0,0,0,1977,1975,1,0,0,0,1978,1979,5,139,0,0,1979,1981,1,0,
        0,0,1980,1966,1,0,0,0,1980,1968,1,0,0,0,1980,1970,1,0,0,0,1981,319,
        1,0,0,0,1982,1983,5,66,0,0,1983,1987,3,278,139,0,1984,1985,5,55,
        0,0,1985,1987,3,278,139,0,1986,1982,1,0,0,0,1986,1984,1,0,0,0,1987,
        321,1,0,0,0,1988,1989,5,25,0,0,1989,1990,3,226,113,0,1990,1991,5,
        139,0,0,1991,323,1,0,0,0,1992,1997,5,182,0,0,1993,1994,5,159,0,0,
        1994,1997,5,182,0,0,1995,1997,3,326,163,0,1996,1992,1,0,0,0,1996,
        1993,1,0,0,0,1996,1995,1,0,0,0,1997,325,1,0,0,0,1998,2002,7,18,0,
        0,1999,2002,7,19,0,0,2000,2002,7,20,0,0,2001,1998,1,0,0,0,2001,1999,
        1,0,0,0,2001,2000,1,0,0,0,2002,327,1,0,0,0,2003,2008,3,324,162,0,
        2004,2005,5,138,0,0,2005,2007,3,324,162,0,2006,2004,1,0,0,0,2007,
        2010,1,0,0,0,2008,2006,1,0,0,0,2008,2009,1,0,0,0,2009,329,1,0,0,
        0,2010,2008,1,0,0,0,2011,2016,3,324,162,0,2012,2013,5,138,0,0,2013,
        2015,3,324,162,0,2014,2012,1,0,0,0,2015,2018,1,0,0,0,2016,2014,1,
        0,0,0,2016,2017,1,0,0,0,2017,331,1,0,0,0,2018,2016,1,0,0,0,2019,
        2022,7,21,0,0,2020,2022,3,326,163,0,2021,2019,1,0,0,0,2021,2020,
        1,0,0,0,2022,333,1,0,0,0,2023,2024,7,22,0,0,2024,335,1,0,0,0,2025,
        2026,5,184,0,0,2026,337,1,0,0,0,2027,2028,3,340,170,0,2028,2029,
        5,155,0,0,2029,2031,1,0,0,0,2030,2027,1,0,0,0,2030,2031,1,0,0,0,
        2031,2032,1,0,0,0,2032,2033,3,342,171,0,2033,339,1,0,0,0,2034,2039,
        3,324,162,0,2035,2036,5,155,0,0,2036,2038,3,324,162,0,2037,2035,
        1,0,0,0,2038,2041,1,0,0,0,2039,2037,1,0,0,0,2039,2040,1,0,0,0,2040,
        341,1,0,0,0,2041,2039,1,0,0,0,2042,2043,3,324,162,0,2043,2044,5,
        155,0,0,2044,2046,1,0,0,0,2045,2042,1,0,0,0,2046,2049,1,0,0,0,2047,
        2045,1,0,0,0,2047,2048,1,0,0,0,2048,2050,1,0,0,0,2049,2047,1,0,0,
        0,2050,2051,3,324,162,0,2051,343,1,0,0,0,263,348,351,354,362,372,
        375,381,391,399,419,426,431,436,441,449,454,476,484,491,499,503,
        507,517,526,534,543,551,558,568,577,587,596,601,612,623,630,633,
        637,641,644,652,656,659,662,670,675,679,683,687,697,701,710,715,
        722,725,729,731,740,748,751,759,765,767,774,779,785,791,795,804,
        808,816,827,839,842,846,854,866,874,877,882,888,890,900,912,915,
        920,927,936,939,943,946,951,958,960,970,973,977,982,990,994,1000,
        1006,1015,1028,1031,1039,1043,1051,1055,1061,1067,1071,1073,1081,
        1089,1101,1109,1112,1117,1120,1126,1130,1135,1138,1146,1150,1155,
        1158,1164,1173,1177,1182,1186,1189,1194,1201,1211,1222,1236,1244,
        1252,1254,1261,1264,1268,1272,1277,1285,1291,1297,1300,1307,1311,
        1314,1319,1322,1327,1331,1337,1341,1343,1349,1354,1356,1361,1368,
        1372,1377,1382,1387,1391,1400,1404,1409,1413,1425,1433,1435,1441,
        1447,1454,1458,1460,1464,1469,1475,1483,1505,1509,1519,1526,1530,
        1537,1541,1543,1551,1554,1563,1565,1576,1588,1593,1597,1600,1603,
        1610,1617,1638,1646,1654,1660,1662,1671,1677,1682,1686,1721,1737,
        1740,1744,1751,1755,1764,1773,1776,1784,1795,1801,1809,1817,1821,
        1824,1829,1834,1837,1841,1852,1855,1859,1863,1869,1885,1895,1900,
        1907,1921,1927,1933,1947,1957,1961,1964,1975,1980,1986,1996,2001,
        2008,2016,2021,2030,2039,2047
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
