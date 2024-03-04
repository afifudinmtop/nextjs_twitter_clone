-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2024 at 08:22 PM
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
(1, '61bc1946-c535-4167-a9ff-1c390c8bbf5d', 'b2f902be-0db0-40b7-b893-1853b240badb', '61bc1946-c535-4167-a9ff-1c390c8bbf5d.jpeg', 'Ini adalah tweet pertama.', '2024-03-05 02:14:41'),
(2, '11251eb3-44c9-403a-9b56-c53b673cfe71', 'b2f902be-0db0-40b7-b893-1853b240badb', '', 'Hari ini cuaca sangat cerah.', '2024-03-05 02:15:40'),
(3, '5df9bc56-7eaf-4dd3-942c-6480c48063de', 'b2f902be-0db0-40b7-b893-1853b240badb', '', 'Saya sangat senang hari ini!', '2024-03-05 02:15:48'),
(4, '0755450c-798c-4b42-b8d5-1070149a661e', 'b2f902be-0db0-40b7-b893-1853b240badb', '', 'Menonton film favorit saya malam ini.', '2024-03-05 02:15:56'),
(5, '68aa33d6-550b-4ff6-8da1-08ae57368052', 'b2f902be-0db0-40b7-b893-1853b240badb', '', 'Belajar pemrograman adalah hal yang menyenangkan.', '2024-03-05 02:16:06'),
(6, '8d03077e-74c6-4ac8-9774-db37ef99c349', 'b2f902be-0db0-40b7-b893-1853b240badb', '', 'Saya sedang merencanakan liburan akhir pekan.', '2024-03-05 02:16:12'),
(7, 'ab8a01fd-eaf5-4576-9fe6-d01a7ec2518c', 'b2f902be-0db0-40b7-b893-1853b240badb', '', 'Memasak masakan baru hari ini!', '2024-03-05 02:16:21'),
(8, 'dcc703d6-2aa4-4210-b9b3-a21c7253801c', 'b2f902be-0db0-40b7-b893-1853b240badb', '', 'Berpikir positif adalah kuncinya!', '2024-03-05 02:16:28'),
(9, 'b67e26ea-d92e-4abd-953b-f7d01f660488', 'b2f902be-0db0-40b7-b893-1853b240badb', '', 'Berbagi adalah peduli.', '2024-03-05 02:16:35'),
(10, '24649c44-a3de-44cf-a838-2da1506d77ea', 'b2f902be-0db0-40b7-b893-1853b240badb', '', 'Tidur yang cukup sangat penting untuk kesehatan.', '2024-03-05 02:16:45'),
(11, '325fb62d-37c1-4d54-97bb-96323103b5b6', '7ab524bc-983c-440f-bd3a-0186fa2cc8cb', '', 'Baru saja menyelesaikan proyek besar dalam waktu rekord! 💻🚀', '2024-03-05 02:18:03'),
(12, '1bd90cb1-3018-4e58-91b5-9945e5b4c495', '7ab524bc-983c-440f-bd3a-0186fa2cc8cb', '', 'Senyum adalah bahasa yang universal. 😊', '2024-03-05 02:18:41'),
(13, 'f6ea05af-54a8-400f-927f-f009a0b088fe', '7ab524bc-983c-440f-bd3a-0186fa2cc8cb', '', 'Mimpi adalah bahan bakar bagi jiwa yang berkembang. 🌅💭', '2024-03-05 02:18:47'),
(14, 'f67d52e2-42fe-408d-9ec7-4ab8f1cecc68', '7ab524bc-983c-440f-bd3a-0186fa2cc8cb', '', 'Malam ini pemandangan bulan sangat indah. 🌕✨', '2024-03-05 02:18:55'),
(15, '50f8f1f7-55cc-45e2-afb3-8de02ce9e8f1', '7ab524bc-983c-440f-bd3a-0186fa2cc8cb', '', 'Belajar bermain piano adalah keputusan terbaik yang pernah saya buat. 🎹❤️', '2024-03-05 02:19:05'),
(16, '7950449d-bbac-4a98-9e5c-fc50e5d3ed92', '7ab524bc-983c-440f-bd3a-0186fa2cc8cb', '', 'Terkadang, hal-hal kecil dalam hiduplah yang membuatnya berarti. 🌱', '2024-03-05 02:19:12'),
(17, '5fa5d7f4-bda1-46ee-bba6-9d8b3605a5ac', '7ab524bc-983c-440f-bd3a-0186fa2cc8cb', '', 'Melompat dari pesawat terbang adalah pengalaman yang luar biasa! ✈️😎', '2024-03-05 02:19:18'),
(18, 'd37a57dc-06fd-4ced-95ba-30451c7272a1', '7ab524bc-983c-440f-bd3a-0186fa2cc8cb', '', 'Nada-nada jazz selalu membuat hari-hari saya lebih berwarna. 🎶🎷', '2024-03-05 02:19:25'),
(19, '98227245-9d8a-4895-84e1-d7a7397181e1', '7ab524bc-983c-440f-bd3a-0186fa2cc8cb', '', 'Melihat kupu-kupu beterbangan di taman sangat menyenangkan. 🦋💖', '2024-03-05 02:19:32'),
(20, '6c63c451-8d14-425c-846f-6c4f0cda9aac', '66a4619e-f1c2-4a82-84f3-7994b77812cd', '6c63c451-8d14-425c-846f-6c4f0cda9aac.jpeg', 'Mendaki gunung adalah pengalaman yang tak terlupakan.', '2024-03-05 02:21:19'),
(21, 'e2050bc9-d6f3-4aca-9097-ad7a935fec3b', '66a4619e-f1c2-4a82-84f3-7994b77812cd', '', 'Mencoba makanan baru di restoran terkenal.', '2024-03-05 02:21:29'),
(22, 'bef16414-f0a8-4b0f-8dd2-e2e90dc1e89b', '66a4619e-f1c2-4a82-84f3-7994b77812cd', '', 'Berolahraga adalah kunci untuk hidup sehat.', '2024-03-05 02:21:35'),
(23, '5729f19c-9860-41ab-9b2b-21fa917f29ff', '66a4619e-f1c2-4a82-84f3-7994b77812cd', '', 'Menikmati keindahan alam di hutan.', '2024-03-05 02:21:46');

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
  `gambar` text DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `banner` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `uuid`, `nama`, `email`, `username`, `password`, `gambar`, `bio`, `banner`) VALUES
