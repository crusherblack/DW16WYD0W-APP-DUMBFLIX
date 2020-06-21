-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2020 at 07:20 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dumbflix`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'TV Series', '2020-06-12 02:55:36', '2020-06-12 02:55:36'),
(2, 'Movies', '2020-06-12 02:55:43', '2020-06-12 02:55:43');

-- --------------------------------------------------------

--
-- Table structure for table `episodes`
--

CREATE TABLE `episodes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `thumbnailFilm` varchar(255) DEFAULT NULL,
  `linkFilm` varchar(255) DEFAULT NULL,
  `filmId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `episodes`
--

INSERT INTO `episodes` (`id`, `title`, `thumbnailFilm`, `linkFilm`, `filmId`, `createdAt`, `updatedAt`) VALUES
(17, 'Episode 2', 'witcher3.jpg', 'https://youtu.be/duqP6tWp-R0', 21, '2020-06-21 04:50:56', '2020-06-21 04:50:56'),
(18, 'Episode 1', 'witcher3.jpg', 'https://www.youtube.com/watch?v=LsOF8G-P6Go&t=23s', 21, '2020-06-21 04:50:56', '2020-06-21 04:50:56'),
(19, 'The GodFather', 'godfather.jpg', 'https://youtu.be/UkqZkVwXtc0', 22, '2020-06-21 04:55:04', '2020-06-21 04:55:04'),
(20, 'The Dark Knight', 'batman.jpg', 'https://youtu.be/UkqZkVwXtc0', 23, '2020-06-21 04:57:37', '2020-06-21 04:57:37'),
(21, 'Avengers : Endgame', 'avanger.jpg', 'https://youtu.be/UkqZkVwXtc0', 24, '2020-06-21 05:05:12', '2020-06-21 05:05:12'),
(22, 'Joker', 'joker.jpg', 'https://youtu.be/UkqZkVwXtc0', 25, '2020-06-21 05:05:40', '2020-06-21 05:05:40'),
(23, 'Episode 3', '1592726816924-persona3.jpg', 'https://youtu.be/ZD6nYmlu1dk', 26, '2020-06-21 08:06:56', '2020-06-21 08:06:56'),
(24, 'Episode 2', '1592726816927-persona3.jpg', 'https://youtu.be/Va36VYSf3fk', 26, '2020-06-21 08:06:56', '2020-06-21 08:06:56'),
(25, 'Episode 1', '1592726816931-persona3.jpg', 'https://youtu.be/kid85gmnp-A', 26, '2020-06-21 08:06:56', '2020-06-21 08:06:56');

-- --------------------------------------------------------

--
-- Table structure for table `films`
--

CREATE TABLE `films` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `thumbnailFilm` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `films`
--

INSERT INTO `films` (`id`, `title`, `thumbnailFilm`, `year`, `categoryId`, `description`, `createdAt`, `updatedAt`) VALUES
(21, 'The Witcher', '1592715055929-card1.png', 2019, 1, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged', '2020-06-21 04:50:55', '2020-06-21 04:50:55'),
(22, 'The GodFather', '1592715304293-card7.png', 2019, 2, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged', '2020-06-21 04:55:04', '2020-06-21 04:55:04'),
(23, 'The Dark Knight', '1592715457248-card8.png', 2017, 2, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged', '2020-06-21 04:57:37', '2020-06-21 04:57:37'),
(24, 'Avengers : Endgame', '1592715912796-card9.png', 2015, 2, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged', '2020-06-21 05:05:12', '2020-06-21 05:05:12'),
(25, 'Joker', '1592715940327-card10.png', 2012, 2, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged', '2020-06-21 05:05:40', '2020-06-21 05:05:40'),
(26, 'Persona 3 The Movie', '1592726816618-card2.png', 2017, 1, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged', '2020-06-21 08:06:56', '2020-06-21 08:06:56');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200611115852-create-users.js'),
('20200611141220-create-category.js'),
('20200611141453-create-film.js'),
('20200611171756-create-transaction.js'),
('20200612144504-create-episode.js');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `startDate` date DEFAULT NULL,
  `dueDate` date DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `attache` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `startDate`, `dueDate`, `userId`, `attache`, `status`, `createdAt`, `updatedAt`) VALUES
(11, '2020-06-22', '2020-06-22', 15, '1592759061935-WhatsApp Image 2020-05-23 at 12.41.48.jpeg', 'Reject', '2020-06-21 17:04:21', '2020-06-21 17:05:58'),
(12, '2020-06-22', '2020-06-22', 16, '1592759119616-production.png', 'Approved', '2020-06-21 17:05:19', '2020-06-21 17:05:50'),
(13, '2020-06-22', '2020-06-22', 17, '1592759359690-Laporan Nanda Aset 4.png', 'Pending', '2020-06-21 17:09:19', '2020-06-21 17:09:19');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `subscribe` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `dueDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `role`, `gender`, `phone`, `address`, `subscribe`, `createdAt`, `updatedAt`, `dueDate`) VALUES
(1, 'Fadhil Darma Putera Z', 'fadhildarma13@gmail.com', '$2b$10$X8OMDSK675USN.DC84R8ieX5gfLY6KhG5lQQtXGj/YA9FkpokRjzK', 1, 'male', '083896831233', 'Jln. Jala Mitra, No.7', 1, '2020-06-12 02:49:34', '2020-06-21 16:34:18', '2020-07-21'),
(2, 'Tes lagi', 'tes@gmail.com', '$2b$10$TVisTkjOjcnSYMG.nZxrPume2t3RUGNFRL3h3cHq/fFH3QRBzpmKe', 1, 'male', '083896831233', 'Jln. Jala Mitra, No.7', 0, '2020-06-12 02:51:10', '2020-06-12 02:51:10', '0000-00-00'),
(4, 'Tes lagi', 'te2s@gmail.com', '$2b$10$1CClxtkuurrGiiRkX/7Rv.PgTXTGCz8r2fsi.N7j/YyahHaNulv.W', 1, 'male', '083896831233', 'Jln. Jala Mitra, No.7', 0, '2020-06-12 02:51:47', '2020-06-12 02:51:47', '0000-00-00'),
(6, 'Demo', 'fadhildarma9125@gmail.com', '$2b$10$gNj5jJsx4i.53jBMKGheaOb98dwKe/V2qlxUTvQQnZX2ExOFKDuai', 1, 'male', '083896831233', 'Jln. Jala Mitra, No.7', 0, '2020-06-13 03:44:04', '2020-06-13 03:44:04', '0000-00-00'),
(8, 'Fadhil Darma', 'fadhil@gmail.com', '$2b$10$rngsD6LOxrdiv9rlyWvWGuKNjXSwnZBzYsEoxPWpKdDCb8vt9GKSK', 1, 'male', '083896831233', 'Jln. Jala Mitra, No.7', 1, '2020-06-15 02:40:35', '2020-06-21 16:59:01', '2020-07-21'),
(9, 'Admin', 'admin@gmail.com', '$2b$10$RGWIhwTTnG.FKk8uH9Isiux/DriHf0Fac5UZqyi5WQm0NVgyJvSsa', 1, 'male', '083896831233', 'Jln. Jala Mitra, No.7', 0, '2020-06-17 02:21:23', '2020-06-17 02:21:23', '0000-00-00'),
(10, 'Admin', 'admian@gmail.com', '$2b$10$o1JuRrFbwavuv3/DKbmGKuvyoP4aOr98y6b1k.XXB8e3SZrqYxPry', 1, 'male', '083896831233', 'Jln. Jala Mitra, No.7', 0, '2020-06-17 02:23:25', '2020-06-17 02:23:25', '0000-00-00'),
(11, 'awdawd', 'moci@gmail.com', '$2b$10$xGDVMwIbJDqaTf.lPR6ELepgmBc4eLDyOmBL2izjUaMOrk4Hr3qcS', 2, 'awdawdawd', '2143214123213', 'adwadawdawdawdawd', 0, '2020-06-18 13:46:22', '2020-06-18 13:46:22', '0000-00-00'),
(12, 'user', 'user@gmail.com', '$2b$10$yBzIIcneLh75uNiE/bMsJedr1Cz/n8xAM7afJdzuc.HWs5gscLg86', 2, 'male', '0923409209', 'adwokawdokawodk', 1, '2020-06-18 14:02:00', '2020-06-18 14:02:00', '0000-00-00'),
(13, 'userbaru', 'userbaru@gmail.com', '$2b$10$3DllfX6PtIXaQTlt0g2wEeTyB5zrG0ZPdngSHh75gAXqfssW54YjC', 2, 'male', '309421032104', 'aawdawdawdawdawd', 1, '2020-06-19 11:45:56', '2020-06-21 16:58:38', '2020-07-21'),
(14, 'cobaaja', 'coba@gmail.com', '$2b$10$PwtCRAfLDs5EX4dwK8dgteJPhmBMh0fGOtmo/7TaSsnZplKOa1aZW', 2, 'Male', '085256555943', 'komp.jala mitra no.7, cendana mata air,padang', 0, '2020-06-21 03:54:51', '2020-06-21 03:54:51', '0000-00-00'),
(15, 'barusekali@gmail.com', 'barusekali@gmail.com', '$2b$10$TZo1A8UkKX1N1dunVRXOgeD/wqG24T4F4ddntm87QCh.TiE3Tkt36', 2, 'Male', '2132132132131', 'barusekali@gmail.com', 0, '2020-06-21 17:03:58', '2020-06-21 17:03:58', '0000-00-00'),
(16, 'terbaru@gmail.com', 'terbaru@gmail.com', '$2b$10$h8G9r8BKr/KLZuZsTyxUiOogll.C/H5xqY7oqYlPfQPDGGOZnTEge', 2, 'Famale', '21312321321', 'terbaru@gmail.com', 1, '2020-06-21 17:05:07', '2020-06-21 17:05:50', '2020-07-22'),
(17, 'orangbaru@gmail.com', 'orangbaru@gmail.com', '$2b$10$46ivHSpEZXoLMVEEq0KEJuBOql1dQJBTNRXD1jzFi1DHYiIZXR6oG', 2, 'Famale', '2131242131', 'orangbaru@gmail.com', 0, '2020-06-21 17:09:00', '2020-06-21 17:09:00', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `episodes`
--
ALTER TABLE `episodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `filmId` (`filmId`);

--
-- Indexes for table `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `episodes`
--
ALTER TABLE `episodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `films`
--
ALTER TABLE `films`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `episodes`
--
ALTER TABLE `episodes`
  ADD CONSTRAINT `episodes_ibfk_1` FOREIGN KEY (`filmId`) REFERENCES `films` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `films`
--
ALTER TABLE `films`
  ADD CONSTRAINT `films_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
