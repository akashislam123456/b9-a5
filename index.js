let seatLeft=8;
let seatBook=0;
let totalprice=0;
let grandprice=0;
let discountprice=0;
const allSeats = document.getElementsByClassName('seat');
for(let seat of allSeats){
    seat.addEventListener('click', function(){
           
          
        seatLeft--;
        seatBook++;
        if(seatBook>=5){
            alert("You don't buy no more ticket ")
          return;
        }  
       
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = '#FFFFFF';
        SetInnerText('remaining-seat',seatLeft);
        SetInnerText('seat-count',seatBook);
        seat.setAttribute('disabled',true);
        // append child taable
        const ticektsection = document.getElementById('table-information')
        const p = document.createElement('p');
        p.innerText =seat.innerText;
        const p1 = document.createElement('p');
        p1.innerText="Economy";
        const p2 = document.createElement('p');
       
        p2.innerText=550;
        ticektsection.appendChild(p);
        ticektsection.appendChild(p1);
        ticektsection.appendChild(p2);

        

        totalprice+=550;
        SetInnerText('total-price',totalprice);
        grandprice=totalprice;
        SetInnerText('grand-price',grandprice); 
      

        
    });
}

const seat = document.getElementById("apply");

seat.addEventListener('click',function(){

    if(seatBook>=4){
        const apply = document.getElementById('apply');
        console.log(apply);


        const couponCode = document.getElementById('field').value;
        if(couponCode==="NEW15"){

            discountprice=totalprice*0.15;
            grandprice=totalprice-discountprice;
            SetInnerText('grand-price',grandprice);
            const discountPrice = document.getElementById('discount-price');
            const p = document.createElement('p');
            p.innerText = "Discount Price"
            discountPrice.appendChild(p);
            const p1 = document.createElement('p');
            p1.innerText = "BDT"+discountprice.toFixed(2);
            discountPrice.appendChild(p1);
            
            const hawa= document.getElementById('gaibul-hawa');
            hawa.classList.add('hidden');
            
         }
         
         else if(couponCode==="Couple 20"){
            discountprice=totalprice*0.20;
            grandprice=totalprice-discountprice;
            SetInnerText('grand-price',grandprice);
            const discountPrice = document.getElementById('discount-price');
            const p = document.createElement('p');
            p.innerText = "Discount Price"
            discountPrice.appendChild(p);
            const p1 = document.createElement('p');
            p1.innerText = "BDT"+discountprice.toFixed(2);
            discountPrice.appendChild(p1);

            const hawa= document.getElementById('gaibul-hawa')
            hawa.classList.add('hidden');

        }else{
            // alert('wrong coupon Sir');
            console.log(couponCode);
         }

            
        }

})


// next btn section //
   
   
 const btnn = document.getElementById("next-btn");
 btnn.addEventListener('click', function () {
     const num = document.getElementById("phone-number").value;
     if (seatBook >= 1 && num.length >= 1) {
         gethidden('asol');
         getadd('success');
     }
 })

 function gethidden(elementId){
    document.getElementById(elementId).classList.add('hidden');
}
function getadd(elementId){
    document.getElementById(elementId).classList.remove('hidden');
}
function SetInnerText(elementId,value){
    document.getElementById(elementId).innerText=value;
}