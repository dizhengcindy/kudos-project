const API_ROOT = (path)=> `http://localhost:3000${path}`

const token = () => localStorage.getItem("token");

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Authorization": token()
    }; 
};

const login = data => {
  
    return fetch(API_ROOT('/api/v1/login'), {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({user:data})
    }).then(res => res.json());
};

const getUser =()=>{
    return fetch(API_ROOT('/api/v1/profile'), {headers: headers()}).then(res => res.json());
}

const getAllUsers = (organization_id)=>{
    return fetch(API_ROOT(`/api/v1/users/${organization_id}`), {headers: headers()}).then(res => res.json());
}

const giveKudos=(kudos)=>{
    return fetch(API_ROOT('/api/v1/givekudos'), {
        method: "PATCH",
        headers: headers(),
        body: JSON.stringify({kudos:kudos})
      }).then(res => res.json());
}

const newKudosRecord=(data)=>{
    return fetch(API_ROOT('/kudos_records'), {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
      }).then(res => res.json());
}

export const fetches = {
    user:{
        login,
        getUser,
        getAllUsers,
        giveKudos
    },
    kudosRecord:{
        newKudosRecord
    }

}