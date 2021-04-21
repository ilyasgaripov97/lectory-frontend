import parseJwt from '../../../../../utils/jwt';


const storeMaterial = async (id_user, formData) => {
  await fetch(`http://localhost:8000/user/${id_user}/materials/new`, {
    method: 'POST',
    body: formData,
  })
}

const updateMaterials = async (setMaterials) => {
  console.log('updating');
  const id_user = parseJwt(localStorage.getItem('token')).id_user;
  const response = await fetch(`http://localhost:8000/user/${id_user}/materials`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json();
  setMaterials(json.data);
}

export {
  storeMaterial,
  updateMaterials,
}