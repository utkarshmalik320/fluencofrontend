import { InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import React from 'react';
import { Card, Col, Row,} from 'antd';
import Sort from "../../Components/common/helpers/Sort.jsx";
import styles from "../../Styles/Creatorcard.module.css";
import Pagination from '../common/pagination/Pagination.jsx'
const { Search } = Input;
import { Input } from "antd";
import axios from 'axios';
const ITEMS_PER_PAGE = 12;
// Testing
const onSearch = (value, _e, info) => console.log(info?.source, value);
const App = () => {


  const [influencers, setinfluencers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) =>{
    setCurrentPage(page);
  }

  useEffect(() => {
    axios.get("http://localhost:3000/api/creator/getAllInfluencers")
      .then((response) => {
        if (response.data && Array.isArray(response.data.data)) { // Check if response.data is not null and is an array
          setinfluencers(response.data.data);
        } else {
          console.error("Data is not in expected format:", response.data);
          message.error("Data is not in expected format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        message.error("Error fetching data");
      });
  }, []);

  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = influencers.slice(startIndex, endIndex);
  
return (
 <div   style={{ marginLeft: "150px" }}>
  <Row gutter={16} className={styles.cardContainer}>
    <Col span={6}>
      
        <div className={styles.customCardContainer}>
          {currentItems.map((coupon) => (
            <Card
              key={coupon.id}
              title={coupon.name}
              bordered={true}
              className={styles.customCard2}
            >
          
              <p>Profile Photo:
                <img src={coupon.imageLink} alt="" />
              </p>
              <p>Category: {coupon.category}</p>
              <div style={{display:"flex" , flexDirection:"row" , gap:"2px"}}>
              <YoutubeOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
              <a
                href={coupon.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                View youtube
              </a>
              <InstagramOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
              <a
                href={coupon.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Instagram
              </a>
              </div>
              <div style={{display:"flex" , flexDirection:"row" , gap:"100px"}}>
              <p>Instagram Followers: {coupon.instagramFollowers}</p>
              <p>Instagram Followers: {coupon.youtubeSubscribers}</p>
              </div>
            
              
            </Card>
          ))}
        </div>
      </Col>
   
    
    <Pagination
            currentPage={currentPage}
            totalItems={influencers.length}
            onPageChange={onPageChange}
            pageSize = {ITEMS_PER_PAGE}
          />
  </Row>
  </div>
  
);

          }
export default App;


