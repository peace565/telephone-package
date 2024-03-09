class Telephone {
    constructor() {
      this.phoneNumbers = new Set();
      this.observers = [];
    }
  
    addPhoneNumber(number) {
      this.phoneNumbers.add(number);
      console.log(`Added phone number: ${number}`);
    }
  
    removePhoneNumber(number) {
      this.phoneNumbers.delete(number);
      console.log(`Removed phone number: ${number}`);
    }
  
    dialPhoneNumber(number) {
      if (this.phoneNumbers.has(number)) {
        this.notifyObservers(number);
        console.log(`Now Dialing ${number}`);
      } else {
        console.log(`Phone number ${number} is not in the list.`);
      }
    }
  
    addObserver(observer) {
      this.observers.push(observer);
      console.log(`Added observer: ${observer.constructor.name}`);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
      console.log(`Removed observer: ${observer.constructor.name}`);
    }
  
    notifyObservers(number) {
      this.observers.forEach((observer) => observer.update(number));
    }
  }
  
  class PhoneNumberObserver {
    update(number) {
      console.log(`Dialed: ${number}`);
    }
  }
  
  class CustomObserver {
    update(number) {
      console.log(`Now Dialing ${number}`);
    }
  }
  
  // Example Usage
  const telephone = new Telephone();
  
  const observer1 = new PhoneNumberObserver();
  const observer2 = new CustomObserver();
  
  telephone.addObserver(observer1);
  telephone.addObserver(observer2);
  
  telephone.addPhoneNumber("1234567890");
  telephone.removePhoneNumber("1234567890");
  telephone.addPhoneNumber("2347023232");
  
  telephone.dialPhoneNumber("2347023232");