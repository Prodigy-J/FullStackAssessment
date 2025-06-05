const businessListDiv = document.querySelector("#business-list");
const businessType = document.querySelector("#type-filter");

businessType.addEventListener('change', (event) => {
    let div = document.querySelector('#business-list');
    div.innerHTML = null;
    showBusinesses(event.target.value);
})

const getBusinesses = async () => {
  const res = await fetch("http://localhost:3300/api/businesses");
  const data = await res.json();
  return data;
};

const showBusinesses = async (value) => {
  const businesses = await filterBusiness(value);

  businesses.forEach((business) => {
    // Create a new div for each business and add 
    // the necessary classes for better presentation
    let outerDiv = document.createElement('div');
    outerDiv.classList.add('business-card');

    const businessName = document.createElement("h4");
    businessName.innerText = business.name;
    businessName.classList.add('business-name');

    const businessCategory = document.createElement('p')
    businessCategory.innerText = business.category;
    businessCategory.classList.add('business-category');

    const businessContact = document.createElement('p')
    businessContact.innerText = business.contact;
    businessContact.classList.add('business-contact');

    const businessServices = document.createElement('ul');
    businessServices.classList.add('services');
    business.services.forEach(service => {
        let serviceItem = document.createElement('li');
        serviceItem.innerText = service;
        businessServices.append(serviceItem);
    })
    
    outerDiv.append(businessName);
    outerDiv.append(businessCategory);
    outerDiv.append(businessContact);
    outerDiv.append(businessServices);
    businessListDiv.append(outerDiv);
  });
};

const filterBusiness = async (type) => {
    let businesses = await getBusinesses();

    if (type) {
        let filtered = businesses.filter(business => business.category === type);
        return filtered;
    } else {
        return businesses;
    }
}

showBusinesses();