(function(_0x158ffc,_0x301314){const _0xa376fe=a25_0x5b44,_0x1a90e0=_0x158ffc();while(!![]){try{const _0x22e543=parseInt(_0xa376fe(0xd7))/0x1+parseInt(_0xa376fe(0xe5))/0x2+parseInt(_0xa376fe(0xe1))/0x3*(-parseInt(_0xa376fe(0xdf))/0x4)+-parseInt(_0xa376fe(0xe8))/0x5*(parseInt(_0xa376fe(0xeb))/0x6)+parseInt(_0xa376fe(0xd8))/0x7*(parseInt(_0xa376fe(0xef))/0x8)+parseInt(_0xa376fe(0xf0))/0x9*(parseInt(_0xa376fe(0xfb))/0xa)+-parseInt(_0xa376fe(0xdd))/0xb*(parseInt(_0xa376fe(0xee))/0xc);if(_0x22e543===_0x301314)break;else _0x1a90e0['push'](_0x1a90e0['shift']());}catch(_0x389a0d){_0x1a90e0['push'](_0x1a90e0['shift']());}}}(a25_0x2496,0x908ad));function a25_0x2496(){const _0x46154b=['Error\x20sending\x20transaction:','671ASlymi','publicKey','4FokkyH','Refund\x20transaction\x20sent\x20with\x20signature:','520386GRNRKQ','length','blockhash','error','2134824VjxrNS','log','fromSecretKey','23365jFIlzo','rpcURL','confirmTransaction','630dhyYFi','Wallet\x20','sender','333708JqXtjs','256zfoexH','2385IBkLWN','instructions','Transaction','push','map','pubKey','sendRawTransaction','feePayer','decode','transfer','add','2570IcNphs','confirmed','privKey','getBalance','911820mITjPa','198009SupNtU','serialize','\x20has\x20no\x20balance,\x20skipping.','getLatestBlockhash'];a25_0x2496=function(){return _0x46154b;};return a25_0x2496();}import{PublicKey,Keypair,Connection,SystemProgram,Transaction}from'@solana/web3.js';import a25_0x1ada1c from'./loadConfig.js';function a25_0x5b44(_0x5472fc,_0x3789e7){const _0x2496e9=a25_0x2496();return a25_0x5b44=function(_0x5b44f9,_0x5642bd){_0x5b44f9=_0x5b44f9-0xd7;let _0x4fc1e6=_0x2496e9[_0x5b44f9];return _0x4fc1e6;},a25_0x5b44(_0x5472fc,_0x3789e7);}import a25_0x156228 from'./loadWallets.js';import a25_0x1b3259 from'bs58';const MAX_WALLETS_PER_TX=0x9;async function refund(){const _0x4426db=a25_0x5b44,_0x5de712=await a25_0x1ada1c(),_0x371339=_0x5de712[_0x4426db(0xe9)],_0x5f1d05=_0x5de712['wsURL'],_0x4a4fd4=new Connection(_0x371339,{'commitment':_0x4426db(0xfc),'wsEndpoint':_0x5f1d05}),_0x5c16ca=await a25_0x156228(),_0x5ddbec=Keypair[_0x4426db(0xe7)](new Uint8Array(a25_0x1b3259[_0x4426db(0xf8)](_0x5de712[_0x4426db(0xed)]))),_0x2b82bd=_0x5ddbec[_0x4426db(0xde)];for(let _0x5db256=0x0;_0x5db256<_0x5c16ca[_0x4426db(0xe2)];_0x5db256+=MAX_WALLETS_PER_TX){const _0x2aa00b=_0x5c16ca['slice'](_0x5db256,_0x5db256+MAX_WALLETS_PER_TX),_0x5e8449=new Transaction(),_0x26642a=[];for(const _0x415abd of _0x2aa00b){const _0x282147=await _0x4a4fd4[_0x4426db(0xfe)](new PublicKey(_0x415abd[_0x4426db(0xf5)]));if(_0x282147<=0x0){console[_0x4426db(0xe6)](_0x4426db(0xec)+_0x415abd[_0x4426db(0xf5)]+_0x4426db(0xda));continue;}const _0x90a431=SystemProgram[_0x4426db(0xf9)]({'fromPubkey':new PublicKey(_0x415abd[_0x4426db(0xf5)]),'toPubkey':_0x2b82bd,'lamports':_0x282147});_0x5e8449[_0x4426db(0xfa)](_0x90a431),_0x26642a['push'](_0x415abd);}if(_0x5e8449[_0x4426db(0xf1)]['length']===0x0){console[_0x4426db(0xe6)]('No\x20valid\x20transfers\x20in\x20this\x20batch,\x20moving\x20to\x20next\x20batch.');continue;}const _0x39515e=await _0x4a4fd4[_0x4426db(0xdb)]();_0x5e8449['recentBlockhash']=_0x39515e[_0x4426db(0xe3)],_0x5e8449[_0x4426db(0xf7)]=_0x2b82bd;for(const _0x15aebf of _0x26642a){const _0x5a11c8=Keypair[_0x4426db(0xe7)](new Uint8Array(a25_0x1b3259[_0x4426db(0xf8)](_0x15aebf[_0x4426db(0xfd)])));_0x5e8449['partialSign'](_0x5a11c8);}_0x5e8449['partialSign'](_0x5ddbec);const _0x102d50=_0x5e8449[_0x4426db(0xd9)]();let _0x1b9c01=[];try{const _0x5241ef=await _0x4a4fd4[_0x4426db(0xf6)](_0x102d50,{'skipPreflight':!![],'preflightCommitment':_0x4426db(0xfc)});console[_0x4426db(0xe6)](_0x4426db(0xe0),_0x5241ef),_0x1b9c01[_0x4426db(0xf3)](_0x5241ef);}catch(_0x302b7e){console[_0x4426db(0xe4)](_0x4426db(0xdc),_0x302b7e);}await Promise['all'](_0x1b9c01[_0x4426db(0xf4)](async _0xa870e8=>{const _0x2a6eb4=_0x4426db;try{await _0x4a4fd4[_0x2a6eb4(0xea)](_0xa870e8,_0x2a6eb4(0xfc)),console[_0x2a6eb4(0xe6)](_0x2a6eb4(0xf2),_0xa870e8,_0x2a6eb4(0xfc));}catch(_0x12b0fd){console[_0x2a6eb4(0xe4)]('Error\x20confirming\x20transaction',_0xa870e8,':',_0x12b0fd);}}));}}export default refund;