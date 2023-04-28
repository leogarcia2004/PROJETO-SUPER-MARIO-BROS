 const modal = document.querySelector(".modal")

  const botaoTrailer = document.querySelector(".botao-trailer")

  const fecharmodal = document.querySelector(".fechar-modal")
   
  botaoTrailer.addEventListener("click", () => {

   modal.classList.add("aberto") 
  })

  fecharmodal.addEventListener("click", () => { 

modal.classList.remove("aberto")  
})