(1, 'b2f902be-0db0-40b7-b893-1853b240badb', 'apipudin', 'apipudin@gmail.com', 'apipudin', '$2a$10$vX/5MCxWnsMYqXtLI8Nkr.kXivDQgZRk7caGCAwthU7vf4j4YpxDS', '/uploads/6c7629ad-9c60-42a9-9c9f-de2637bd983d.jpeg', 'la vie est belle', '/uploads/60be8537-49d7-4e7e-a9ee-a4b906ceb377.jpeg'),
(2, '7ab524bc-983c-440f-bd3a-0186fa2cc8cb', 'ronaldo', 'ronaldo@gmail.com', 'ronaldo', '$2a$10$FGwAt4l8xyHU9rtCfRzVVuWOwGnTVCMqxqI8wHvU8eIKYz/I/k1QS', '/uploads/96bbfaa7-4ef1-4d8a-a7df-48a7dcbabb21.jpeg', 'siuuuuu', '/uploads/dbb7eeaa-1f93-4afa-984b-327d21031e0a.jpeg'),
(3, '66a4619e-f1c2-4a82-84f3-7994b77812cd', 'messi10', 'messi10@gmail.com', 'messi10', '$2a$10$jM26YEUIvYJerJ/HhxoLAuGmBR0NHHtcSBo9EUZ..na83dxqffn22', '/uploads/735d49ee-c1ad-42e4-9e22-b1ef35987210.jpeg', 'the goat', '/uploads/44f552cd-20cc-498b-89e5-97a9a7c6e7a8.jpeg');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
