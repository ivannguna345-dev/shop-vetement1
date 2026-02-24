const produits=[
	{id: "chemise1",nom: "Chemise Bleue", prix: 25, description: "Chemise bleu clair en coton premieur.", 
	image:"images/chemise1.jpg"
},
{
		id: "pantalon1",nom: "Pantalon Noir", prix: 40, description: "Pantalon  noir coupe slim.",
	image:"images/pantalon1.jpg"
},
{
		id: "pantalon2",nom: "Pantalon Rouge", prix: 45, description: "Pantalon  Rouge coupe slim.",
	image:"images/pantalon2.jpg"
},
{
		id: "pantalon3",nom: "Pantalon Jaune", prix: 50, description: "Pantalon  jaune coupe slim.",
	image:"images/pantalon3.jpg"
},
{
		id: "pantalon4",nom: "Pantalon Blanc", prix: 30, description: "Pantalon  Blanc coupe slim.",
	image:"images/pantalon4.jpg"
}
];
//--voir produit
function voirProduit(id){
	localStorage.setItem("produitActuel", id);
	window.location.href="produit.html";
}
//Ajouter au panier
let panier=
JSON.parse(localStorage.getItem("panier"))
|| [];
function ajouterPanier(nom, prix) {
	panier.push({nom, prix});
	localStorage.setItem("panier",
		JSON.stringify(panier));
	alert(nom + "ajouter au panier !" );
	afficherPanier();
}
//afficher
document.addEventListener("DOMContentloaded",() =>{
	const id =
	localStorage.getItem("produitActuel");
	if(!id) return;
	const produit = produits.find(p=>
		p.id===id);
	if(!produits) return;
	document.getElementById("produitImage").src=produit.image;
	document.getElementById("produitNom").textContent=produit.nom;
	document.getElementById("produitPrix").textContent=produit.prix;
	document.getElementById("produitDescription").textContent=produit.description;
	});
//afficher panier dans panier.html


function afficherPanier() {
	const liste=
	 document.getElementById("panierListe");
	 const totalPrix=
	 document.getElementById("totalPrix");
	if (!liste)return; 
	Liste.innerHTML="";
	let total=0;
	panier.forEach(item=>{
		const li=
	document.createElement("li");
	li.textContent='${item.nom}-${item.prix}£';
	liste.appendchild(li);
	total+= item.prix;
	});

	totalPrix.textContent="Total: "+total+"£";
}
document.addEventListener("DOMContentloaded", afficherPanier);

//Paiement dans panier.HTML
const form=
document.getElementById("paimentForm");
if(form){
	form.addEventListener("submit",
		function(e){
			e.preventDefault();
			alert("paiment effectué avec succès !");
			localStorage.removeItem("panier");
			window.location.href="index.html";
		});
}