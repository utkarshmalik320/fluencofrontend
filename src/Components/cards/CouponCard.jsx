import React, { useEffect, useState } from "react";
import { Card, Col, Row, message, Space, Button, Input, Tooltip, Checkbox } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import axios from "axios";
import Pagination from "../common/pagination/Pagination";
import Sort from "../common/helpers/Sort";
import styles from "../../Styles/Card.module.css";

const ITEMS_PER_PAGE = 12;

const App = () => {
  const [couponData, setcouponData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    axios.get("http://localhost:3000/api/coupon/getCoupons")
      .then((response) => {
        if (response.data && Array.isArray(response.data.data)) {
          setcouponData(response.data.data);
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

  const filteredAndSortedData = couponData.filter((coupon) => {
    const matchesSearch = coupon.brandName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || coupon.category === selectedCategory;
    const matchesBrands = selectedBrands.length === 0 || selectedBrands.includes(coupon.brandName);
    return matchesSearch && matchesCategory && matchesBrands;
  }).sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.expiry) - new Date(b.expiry);
    } else {
      return new Date(b.expiry) - new Date(a.expiry);
    }
  });

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const success = () => {
    message.success("Coupon Code Copied Successfully");
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    setCurrentPage(1); // Reset to the first page when search query changes
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  const handleBrandChange = (brandName, checked) => {
    const updatedBrands = checked
      ? [...selectedBrands, brandName]
      : selectedBrands.filter(brand => brand !== brandName);
    setSelectedBrands(updatedBrands);
    setCurrentPage(1); // Reset to the first page when brand changes
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredAndSortedData.slice(startIndex, endIndex);

  return (
    <div>
      <Row gutter={16} className={styles.cardContainer}>
        <Col span={6}>
          <div style={{ padding: "50px", backgroundColor: "#fff", display:"flex" , flexDirection:"column" }}>
            <h3>Categories</h3>
            <Checkbox onChange={() => handleCategoryChange(null)}>All</Checkbox>
            {Array.from(new Set(couponData.map(coupon => coupon.category))).map(category => (
              <Checkbox key={category} onChange={() => handleCategoryChange(category)}>{category}</Checkbox>
            ))}
            <h3>Brands</h3>
            {Array.from(new Set(couponData.map(coupon => coupon.brandName))).map(brand => (
              <Checkbox key={brand} onChange={(e) => handleBrandChange(brand, e.target.checked)}>{brand}</Checkbox>
            ))}
          </div>
        </Col>
        <Col span={18}>
          <div className={styles.container}>
            <div className={styles.inputfield}>
              <div className={styles.searchbar}>
                <Input.Search
                  placeholder="Search by brand or Influencer"
                  allowClear
                  size="large"
                  onSearch={handleSearch}
                />
              </div>
              <div className={styles.sort}>
                <Sort className={styles.sortby} onChange={handleSortChange} />
              </div>
            </div>
          </div>
          <div className={styles.customCardContainer}>
            {currentItems.map((coupon) => (
              <Card
                key={coupon._id}
                title={coupon.brandName}
                bordered={true}
                className={styles.customCard}
              >
                <p>Category: {coupon.category}</p>
                <Space.Compact block>
                  <Input
                    className={styles.input}
                    value={`Coupon Code: ${coupon.couponCode}`}
                    disabled
                  />
                  <Tooltip title="Copy Coupon Code">
                    <Button
                      onClick={success}
                      icon={<CopyOutlined />}
                      style={{ height: "52px", width: "40px" }}
                    ></Button>
                  </Tooltip>
                </Space.Compact>
                <a
                  href={coupon.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Product
                </a>
                <p>Valid Till: {coupon.expiry}</p>
                <p>Terms and Condition: {coupon.termsCondition}</p>
              </Card>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalItems={filteredAndSortedData.length}
            onPageChange={onPageChange}
            pageSize={ITEMS_PER_PAGE}
          />
        </Col>
      </Row>
    </div>
  );
};

export default App;
