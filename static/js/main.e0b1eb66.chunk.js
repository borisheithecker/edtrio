(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e){e.exports={document:{nodes:[{object:"block",type:"title",nodes:[{object:"text",leaves:[{text:""}]}]},{object:"block",type:"section",data:{isVisible:!0},nodes:[{object:"block",type:"p",nodes:[{object:"text",leaves:[{text:""}]}]}]}]}}},127:function(e,t,n){e.exports=n(310)},146:function(e,t,n){},252:function(e,t,n){},254:function(e,t,n){},256:function(e,t,n){},259:function(e,t,n){},261:function(e,t,n){},263:function(e,t,n){},266:function(e,t,n){},310:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=n(5),s=n(6),l=n(8),u=n(7),d=n(9),p=n(118),m=n(75),v={colors:{darkRed:"rgba(175, 4, 55, 0.5)",red:"rgba(175, 4, 55, 1)"}},h=(n(136),n(138),n(140),n(142),n(144),n(146),n(51)),f=n(28),b=n.n(f),g=(n(148),n(3)),y=n(29),k={document:{nodes:[{match:[{type:"title"}],min:1,max:1},{match:[{type:"section"}],min:1}]}},E=(a.Component,n(13)),w=n(23);var O={blocks:{audio:{isVoid:!0}}};function j(e){var t=e.src,n=e.mimeType,a=e.selected,o=Object(w.a)(e,["src","mimeType","selected"]);return r.a.createElement("div",Object.assign({className:"plugin-wrapper ".concat(a?"selected":"")},o),r.a.createElement("audio",{className:"audio",controls:!0,preload:"metadata",style:{width:"100%",minHeight:"54px"}},r.a.createElement("source",{src:t,type:n}),"Your browser does not support the audio tag."))}var N={renderNode:function(e){var t=e.attributes,n=e.node,a=e.isFocused;if("audio"===n.type){var o=n.data.get("src"),c=n.data.get("mimeType");if((c||"").includes("audio"))return r.a.createElement(j,Object.assign({src:o,mimeType:c,selected:a},t))}}},B=n(122),D=n.n(B);function S(e,t){return{onKeyDown:function(n,a,r){D()(e,n)&&a.call(t)}}}n(252);var x={blocks:{code:{marks:[]}}};function C(e){var t=e.value.blocks.some(function(e){return"code"===e.type});return e.setBlocks(t?"p":"code"),!0}function M(e){return r.a.createElement("pre",Object.assign({className:"code-block ".concat(e.selected?"selected":"")},e.attributes),r.a.createElement("code",null,e.children))}var T={onKeyDown:function(e,t){if("code"===t.value.startBlock.type)switch(e.key){case"Enter":return t.insertText("\n");case"Tab":return e.preventDefault(),t.insertText("  ")}}},F={renderNode:function(e){return"code"===e.node.type?r.a.createElement(M,Object.assign({selected:e.isFocused},e)):null}},_=n(50),I=n.n(_);var P=n(15),U=n(12),V=n(74),W=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t;switch(this.props.type){case"youtube":e=V.b,t="#ff0000";break;case"vimeo":e=V.a,t="#00acf2";break;default:e=U.d}return r.a.createElement(P.a,{icon:e,style:{color:t},size:"lg"})}}]),t}(a.Component);var A={blocks:{embed:{marks:[]}}};function L(e){var t=e.value.blocks.some(function(e){return"embed"===e.type});return e.setBlocks(t?"p":"embed"),!0}var z={renderNode:function(e){return"embed"===e.node.type?r.a.createElement(K,Object.assign({selected:e.isFocused,editor:e.editor,node:e.node},e)):null}},H={renderPlaceholder:function(e){var t=e.editor,n=e.node;e.parent;if("block"===n.object&&"embed"===n.type&&""===n.text&&!n.data.get("url"))return r.a.createElement("span",{contentEditable:!1,style:{display:"inline-block",width:"0",whiteSpace:"nowrap"},className:"has-text-grey-light",onMouseDown:function(e){var a=t.value.change();return(0,t.props.onChange)(a.moveToEndOfNode(n).focus()),!0}},"z. Bsp. https://www.youtube.com/watch?v=nS4a_bTv5_Y")}},K=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e)))._setDataAttribute=function(e,t){var a=n.props,r=a.editor,o=a.node,c=r.value.change();(0,r.props.onChange)(c.setNodeByKey(o.key,{data:{provider:t,url:e}}))},n.handlePasteUrl=function(e){e.preventDefault();var t=(e.clipboardData||window.clipboardData).getData("Text");if(I()(t)){var a=function(e){for(var t=[{provider:"youtube",regex:/youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-_]*)/i,mapUrl:function(e){return"https://www.youtube-nocookie.com/embed/".concat(e[1])}},{provider:"vimeo",regex:/vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/i,mapUrl:function(e){return"https://player.vimeo.com/video/".concat(e[2])}},{provider:"default",regex:/.*/i}],n=0;n<t.length;n++){var a=t[n],r=a.regex.exec(e);if(r){var o=a.mapUrl?a.mapUrl(r,e):e;return{provider:a.provider,url:o}}}}(t),r=a.provider,o=a.url;e.stopPropagation(),n._setDataAttribute(o,r),n.setState({url:o,provider:r})}},n.state={provider:e.node.data.get("provider")||"",url:e.node.data.get("url")||""},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selected,n=e.attributes,a=e.children,o=this.state,c=o.url,i=o.provider;return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("div",Object.assign({className:"plugin-wrapper embed-container ".concat(t?"selected":""),style:{display:"flex",flexDirection:"column",marginBottom:5}},n),r.a.createElement("iframe",{title:"Video",style:{minHeight:"22rem"},src:c,frameBorder:"0",allowFullScreen:!0})),r.a.createElement("div",Object.assign({className:"control has-icons-left"},n,{style:{}}),r.a.createElement("p",{className:"input ".concat(t&&!c?"is-focused":""),onPaste:this.handlePasteUrl},a,c),r.a.createElement("span",{className:"icon is-left"},r.a.createElement(W,{type:i}))))}}]),t}(r.a.Component),R=(n(254),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={id:e.resourceId||"jaz8F8hZ"},n.applet=r.a.createRef(),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return t.id!==this.state.id}},{key:"renderApplet",value:function(e){var t=this;this.setState(function(){return{id:e}},function(){return t.props.saveContent(t.state)})}},{key:"renderHTML",value:function(){return'<!DOCTYPE>\n        <html>\n        <head>\n            <meta name=viewport content="width=device-width,initial-scale=1">\n            <script src="https://cdn.geogebra.org/apps/deployggb.js"><\/script>\n        </head>\n        <body>\n            <div id="ggb-element" style="margin: 0 auto"></div> \n\n            <script>\n                var ggbApp = new GGBApplet({\'appName\': \'graphing\', \'material_id\': \''.concat(this.state.id,"'}, true)\n                window.addEventListener('load', function() { \n                    ggbApp.inject('ggb-element')\n                })\n            <\/script>\n        </body>\n        </html>\n        ")}},{key:"componentDidMount",value:function(){this.setState(Object(h.a)({},this.props.content))}},{key:"render",value:function(){return r.a.createElement("div",{className:"geogebra-wrapper plugin-wrapper ".concat(this.props.selected?"selected":""),ref:this.applet},this.state.id&&r.a.createElement("iframe",{title:"Geogebra applet #".concat(this.state.id),className:"geogebra",srcDoc:this.renderHTML()}))}}]),t}(a.Component));var Y={renderNode:function(e){var t=e.attributes,n=e.node,a=e.isFocused;if("geogebra"===n.type){var o=n.data.get("id");return r.a.createElement(R,Object.assign({selected:a,resourceId:o},t))}}};var J={blocks:{h1:{marks:[]},h2:{marks:[]},h3:{marks:[]},h4:{marks:[]},h5:{marks:[]}}},q={renderNode:function(e){var t=e.attributes,n=e.children;switch(e.node.type){case"h1":return r.a.createElement("h2",t,n);case"h2":return r.a.createElement("h3",t,n);case"h3":return r.a.createElement("h4",t,n);case"h4":return r.a.createElement("h5",t,n);case"h5":return r.a.createElement("h6",t,n);default:return}}};n(256);function G(e){return{changes:{insertImage:Z},helpers:{},components:{ImageNode:Q},plugins:[$,{schema:X}]}}var X={blocks:{img:{isVoid:!0}}};function Z(e,t,n){n&&e.select(n),e.insertBlock({type:"img",data:{src:t}})}function Q(e){var t=e.src,n=e.selected,a=Object(w.a)(e,["src","selected"]);return r.a.createElement("img",Object.assign({src:t,className:"plugin-wrapper image ".concat(n?"selected":""),alt:"Uploaded by user"},a))}var $={renderNode:function(e){var t=e.attributes,n=e.node,a=e.isFocused;if("img"===n.type){var o=n.data.get("src");return r.a.createElement(Q,Object.assign({src:o,selected:a},t))}}};var ee={onKeyDown:function(e,t){switch(e.key){case" ":return te(e,t);case"Backspace":return ne(e,t);case"Enter":return ae(e,t)}}},te=function(e,t){var n=t.value,a=n.selection;if(!a.isExpanded){var r=n.startBlock,o=a.start,c=r.text.slice(0,o.offset).replace(/\s*/g,""),i=re(c);if(i&&("li"!==i||"li"!==r.type))return e.preventDefault(),t.setBlocks(i),"li"===i&&t.wrapBlock("ul"),t.moveFocusToStartOfNode(r).delete(),!0}},ne=function(e,t){var n=t.value,a=n.selection;if(!a.isExpanded&&0===a.start.offset){var r=n.startBlock;if("p"!==r.type)return e.preventDefault(),t.setBlocks("p"),"li"===r.type&&t.unwrapBlock("ul"),!0}},ae=function(e,t){var n=t.value,a=n.selection,r=a.start,o=a.end;if(!a.isExpanded){var c=n.startBlock;if(0===r.offset&&0===c.text.length)return ne(e,t);if(o.offset===c.text.length&&("h1"===c.type||"h2"===c.type||"h3"===c.type||"h4"===c.type||"h5"===c.type||"blockquote"===c.type))return e.preventDefault(),t.splitBlock().setBlocks("p"),!0}},re=function(e){switch(e){case"*":case"-":case"+":return"li";case">":return"blockquote";case"#":return"h1";case"##":return"h2";case"###":return"h3";case"####":return"h4";case"#####":return"h5";default:return null}},oe={renderNode:function(e){var t=e.attributes,n=e.children;switch(e.node.type){case"blockquote":return r.a.createElement("blockquote",t,n);case"ul":return r.a.createElement("ul",t,n);case"li":return r.a.createElement("li",t,n)}}};function ce(e){return{validate:se,dealWithIt:le,changes:{insertYoutubeVideo:ue},helpers:{},components:{},plugins:[]}}var ie=/youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-_]*)/i,se=function(e){return!!ie.exec(e)},le=function(e,t){var n=ie.exec(e)[1];return t.call(ue,n),!0};function ue(e,t){e.insertBlock({type:"embed",isVoid:!0,data:{provider:"youtube",url:"https://www.youtube-nocookie.com/embed/".concat(t)}})}function de(e){return{validate:me,dealWithIt:ve,changes:{insertYoutubeVideo:he},helpers:{},components:{},plugins:[]}}var pe=/vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/i,me=function(e){return!!pe.exec(e)},ve=function(e,t){var n=pe.exec(e)[2];return t.call(he,n),!0};function he(e,t){e.insertBlock({type:"embed",isVoid:!0,data:{provider:"vimeo",url:"https://player.vimeo.com/video/".concat(t)}})}var fe=n(30),be=n.n(fe);function ge(e){return{validate:ye,dealWithIt:ke,changes:{insertVideo:Ee},helpers:{},components:{},plugins:[]}}var ye=function(e){var t=e.substr(e.lastIndexOf(".")+1);return(be()(t)||"").includes("video")},ke=function(e,t){var n=e.substr(e.lastIndexOf(".")+1),a=be()(n);return t.call(Ee,e,a),!0};function Ee(e,t,n){e.insertBlock({type:"video",data:{src:t,mimeType:n}})}function we(e){return{validate:Oe,dealWithIt:je,changes:{insertAudio:Ne},helpers:{},components:{},plugins:[]}}var Oe=function(e){var t=e.substr(e.lastIndexOf(".")+1);return(be()(t)||"").includes("audio")},je=function(e,t){var n=e.substr(e.lastIndexOf(".")+1),a=be()(n);return t.call(Ne,e,a),!0};function Ne(e,t,n,a){e.insertBlock({type:"audio",data:{src:t,mimeType:n}})}var Be={onPaste:function(e,t,n){var a=Object(y.c)(e),r=a.type,o=a.text;if("text"===r){if(!I()(o))return;return ce().validate(o)?ce().dealWithIt(o,t):de().validate(o)?de().dealWithIt(o,t):ge().validate(o)?ge().dealWithIt(o,t):we().validate(o)?we().dealWithIt(o,t):void 0}}},De=(n(259),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).toggleVisibilityOfSection=function(e,t,a){var r=n.getParentSection(e);t(e.setNodeByKey(r.key,{data:{isVisible:!a}}))},n.deleteSection=function(e,t){var a=n.getParentSection(e);t(e.removeNodeByKey(a.key))},n.moveSection=function(e,t,a){var r,o=n.getParentSection(e),c=e.value.document;if("UP"===a)r=c.getPreviousSibling(o.key);else{if("DOWN"!==a)return;r=c.getNextSibling(o.key)}if(r&&"section"===r.type){var i=c.nodes.findIndex(function(e){return e.key===r.key});t(e.moveNodeByKey(o.key,c.key,i))}},n.getParentSection=function(e){var t=e.value.anchorBlock;do{if(!(t=e.value.document.getParent(t.key)))return}while("section"!==t.type);return t},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.editor,a=t.isVisible;return r.a.createElement("aside",{className:"buttons section-controls"},r.a.createElement("button",{className:"button is-white",onMouseDown:function(t){t.preventDefault(),e.deleteSection(n.value.change(),n.props.onChange)}},r.a.createElement("span",{className:"icon is-small"},r.a.createElement(P.a,{icon:U.k}))),r.a.createElement("button",{className:"button is-white",onMouseDown:function(t){t.preventDefault(),e.moveSection(n.value.change(),n.props.onChange,"UP")}},r.a.createElement("span",{className:"icon is-small"},r.a.createElement(P.a,{icon:U.b}))),r.a.createElement("button",{className:"button is-white",onMouseDown:function(t){t.preventDefault(),e.moveSection(n.value.change(),n.props.onChange,"DOWN")}},r.a.createElement("span",{className:"icon is-small"},r.a.createElement(P.a,{icon:U.a}))),r.a.createElement("button",{className:"button is-white tooltip ".concat(a?"":"is-tooltip-active"),"data-tooltip":a?"Abschnitt ausblenden":"Abschnitt ausgeblendet",onMouseDown:function(t){t.preventDefault(),e.toggleVisibilityOfSection(n.value.change(),n.props.onChange,a)}},r.a.createElement("span",{className:"icon is-small"},r.a.createElement(P.a,{icon:a?U.e:U.f}))))}}]),t}(a.Component));var Se={blocks:{section:{data:{isVisible:function(e){return"boolean"===typeof e}},parent:{object:"document"}}}},xe={renderNode:function(e){var t=e.attributes,n=e.editor,a=e.children,o=e.node,c=e.isFocused;if("section"===o.type){var i=o.data.get("isVisible");return r.a.createElement("section",Object.assign({className:"section content ".concat(i?"":"hidden")},t),a,c?r.a.createElement(De,{editor:n,isVisible:i}):null)}}},Ce={renderNode:function(e){var t=e.attributes,n=e.children;if("p"===e.node.type)return r.a.createElement("p",t,n)}},Me={normalizeNode:function(e){if("document"===e.object){var t=e.nodes;if(!(t.size<=0||t.size>=2)&&"title"===t.first().type&&"section"!==t.last().type){var n=g.a.create({type:"section",data:{isVisible:!0},nodes:[g.a.create({type:"p",nodes:[g.n.create()]})]});return function(a){return a.insertNodeByKey(e.key,t.count(),n)}}}}},Te={normalizeNode:function(e){if("section"===e.type){var t=e.nodes;if(!(t.count()>0&&"p"===t.last().type)){var n=g.a.create({type:"p",nodes:[g.n.create()]});return function(a){return a.insertNodeByKey(e.key,t.count(),n)}}}}},Fe=(n(261),function(e){var t=e.className,n=e.children,a=Object(w.a)(e,["className","children"]);return r.a.createElement("i",Object.assign({style:{verticalAlign:"middle",paddingBottom:"3px"},className:"material-icons ".concat(t)},a),n)}),_e=(n(263),function(e){return r.a.createElement("span",{className:"edtrio-button ".concat(e.active?"active":""," ").concat(e.reversed?"reversed":""),onMouseDown:e.onMouseDown},e.children)}),Ie="p",Pe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).renderBlockButton=function(e,t,a){var o=n.hasBlock(e);return r.a.createElement(_e,{reversed:!0,active:o,onMouseDown:function(t){return a(t,e)}},r.a.createElement(Fe,null,t))},n.hasBlock=function(e){return n.props.value.blocks.some(function(t){return t.type===e})},n.update=function(){if(n.menuWrapper){var e=n.props.value,t=e.fragment,a=e.selection;if(a.isBlurred||a.isCollapsed||""===t.text)n.setState({style:{}});else{var r=window.getSelection().getRangeAt(0).getBoundingClientRect(),o={opacity:1};o.top="".concat(r.top+window.pageYOffset-n.menuWrapper.offsetHeight,"px"),o.left="".concat(r.left+window.pageXOffset-n.menuWrapper.offsetWidth/2+r.width/2,"px"),n.setState({style:o})}}},n.onClickBlock=function(e,t){var a=n.props,r=a.value,o=a.onChange;e.preventDefault();var c=r.change(),i=n.hasBlock(t);c.setBlocks(i?Ie:t),o(c)},n.state={style:{}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.className,n=window.document.getElementById("root");return c.a.createPortal(r.a.createElement("div",{className:"hover-menu ".concat(t),style:this.state.style,ref:function(t){return e.menuWrapper=t}},this.renderMarkButton("strong","format_bold"),this.renderMarkButton("em","format_italic"),this.renderMarkButton("code","code"),this.renderBlockButton("h1","looks_one",this.onClickBlock),this.renderBlockButton("h2","looks_two",this.onClickBlock)),n)}},{key:"renderMarkButton",value:function(e,t){var n=this,a=this.props.value.activeMarks.some(function(t){return t.type===e});return r.a.createElement(_e,{reversed:!0,active:a,onMouseDown:function(t){return n.onClickMark(t,e)}},r.a.createElement(Fe,null,t))}},{key:"onClickMark",value:function(e,t){var n=this.props,a=n.value,r=n.onChange;e.preventDefault(),r(a.change().toggleMark(t))}}]),t}(a.Component);function Ue(e){return{changes:{},helpers:{},components:{HoverMenu:Pe},plugins:[Ve]}}var Ve={renderMark:function(e){var t=e.children,n=e.mark,a=e.attributes;switch(n.type){case"strong":return r.a.createElement("strong",a,t);case"code":return r.a.createElement("code",a,t);case"em":return r.a.createElement("em",a,t);default:return}}},We=n(37),Ae=n.n(We),Le=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleUndo=function(e){e.preventDefault(),n.props.editor.change(function(e){return e.undo()})},n.handleRedo=function(e){e.preventDefault(),n.props.editor.change(function(e){return e.redo()})},n.updateLastSaved=function(e){n.setState({lastSaved:e})},n.state={lastSaved:n.props.lastSaved||null},window.updateLastSaved=n.updateLastSaved,n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"level",contentEditable:!1},r.a.createElement("div",{className:"level-left"},r.a.createElement("div",{className:"level-item"},r.a.createElement("span",{className:Ae.a.button,onMouseDown:this.handleUndo},r.a.createElement(P.a,{icon:U.l})),r.a.createElement("span",{className:Ae.a.button,onMouseDown:this.handleRedo},r.a.createElement(P.a,{icon:U.j})),r.a.createElement("a",{href:"https://github.com/schul-cloud/edtrio/wiki/Edtr.io-Hilfe",target:"_blank",rel:"noopener noreferrer",className:Ae.a.button},r.a.createElement(P.a,{icon:U.i})),r.a.createElement("div",{className:Ae.a.saveText},"".concat(b()(this.state.lastSaved).fromNow()," aktualisiert")))))}}]),t}(a.Component);var ze={blocks:{title:{marks:[]}}},He={onKeyDown:function(e,t){if("Enter"===e.key){if("title"!==t.value.startBlock.type)return;return e.preventDefault(),t.moveToRangeOfNode(t.value.nextBlock),!0}}},Ke={renderNode:function(e){var t=e.attributes,n=e.children,a=e.editor,o=e.node,c=e.parent;if("title"===o.type)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",Object.assign({className:"title is-1"},t),n),r.a.createElement(Le,{editor:a,lastSaved:c.data.get("lastSaved")}))}},Re={renderPlaceholder:function(e){var t=e.editor,n=e.node;if("block"===n.object&&"title"===n.type&&""===n.text)return r.a.createElement("span",{contentEditable:!1,style:{display:"inline-block",width:"0",whiteSpace:"nowrap"},className:"has-text-grey-light",onMouseDown:function(e){var a=t.value.change();return(0,t.props.onChange)(a.moveToEndOfNode(n).focus()),!0}},"Gib mir einen Namen")}},Ye={normalizeNode:function(e){var t=e.nodes;if("document"===e.object&&!(t.size>1)&&!(t.size>0&&"title"===t.first().type)){var n=g.a.create({type:"title",data:{isVisible:!0},nodes:[g.n.create()]});return function(t){return t.insertNodeByKey(e.key,0,n)}}}};var Je={blocks:{video:{isVoid:!0}}};function qe(e){var t=e.src,n=e.mimeType,a=e.selected,o=Object(w.a)(e,["src","mimeType","selected"]);return r.a.createElement("div",Object.assign({className:"plugin-wrapper ".concat(a?"selected":"")},o),r.a.createElement("video",{className:"video",controls:!0,preload:"metadata"},r.a.createElement("source",{src:t,type:n}),"Your browser does not support the video tag."))}var Ge={renderNode:function(e){var t=e.attributes,n=e.node,a=e.isFocused;if("video"===n.type){var o=n.data.get("src"),c=n.data.get("mimeType");if((c||"").includes("video"))return r.a.createElement(qe,Object.assign({src:o,mimeType:c,selected:a},t))}}},Xe=Object(E.a)([Ke,He,{schema:ze},Re,Ye]).concat(Object(E.a)([xe,Ce,{schema:Se},Me,Te]),Object(E.a)(Ue().plugins),Object(E.a)([{schema:J},q]),Object(E.a)([oe,ee]),Object(E.a)([S("Control+e",L),z,H,{schema:A}]),Object(E.a)([Ge,{schema:Je}]),Object(E.a)([N,{schema:O}]),Object(E.a)([Be].concat(Object(E.a)(ce().plugins),Object(E.a)(de().plugins),Object(E.a)(ge().plugins),Object(E.a)(we().plugins))),Object(E.a)([S("Control+c",C),F,T,{schema:x}]),Object(E.a)(G().plugins),Object(E.a)([Y]));function Ze(e){return r.a.createElement("div",{className:"level"},r.a.createElement("button",{className:"level-item button is-white has-text-grey",style:{margin:"1rem 0"},onMouseDown:function(t){return Qe(t,e.value.change(),e.onChange)}},r.a.createElement("span",{className:"icon"},r.a.createElement(P.a,{icon:U.h})),r.a.createElement("span",null,"Abschnitt hinzuf\xfcgen")))}var Qe=function(e,t,n){e.preventDefault(),n(t.call($e))},$e=function(e){var t=g.a.create({type:"section",data:{isVisible:!0},nodes:[g.a.create({type:"p",nodes:[g.n.create()]})]}),n=e.value.document,a=n.nodes.count();return e.insertNodeByKey(n.key,a,t).moveToEndOfNode(t)},et=(n(266),n(19)),tt=n.n(et),nt=n(123),at=function(e,t,n){e.preventDefault(),t.call(ot),n(t)},rt=function(e,t,n){e.preventDefault(),t.call(ct),n(t)};function ot(e,t){t&&e.select(t),e.insertBlock(g.a.create({type:"code",nodes:[g.n.create()]}))}function ct(e,t){t&&e.select(t),e.insertBlock(g.a.create({type:"embed",nodes:[g.n.create()]}))}var it=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleCloseUppyModal=function(){n.setState({uppyOpen:!1})},n.renderBlockButton=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2?arguments[2]:void 0;return r.a.createElement("a",{title:t,onMouseDown:function(e){return a(e,n.props.value.change(),n.props.onChange)}},r.a.createElement("span",{className:"icon is-medium has-text-grey-lighter tooltip","data-tooltip":t},r.a.createElement(P.a,{icon:e,size:"lg"})))},n.update=function(e){var t=e.resetMenu,a=void 0!==t&&t;if(n.menuWrapper)if(a)n.setState({style:{}});else{var r=Object(y.b)(n.props.value.startBlock).getBoundingClientRect(),o=r.top+window.pageYOffset,c=window.innerWidth-(r.width+r.x);n.setState({style:{top:"".concat(o,"px"),right:"".concat(c,"px")}})}},n.state={style:{},uppyOpen:!1},n.uppy=tt()({restrictions:{maxFileSize:1e6,allowedFileTypes:["image/*"]},autoProceed:!0}),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.className,n=window.document.getElementById("root");return c.a.createPortal(r.a.createElement("div",{className:"plus-menu ".concat(t),style:this.state.style,ref:function(t){return e.menuWrapper=t}},this.renderBlockButton(U.g,"Bild einf\xfcgen",function(){e.setState({uppyOpen:!0});for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];(function(e,t,n,a,r){var o=G().changes.insertImage;e.preventDefault(),a.on("complete",function(e){r(),e.successful.forEach(function(e){a.reset();var r=new FileReader;r.onload=function(){t.call(o,r.result),n(t)},r.readAsDataURL(e.data)})})}).apply(void 0,n.concat([e.uppy,e.handleCloseUppyModal]))}),this.renderBlockButton(U.c,"Code Block einf\xfcgen",at),this.renderBlockButton(U.d,"Iframe einf\xfcgen",rt),r.a.createElement(nt.a,{uppy:this.uppy,locale:{strings:{addMoreFiles:"Weitere Dateien hinzuf\xfcgen",closeModal:"Fenster schlie\xdfen",importFrom:"Von %{name} importieren",dashboardWindowTitle:"Uppy Dashboard Fenster (ESC zum schlie\xdfen)",dashboardTitle:"Uppy Dashboard",copyLinkToClipboardSuccess:"Link in Zwischenablage kopiert.",copyLinkToClipboardFallback:"Kopiere den Link unten",copyLink:"Link kopieren",fileSource:"Quelle: %{name}",done:"Fertig",removeFile:"Datei entfernen",editFile:"Datei bearbeiten",editing:"%{file} wird bearbeitet",edit:"Bearbeiten",finishEditingFile:"Bearbeiten abschlie\xdfen",myDevice:"Mein Ger\xe4t",dropPasteImport:"Ziehe Dateien hierhin, f\xfcge sie ein, %{browse} oder importiere sie von",dropPaste:"%{browse} deine Bilder oder lege sie hier ab",browse:"Durchsuche",uploadComplete:"Hochladen fertig",xFilesSelected:{0:"%{smart_count} Datei ausgew\xe4hlt",1:"%{smart_count} Dateien ausgew\xe4hlt"},uploading:"L\xe4dt hoch",complete:"Fertig",uploadFailed:"Hochladen fehlgeschlagen",pleasePressRetry:"Bitte klicke Erneut versuchen um es noch einmal zu versuchen",paused:"Pausiert",error:"Fehler",retry:"Erneut versuchen",cancel:"Abbrechen",retryUpload:"Hochladen erneut versuchen",pauseUpload:"Hochladen pausieren",resumeUpload:"Hochladen fortsetzen",cancelUpload:"Hochladen abbrechen",filesUploadedOfTotal:{0:"%{complete} von %{smart_count} Datei hochgeladen",1:"%{complete} von %{smart_count} Dateien hochgeladen"},dataUploadedOfTotal:"%{complete} von %{total}",xTimeLeft:"%{time} verbleibend",uploadXFiles:{0:"%{smart_count} Datei hochladen",1:"%{smart_count} Dateien hochladen"},uploadXNewFiles:{0:"+%{smart_count} Datei hochladen",1:"+%{smart_count} Dateien hochladen"}}},closeModalOnClickOutside:!0,note:"Bilder, maximal 1 MB",open:this.state.uppyOpen,onRequestClose:this.handleCloseUppyModal})),n)}}]),t}(a.Component);var st=n(124);b.a.locale("de");var lt=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){n.updateMenu()},n.componentDidUpdate=function(){n.updateMenu()},n.handleSave=function(e){var t=b()(new Date),a=JSON.stringify(n._addHeaderInformationToDocument(e,t));localStorage.setItem("document",a),window.updateLastSaved(t)},n._addHeaderInformationToDocument=function(e,t){var n=e.toJSON();return n.document.data=Object(h.a)({},n.document.data,{lastSaved:t}),n},n.handleLoad=function(){var e=localStorage.getItem("document");if(e){var t=JSON.parse(e);return g.o.fromJSON(t)}return g.o.fromJSON(st)},n.onChange=function(e){var t=e.value;t.document!==n.state.value.document&&(n.state.debounce&&clearTimeout(n.state.debounce),n.setState({debounce:setTimeout(function(){return n.handleSave(t)},750)})),n.setState({value:t})},n.updateMenu=function(){var e=n.state,t=e.value,a=e.hoverMenu,r=e.plusMenu;a&&a.update({resetMenu:t.isBlurred||t.isEmpty}),r&&r.update({resetMenu:t.isBlurred||!t.blocks.some(function(e){return"p"===e.type})})},n.state={debounce:null,hoverMenu:null,plusMenu:null,value:n.handleLoad()},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=Ue().components.HoverMenu,n={PlusMenu:it}.PlusMenu,a=Ze;return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"}),r.a.createElement("div",{className:"column is-three-quarters"},r.a.createElement("div",{style:{marginTop:"2rem"}},r.a.createElement(t,{ref:function(t){e.state.hoverMenu||e.setState({hoverMenu:t})},value:this.state.value,onChange:this.onChange}),r.a.createElement(n,{ref:function(t){e.state.plusMenu||e.setState({plusMenu:t})},value:this.state.value,onChange:this.onChange}),r.a.createElement(y.a,{autoFocus:!0,spellCheck:!0,schema:k,plugins:Xe,value:this.state.value,onChange:this.onChange,className:"slate-editor"}),r.a.createElement(a,{value:this.state.value,onChange:this.onChange})),null),r.a.createElement("div",{className:"column"}))}}]),t}(a.Component);function ut(){var e=Object(p.a)(["\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n"]);return ut=function(){return e},e}var dt=m.b.div(ut()),pt=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{theme:v},r.a.createElement(dt,null,r.a.createElement("div",{className:"App"},r.a.createElement(lt,null))))}}]),t}(a.Component),mt=document.getElementById("root");mt&&c.a.render(r.a.createElement(pt,null),mt)},37:function(e,t,n){e.exports={button:"SaveBar_button__CjDo5",saveText:"SaveBar_saveText__2fsAK"}}},[[127,2,1]]]);
//# sourceMappingURL=main.e0b1eb66.chunk.js.map