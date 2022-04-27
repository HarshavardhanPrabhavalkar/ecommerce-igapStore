-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2022 at 01:59 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `igapecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `firebaseid` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `businesses`
--

CREATE TABLE `businesses` (
  `id` int(11) NOT NULL,
  `name` varchar(110) NOT NULL,
  `title` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `cityid` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `mobileno` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `pincode` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `joiningdate` date NOT NULL,
  `expirydate` date NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `businessproductreviews`
--

CREATE TABLE `businessproductreviews` (
  `id` int(11) NOT NULL,
  `productid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `rating` double DEFAULT NULL,
  `review` varchar(1000) DEFAULT NULL,
  `createdon` datetime DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `business_couponproducts`
--

CREATE TABLE `business_couponproducts` (
  `id` int(11) NOT NULL,
  `couponid` int(11) DEFAULT NULL,
  `productid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `business_coupons`
--

CREATE TABLE `business_coupons` (
  `id` int(11) NOT NULL,
  `businessid` int(11) NOT NULL,
  `couponcode` varchar(100) DEFAULT NULL,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `business_productcategories`
--

CREATE TABLE `business_productcategories` (
  `id` int(11) NOT NULL,
  `businessid` int(11) NOT NULL,
  `srno` int(11) NOT NULL,
  `picpath` varchar(500) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `business_productpictures`
--

CREATE TABLE `business_productpictures` (
  `id` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `picpath` varchar(100) NOT NULL,
  `srno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `business_productpictures`
--

INSERT INTO `business_productpictures` (`id`, `productid`, `title`, `picpath`, `srno`) VALUES
(15, 1, 'Title', 'businessproducts/pb1p0.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `business_products`
--

CREATE TABLE `business_products` (
  `id` int(11) NOT NULL,
  `businessid` int(11) NOT NULL,
  `igapvendorid` int(11) NOT NULL,
  `businessvendorid` int(11) NOT NULL,
  `businessproductcategoryid` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` text NOT NULL,
  `specification` text NOT NULL,
  `mrp` double NOT NULL,
  `price` double NOT NULL,
  `picpath` varchar(200) NOT NULL,
  `instock` varchar(3) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `business_productvarieties`
--

CREATE TABLE `business_productvarieties` (
  `id` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `size` varchar(50) NOT NULL,
  `color` varchar(100) NOT NULL,
  `weight` int(11) NOT NULL,
  `mrp` double NOT NULL,
  `price` double NOT NULL,
  `instock` varchar(20) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `business_productvarieties`
--

INSERT INTO `business_productvarieties` (`id`, `productid`, `size`, `color`, `weight`, `mrp`, `price`, `instock`, `status`) VALUES
(2, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open'),
(3, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open'),
(4, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open'),
(5, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open'),
(6, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open'),
(7, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open'),
(8, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open');

-- --------------------------------------------------------

--
-- Table structure for table `business_vendors`
--

CREATE TABLE `business_vendors` (
  `id` int(11) NOT NULL,
  `businessid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobileno` varchar(50) NOT NULL,
  `address` varchar(200) NOT NULL,
  `cityid` int(11) NOT NULL,
  `pincode` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `talukaid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `stateid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `igap_productcategories`
--

CREATE TABLE `igap_productcategories` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `picpath` varchar(100) DEFAULT NULL,
  `srno` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `igap_vendorproductpictures`
--

CREATE TABLE `igap_vendorproductpictures` (
  `id` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `title` varchar(500) NOT NULL,
  `picpath` varchar(500) NOT NULL,
  `srno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `igap_vendorproductpictures`
--

INSERT INTO `igap_vendorproductpictures` (`id`, `productid`, `title`, `picpath`, `srno`) VALUES
(3, 2, 'demo', 'businessproductpicture/vec1r.png', 1),
(4, 2, 'demo', 'businessproductpicture/6wstv.png', 1),
(5, 1, 'picture', 'vendorproducts/8gxj5.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `igap_vendorproducts`
--

CREATE TABLE `igap_vendorproducts` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` text NOT NULL,
  `specification` text NOT NULL,
  `picpath` varchar(500) NOT NULL,
  `igapvendorid` int(11) NOT NULL,
  `igaproductcategoryid` int(11) NOT NULL,
  `mrp` double NOT NULL,
  `price` double NOT NULL,
  `instock` varchar(150) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `igap_vendorproductvarieties`
--

CREATE TABLE `igap_vendorproductvarieties` (
  `id` int(11) NOT NULL,
  `productid` int(11) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `mrp` double DEFAULT NULL,
  `price` double DEFAULT NULL,
  `instock` varchar(3) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `igap_vendorproductvarieties`
--

INSERT INTO `igap_vendorproductvarieties` (`id`, `productid`, `color`, `size`, `weight`, `mrp`, `price`, `instock`, `status`) VALUES
(1, 1, 'red', 'XL', 100, 500, 400, 'N', 'open');

-- --------------------------------------------------------

--
-- Table structure for table `igap_vendors`
--

CREATE TABLE `igap_vendors` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobileno` varchar(50) NOT NULL,
  `address` varchar(500) NOT NULL,
  `cityid` int(11) NOT NULL,
  `pincode` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `talukas`
--

CREATE TABLE `talukas` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `districtid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `businesses`
--
ALTER TABLE `businesses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `businessproductreviews`
--
ALTER TABLE `businessproductreviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_couponproducts`
--
ALTER TABLE `business_couponproducts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_coupons`
--
ALTER TABLE `business_coupons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_productcategories`
--
ALTER TABLE `business_productcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_productpictures`
--
ALTER TABLE `business_productpictures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_products`
--
ALTER TABLE `business_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_productvarieties`
--
ALTER TABLE `business_productvarieties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_vendors`
--
ALTER TABLE `business_vendors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_businessid` (`businessid`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `igap_productcategories`
--
ALTER TABLE `igap_productcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `igap_vendorproductpictures`
--
ALTER TABLE `igap_vendorproductpictures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `igap_vendorproducts`
--
ALTER TABLE `igap_vendorproducts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `igap_vendorproductvarieties`
--
ALTER TABLE `igap_vendorproductvarieties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `igap_vendors`
--
ALTER TABLE `igap_vendors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `talukas`
--
ALTER TABLE `talukas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `businesses`
--
ALTER TABLE `businesses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `businessproductreviews`
--
ALTER TABLE `businessproductreviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `business_couponproducts`
--
ALTER TABLE `business_couponproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `business_coupons`
--
ALTER TABLE `business_coupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `business_productcategories`
--
ALTER TABLE `business_productcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business_productpictures`
--
ALTER TABLE `business_productpictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `business_products`
--
ALTER TABLE `business_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `business_productvarieties`
--
ALTER TABLE `business_productvarieties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `business_vendors`
--
ALTER TABLE `business_vendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `igap_productcategories`
--
ALTER TABLE `igap_productcategories`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `igap_vendorproductpictures`
--
ALTER TABLE `igap_vendorproductpictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `igap_vendorproducts`
--
ALTER TABLE `igap_vendorproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `igap_vendorproductvarieties`
--
ALTER TABLE `igap_vendorproductvarieties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `igap_vendors`
--
ALTER TABLE `igap_vendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `talukas`
--
ALTER TABLE `talukas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
