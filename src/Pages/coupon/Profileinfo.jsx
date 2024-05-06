import React, { useState, useEffect } from 'react';
import { Input, Button, message } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

function CreatorInfo() {
  const [editing, setEditing] = useState(false);
  const [influencer, setInfluencers] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    // avatar: '',
    username: '',
    email: '',
    category: '',
    youtubeLink: '',
    instagramLink: '',
    password: ''
  });

  useEffect(() => {
    // axios.get("http://localhost:3000/api/creator/getAllInfluencers")
    axios.get("http://localhost:3000/api/creator/getInfluencer", {withCredentials:true})
      .then((response) => {
        if (response.data ) {
          
          setInfluencers(response.data.data);
        } else {
          message.error("Data is not in expected format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error.response.data);
        message.error("Error fetching data");
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:3000/api/creator/update', formData, {withCredentials:true});
      message.success('Changes saved successfully!');
      setEditing(false);
    } catch (error) {
      console.error('Error saving changes:', error.response.data);
      message.error(error.response.data.error);
    }
  };

  const handleEdit = (influencer) => {
    setFormData({
      name: influencer.name,
      // avatar: influencer.avatar,
      username: influencer.username,
      email: influencer.email,
      category: influencer.category,
      youtubeLink: influencer.youtubeLink,
      instagramLink: influencer.instagramLink
    });
    setEditing(true);
  };

  return (
    <div>
      <h2>Creator Information</h2>
      {editing ? (
        <div>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            style={{ marginBottom: '10px' }}
          />
          {/* <Input
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="Avatar"
            style={{ marginBottom: '10px' }}
          /> */}
          <Input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            style={{ marginBottom: '10px' }}
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            style={{ marginBottom: '10px' }}
          />
          <Input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            style={{ marginBottom: '10px' }}
          />
          <Input
            name="youtubeLink"
            value={formData.youtubeLink}
            onChange={handleChange}
            placeholder="YouTube Link"
            style={{ marginBottom: '10px' }}
          />
          <Input
            name="instagramLink"
            value={formData.instagramLink}
            onChange={handleChange}
            placeholder="Instagram Link"
            style={{ marginBottom: '10px' }}
          />
          <Button type="primary" onClick={handleSave} style={{ marginRight: '10px' }}>Save Changes</Button>
          <Button onClick={() => setEditing(false)}>Cancel</Button>
        </div>
      ) : (
        <div>
          
            <div>
              <p>Name: {influencer.name}</p>
              {/* <p>Avatar: {influencer.avatar}</p> */}
              <p>Username: {influencer.username}</p>
              <p>Email: {influencer.email}</p>
              <p>Category: {influencer.category}</p>
              <p>YouTube Link: {influencer.youtubeLink}</p>
              <p>Instagram Link: {influencer.instagramLink}</p>
              <Button type="primary" onClick={() => handleEdit(influencer)}>Edit</Button>
            </div>
          
        </div>
      )}
    </div>
  );
}

export default CreatorInfo;
