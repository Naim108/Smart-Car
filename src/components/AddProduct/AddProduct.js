import React, { useState } from "react"
const AddProducts = () => {
  const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('image', image);

        fetch('https://young-caverns-24656.herokuapp.com/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
             
                if (data.insertedId) {
                    setSuccess('Product added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
  return (
    <div>
    <h3>Add A Product</h3>
    <form onSubmit={handleSubmit}>
        <input
            sx={{ width: '50%' }}
            label="name"
            required
            onChange={e => setName(e.target.value)}
            variant="standard" />
        <br />
        <input
            sx={{ width: '50%' }}
            label="price"
            required
            onChange={e => setPrice(e.target.value)}
            variant="standard" />
        <br />
        <input
            sx={{ width: '50%' }}
            label="description"
            required
            onChange={e => setDescription(e.target.value)}
            variant="standard" />
        <br />
        <input
            accept="image/*"
            type="file"
            onChange={e => setImage(e.target.files[0])}
        />
        <br />
        <button variant="contained" type="submit">
            Add Product
        </button>
    </form>
    {success && <p className="text-success">{success}</p>}
</div>
  );
};

export default AddProducts;
