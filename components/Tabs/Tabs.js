//Step 3: Build out the TabLink base class (a smarter one) 
          //FYI: top of page because classes are hoisted

class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    // console.log(tabElement);
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;
    // console.log(this.tabData); 1,2,3,4...'dataset' grabs 'data-' from html

    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // Check to see if this.tabData is equal to 'all'
    if (this.tabData === 'all') {
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
      // console.log(this.cards);
      // matching tabs and card (data-tab) 
    }
   
     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(function(card){
      return new TabCard(card);
    });

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => this.selectTab());
  }

  //Method
  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(function(tab){
      tab.classList.remove('active-tab');
    })

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(function(card){
      return card.style.display = 'none';
    })
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab');

  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());

    // this.cards.forEach(function(card){
    //   return card.selectCard();
    // })
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }

  //Method
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = 'flex';
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/

// Step 1: Get the original DOM elements
let tabs = document.querySelectorAll('.tab');
// console.log(tabs);

// Step 2: Return a newly constructed DOM element
tabs.forEach(function(tab){
  return new TabLink(tab); 
});
// tabs.forEach(tab => new TabLink(tab));