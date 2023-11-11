import{ L01A } from "./exercicios/L01A.js";
import{ L01AEXT } from "./exercicios/L01AEXT.js";
import{ L01B } from "./exercicios/L01B.js";
import{ L01BEXT } from "./exercicios/L01BEXT.js";
import{ L01C } from "./exercicios/L01C.js";
import{ L01CEXT } from "./exercicios/L01CEXT.js";
import{ L01D } from "./exercicios/L01D.js";
import{ L01E } from "./exercicios/L01E.js";
import{ L01F } from "./exercicios/L01F.js";
import{ L01G } from "./exercicios/L01G.js";
import{ L01H } from "./exercicios/L01H.js";
import{ L01I } from "./exercicios/L01I.js";
import{ L01J } from "./exercicios/L01J.js";
import{ L01K } from "./exercicios/L01K.js";
import{ L01L } from "./exercicios/L01L.js";
import{ L01M } from "./exercicios/L01M.js";
import{ L02A } from "./exercicios/L02A.js";
import{ L02B } from "./exercicios/L02B.js";
import{ L02C } from "./exercicios/L02C.js";
import{ L02D } from "./exercicios/L02D.js";
import{ L02E } from "./exercicios/L02E.js";
import{ L02F } from "./exercicios/L02F.js";
import{ L02G } from "./exercicios/L02G.js";
import{ L02H } from "./exercicios/L02H.js";
import{ L02I } from "./exercicios/L02I.js";
import{ L02J } from "./exercicios/L02J.js";
import{ L02K } from "./exercicios/L02K.js";
import{ L02L } from "./exercicios/L02L.js";
import{ L03A } from "./exercicios/L03A.js";
import{ L03B } from "./exercicios/L03B.js";
import{ L03C } from "./exercicios/L03C.js";
import{ L03D } from "./exercicios/L03D.js";
import{ L03E } from "./exercicios/L03E.js";
import{ L03F } from "./exercicios/L03F.js";
import{ L03G } from "./exercicios/L03G.js";
import{ L03H } from "./exercicios/L03H.js";
import{ L03I } from "./exercicios/L03I.js";
import{ L03J } from "./exercicios/L03J.js";
import{ L03K } from "./exercicios/L03K.js";
import{ L03L } from "./exercicios/L03L.js";
import{ L04A } from "./exercicios/L04A.js";
import{ L04B } from "./exercicios/L04B.js"
import{ L04C } from "./exercicios/L04C.js";
import{ L04D } from "./exercicios/L04D.js";
import{ L04E } from "./exercicios/L04E.js";
import{ L04F } from "./exercicios/L04F.js";
import{ L04G } from "./exercicios/L04G.js";
import{ L04H } from "./exercicios/L04H.js";
import{ L04I } from "./exercicios/L04I.js";
import{ L04J } from "./exercicios/L04J.js";
import{ L05A } from "./exercicios/L05A.js";
import{ L05B } from "./exercicios/L05B.js";
import{ L05C } from "./exercicios/L05C.js";
import{ L05D } from "./exercicios/L05D.js";
import{ L05E } from "./exercicios/L05E.js";
import{ L05F } from "./exercicios/L05F.js";
import{ L05G } from "./exercicios/L05G.js";
import{ L05H } from "./exercicios/L05H.js";
import{ L05I } from "./exercicios/L05I.js";
import{ L05J } from "./exercicios/L05J.js";
import{ L05K } from "./exercicios/L05K.js";




const botoesInfo = [
    { nome: 'L01A', funcao: L01A },
    { nome: 'L01AEXT', funcao: L01AEXT },
    { nome: 'L01B', funcao: L01B },
    { nome: 'L01BEXT', funcao: L01BEXT },
    { nome: 'L01C', funcao: L01C },
    { nome: 'L01CEXT', funcao: L01CEXT },
    { nome: 'L01D', funcao: L01D },
    { nome: 'L01E', funcao: L01E },
    { nome: 'L01F', funcao: L01F },
    { nome: 'L01G', funcao: L01G },
    { nome: 'L01H', funcao: L01H },
    { nome: 'L01I', funcao: L01I },
    { nome: 'L01J', funcao: L01J },
    { nome: 'L01K', funcao: L01K },
    { nome: 'L01L', funcao: L01L },
    { nome: 'L01M', funcao: L01M },
    { nome: "L02A", funcao: L02A },
    { nome: "L02B", funcao: L02B },
    { nome: "L02C", funcao: L02C },
    { nome: "L02D", funcao: L02D },
    { nome: "L02E", funcao: L02E },
    { nome: "L02F", funcao: L02F },
    { nome: "L02G", funcao: L02G },
    { nome: "L02H", funcao: L02H },
    { nome: "L02I", funcao: L02I },
    { nome: "L02J", funcao: L02J },
    { nome: "L02K", funcao: L02K },
    { nome: "L02L", funcao: L02L },
    { nome: "L03A", funcao: L03A },
    { nome: "L03B", funcao: L03B },
    { nome: "L03C", funcao: L03C },
    { nome: "L03D", funcao: L03D },
    { nome: "L03E", funcao: L03E },
    { nome: "L03F", funcao: L03F },
    { nome: "L03G", funcao: L03G },
    { nome: "L03H", funcao: L03H },
    { nome: "L03I", funcao: L03I },
    { nome: "L03J", funcao: L03J },
    { nome: "L03K", funcao: L03K },
    { nome: "L03L", funcao: L03L },
    { nome: "L04A", funcao: L04A },
    { nome: "L04B", funcao: L04B },
    { nome: "L04C", funcao: L04C },
    { nome: "L04D", funcao: L04D },
    { nome: "L04E", funcao: L04E },
    { nome: "L04F", funcao: L04F },
    { nome: "L04G", funcao: L04G },
    { nome: "L04H", funcao: L04H },
    { nome: "L04I", funcao: L04I },
    { nome: "L04J", funcao: L04J },
    { nome: "L05A", funcao: L05A },
    { nome: "L05B", funcao: L05B },
    { nome: "L05C", funcao: L05C },
    { nome: "L05D", funcao: L05D },
    { nome: "L05E", funcao: L05E },
    { nome: "L05F", funcao: L05F },
    { nome: "L05G", funcao: L05G },
    { nome: "L05H", funcao: L05H },
    { nome: "L05I", funcao: L05I },
    { nome: "L05J", funcao: L05J },
    { nome: "L05K", funcao: L05K },     
];

export default botoesInfo