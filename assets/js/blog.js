hljs.configure({tabReplace:"    ",languages:["bash","python","apache"]}),hljs.initHighlightingOnLoad(),$(document).ready(function(){$("code").each(function(){if($(this).attr("class")){let e=$(this).attr("class").replace("hljs","").replace(" ","");e&&$(this).before('<div class="code-lang non-selectable">'+e+"</div>")}})});