const defaultData= [    
    {key:"349727", name:"New York", country:"United States"},
    {key:"328328", name:"London", country:"United Kingdom"}
  ];
  
  export const readData = () => {
    const jsonData = localStorage.getItem('favorites');
    if(!jsonData){        
      return defaultData; 
    }
    const data = JSON.parse(jsonData);
    return data;
  }
  
  export const writeData = (favorites) => {   
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
