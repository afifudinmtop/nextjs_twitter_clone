-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2024 at 04:16 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `twitter.apip.dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `follow`
--

CREATE TABLE `follow` (
  `id` int(11) NOT NULL,
  `user1` text DEFAULT NULL,
  `user2` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `follow`
--

INSERT INTO `follow` (`id`, `user1`, `user2`) VALUES
(1, '1d3cb52d-6c3c-4ecb-9142-c30b4e13a00f', '183d49f5-f6e9-4699-a025-6abf2601f2eb');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `uuid` text DEFAULT NULL,
  `user` text DEFAULT NULL,
  `gambar` text DEFAULT NULL,
  `caption` text DEFAULT NULL,
  `ts` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `uuid`, `user`, `gambar`, `caption`, `ts`) VALUES
(1, '08a0c609-ea3d-45b0-8c67-e23837e2cb3f', '1d3cb52d-6c3c-4ecb-9142-c30b4e13a00f', '08a0c609-ea3d-45b0-8c67-e23837e2cb3f.jpeg', 'tes 1', '2024-03-03 09:04:15'),
(4, 'a9951ce6-347b-485e-9833-a1f8118bb3df', '183d49f5-f6e9-4699-a025-6abf2601f2eb', '', 'tes 2', '2024-03-03 09:18:55'),
(5, '77c77309-8200-4c22-9a70-49b7c9563c3f', '183d49f5-f6e9-4699-a025-6abf2601f2eb', '', 'twit jam 21:10', '2024-03-03 21:10:41'),
(6, '7896b3e7-4406-4978-a186-063c2037c120', '183d49f5-f6e9-4699-a025-6abf2601f2eb', '7896b3e7-4406-4978-a186-063c2037c120.jpeg', 'ice berg', '2024-03-03 21:11:10');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `uuid` text DEFAULT NULL,
  `nama` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `username` text DEFAULT NULL,
  `password` text DEFAULT NULL,
  `gambar` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `uuid`, `nama`, `email`, `username`, `password`, `gambar`) VALUES
(1, '1d3cb52d-6c3c-4ecb-9142-c30b4e13a00f', 'apipudin maarif', 'afifudinmaarif@gmail.com', 'apipudin', '$2a$10$SCKN4Op.tEVr9ek1i2PWvez1ZYrPMQZiktxBKvUppHDC8wYNr9s.e', 'avatar.png'),
(3, '183d49f5-f6e9-4699-a025-6abf2601f2eb', 'jokowi', 'jokowi@gmail.com', 'jokowi', '$2a$10$iQ5iAIb/hzgl6vLyJSq/XugxiwIA7AxD8NotOUsZsme9GNeCvzBo.', 'avatar.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `follow`
--
ALTER TABLE `follow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
