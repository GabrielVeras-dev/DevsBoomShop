"use strict";(self.webpackChunkprojeto_angular=self.webpackChunkprojeto_angular||[]).push([[582],{7582:(v,u,a)=>{a.r(u),a.d(u,{CarrinhoModule:()=>x});var l=a(6895),s=a(9541),n=a(1571),d=a(5087),c=a(433);function g(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"li",7),n._UZ(1,"img",8),n.TgZ(2,"p"),n._uU(3),n.qZA(),n.TgZ(4,"p"),n._uU(5),n.ALo(6,"currency"),n.qZA(),n.TgZ(7,"label"),n._uU(8," Quantidade: "),n.TgZ(9,"input",9),n.NdJ("ngModelChange",function(i){const h=n.CHM(o).$implicit;return n.KtG(h.quantidade=i)})("change",function(){n.CHM(o);const i=n.oxw(2);return n.KtG(i.calculaTotal())}),n.qZA()(),n.TgZ(10,"button",10),n.NdJ("click",function(){const p=n.CHM(o).$implicit,h=n.oxw(2);return n.KtG(h.removerProdutoCarrinho(p.id))}),n._uU(11,"Remover "),n._UZ(12,"br")(13,"i",11),n.qZA()()}if(2&t){const o=e.$implicit;n.xp6(1),n.Q6J("src",o.imagem,n.LSH),n.xp6(2),n.Oqu(o.descricao),n.xp6(2),n.hij("Pre\xe7o: ",n.xi3(6,4,o.preco,"BRL"),""),n.xp6(4),n.Q6J("ngModel",o.quantidade)}}function C(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"div")(1,"ul"),n.YNc(2,g,14,7,"li",3),n.qZA(),n.TgZ(3,"h2",4)(4,"span",5),n._uU(5,"Total:"),n.qZA(),n._uU(6),n.ALo(7,"currency"),n.qZA(),n.TgZ(8,"button",6),n.NdJ("click",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.comprar())}),n._uU(9,"Comprar"),n.qZA()()}if(2&t){const o=n.oxw();n.xp6(2),n.Q6J("ngForOf",o.itensCarrinho),n.xp6(4),n.hij(" ",n.xi3(7,2,o.total,"BRL"),"")}}function m(t,e){1&t&&(n.TgZ(0,"h3")(1,"span"),n._uU(2," Nenhum produto foi adicionado ao carrinho"),n.qZA()())}const _=[{path:"",component:(()=>{class t{constructor(o,r){this.carrinhoService=o,this.router=r,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calculaTotal()}calculaTotal(){this.total=this.itensCarrinho.reduce((o,r)=>o+r.preco*r.quantidade,0)}removerProdutoCarrinho(o){this.itensCarrinho=this.itensCarrinho.filter(r=>r.id!==o),this.carrinhoService.removerProdutoCarrinho(o),this.calculaTotal()}comprar(){alert("Parab\xe9ns, voc\xea finalizou a sua compra!"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(d.e),n.Y36(s.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["semProduto",""],["class","lista-carrinho",4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-title"],[1,"buy-button",3,"click"],[1,"lista-carrinho"],[3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(o,r){if(1&o&&(n.TgZ(0,"h2",0),n._uU(1,"Carrinho"),n.qZA(),n.YNc(2,C,10,5,"div",1),n.YNc(3,m,3,0,"ng-template",null,2,n.W1O)),2&o){const i=n.MAs(4);n.xp6(2),n.Q6J("ngIf",r.itensCarrinho.length>0)("ngIfElse",i)}},dependencies:[l.sg,l.O5,c.Fj,c.wV,c.JJ,c.On,l.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--brown);font-weight:700;padding:8px 0}span[_ngcontent-%COMP%]{color:var(--brown);font-size:35px}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between;background-color:#e8e8e8}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:var(--marromzinho-claro);border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--marromzinho-claro);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center;height:12px}.lista-carrinho[_ngcontent-%COMP%]{font-size:18px}.buy-title[_ngcontent-%COMP%]{color:var(--brown)}.buy-button[_ngcontent-%COMP%]{background-color:var(--marromzinho-claro);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.lista-carrinho[_ngcontent-%COMP%]:hover{background-color:#eee}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.Bz.forChild(_),s.Bz]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.ez,f,c.u5]}),t})()}}]);