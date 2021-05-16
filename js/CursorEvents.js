AFRAME.registerComponent("cursor-listner", {
    schema:{
        selecteditemid:{default:"",type:"string"}
    },
    init: function () {
      this .handleMouseEnterEvents();   
      this.handleMouseLeaveEvents();
    },
    handlePlacesListState:function(){
        const id=this.el.getAttribute("id")
        const placesid=["Outer_Space","Spider_man","superman","The_incredibles"]
        if(placesid.includes(id)){
            const placecontainer=document.querySelector("#places-counter")
            placesContainer.setAttribute("cursor-listner",{
                selecteditemid:id
            });
            this.el.setAttribute("material",{
                color:"#D76B000",
                opacity:1
            });
        }
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selecteditemid}=this.data
            if(selecteditemid){
                const el=document.querySelector(`#${selecteditemid}`)
                const id= el.getAttribute("id")
                if(id==selecteditemid){
                    el.setAttribute("material",{
                        color:"#0077cc",
                        opacity:1
                    })
                }
            }
        })
    }
})