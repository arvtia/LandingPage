document.addEventListener("DOMContentLoaded", function(){
   

   const reviews = [
      {
         name: "Aarav & Meera",
         image: "https://i.pinimg.com/736x/80/7e/8a/807e8a74446988ee89b8aeaa310158ef.jpg",
         text: "Couples Connect helped us stay close even across time zones. We love the shared calendar!"
      },
      {
         name: "Riya & Kabir",
         image: "https://i.pinimg.com/736x/3b/eb/1d/3beb1dcb35e3d2e47cee800fe9d92439.jpg",
         text: "The mood check-ins are so thoughtful. It’s like the app understands us."
      },
      {
         name: "Zoya & Arjun",
         image: "https://i.pinimg.com/736x/e0/c4/f4/e0c4f40f10a3205b9954489e465228c6.jpg",
         text: "We use it daily to share little moments. It’s our private space."
      },
      {
         name: "Ishaan & Tara",
         image: "https://i.pinimg.com/1200x/57/d2/30/57d2302f234597a184846a4d05a685df.jpg",
         text: "The anniversary reminders and shared goals are a game changer."
      },
      {
         name: "Dev & Ananya",
         image: "https://i.pinimg.com/736x/ec/6e/24/ec6e249078f79242dd2762a9d06c83fc.jpg",
         text: "We feel more connected and intentional. It’s beautifully designed."
      }
   ];

   const track = document.getElementById('review-track');
   let index = 0;

   function renderReviews() {
      track.innerHTML = reviews.map(review => `
         <div class="min-w-[80%] ring-1 ring-neutral-300 sm:min-w-[30%] bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
            <div class="flex gap-2">
               <img src="${review.image}" alt="${review.name}" class="w-8 h-8 rounded-full mb-2" />
               <h3 class="font-semibold text-md text-gray-800">${review.name}</h3>
            </div>
            <p class="text-gray-600 mt-1 text-xs">${review.text}</p>
         </div>
      `).join('');
   }

   function slideNext() {
      index = (index + 1) % reviews.length;
      const offset = -index * track.children[0].offsetWidth;
      track.style.transform = `translateX(${offset}px)`;
   }

   function slidePrev() {
      index = (index - 1 + reviews.length) % reviews.length;
      const offset = -index * track.children[0].offsetWidth;
      track.style.transform = `translateX(${offset}px)`;
   }
   

   document.getElementById('next-review').addEventListener('click', slideNext);
   document.getElementById('prev-review').addEventListener('click', slidePrev);
   window.addEventListener('resize', () => slideNext(index));

   renderReviews();

})