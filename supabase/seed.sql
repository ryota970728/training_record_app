SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.8
-- Dumped by pg_dump version 15.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: part_master; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."part_master" ("part_id", "part_name", "part_color") VALUES
	(1, '胸', '#DF5656'),
	(2, '肩', '#579ADE'),
	(3, '背中', '#DE9A57'),
	(4, '二頭', '#57DE57'),
	(5, '三頭', '#DEDE57'),
	(6, '脚', '#9A57DE');


--
-- Data for Name: menu_master; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."menu_master" ("menu_id", "part_id", "menu_name") VALUES
	(21, 3, 'ローロー'),
	(34, 4, 'プリーチャーカール'),
	(35, 2, 'ケーブルサイドレイズ'),
	(36, 5, 'ライイングエクステンション'),
	(37, 3, 'Tバーロウ'),
	(38, 6, 'スクワット'),
	(39, 1, 'スミスマシンプレス'),
	(1, 1, 'ベンチプレス'),
	(2, 1, 'インクラインダンベルベンチプレス'),
	(3, 1, 'スミスマシンインクラインプレス'),
	(4, 1, 'インクラインダンベルフライ'),
	(5, 1, 'スーパーインクラインプレス'),
	(6, 1, 'ワイドチェストプレス'),
	(7, 1, 'ダンベルプレス'),
	(8, 1, 'ダンベルフライ'),
	(9, 1, 'ペックフライ'),
	(10, 1, 'ケーブルクロスオーバー'),
	(11, 1, 'ディップス'),
	(12, 1, 'チェストプレスマシン'),
	(13, 2, 'ダンベルショルダープレス'),
	(14, 2, 'ダンベルサイドレイズ'),
	(15, 2, 'ダンベルリアレイズ'),
	(16, 2, 'アーノルドプレス'),
	(17, 2, 'スミスマシンショルダープレス'),
	(18, 2, 'リアデルトフライマシン'),
	(19, 2, 'EZバー・フロントレイズ'),
	(20, 3, 'ラットプルダウン'),
	(33, 5, 'ケーブルプレスダウン'),
	(32, 5, 'ダンベルフレンチプレス'),
	(31, 4, 'ケーブルカール'),
	(30, 4, 'インクラインダンベルカール'),
	(29, 4, 'ダンベルカール'),
	(28, 3, 'デッドリフト'),
	(27, 3, 'ベントオーバーロウ'),
	(26, 3, 'チンニング'),
	(25, 3, 'レベルロウ'),
	(24, 3, 'ハイロウ'),
	(23, 3, 'ロウイング'),
	(22, 3, 'シーテッドロウ');


--
-- Data for Name: old_part_master; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."old_part_master" ("part_id", "part_name", "part_color") VALUES
	(1, '胸', '#DF5656'),
	(2, '肩', '#579ADE'),
	(3, '背中', '#DE9A57'),
	(4, '二頭', '#57DE57'),
	(5, '三頭', '#DEDE57');


--
-- Data for Name: old_menu_master; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."old_menu_master" ("menu_id", "part_id", "menu_name") VALUES
	(1, 1, 'ベンチプレス'),
	(2, 1, 'インクラインダンベルベンチプレス'),
	(3, 1, 'シーテッドチェストプレス'),
	(4, 1, 'ペックフライ'),
	(5, 1, 'ケーブルクロスオーバー'),
	(6, 1, 'スミスマシンインクラインベンチプレス'),
	(7, 1, 'インクラインダンベルフライ'),
	(8, 2, 'ダンベルショルダープレス'),
	(9, 2, 'アーノルドプレス'),
	(10, 2, 'ダンベルサイドレイズ'),
	(11, 2, 'シーテッドダンベルリアレイズ'),
	(12, 2, 'リアーデルトフライ'),
	(13, 3, 'シーテッドロウマシン'),
	(14, 3, 'プレートロウテッドプルダウン'),
	(15, 3, 'ラットプルダウン'),
	(16, 3, 'シーテッドケーブルロー'),
	(17, 3, 'チンニング'),
	(18, 3, 'ベントオーバーロウ'),
	(19, 4, 'ダンベルカール'),
	(20, 4, 'インクラインダンベルカール'),
	(21, 4, 'ケーブルカール'),
	(22, 5, 'ダンベルフレンチプレス'),
	(23, 5, 'ケーブルプレスダウン'),
	(24, 3, 'Tバーロウマシン'),
	(25, 1, 'ディップス'),
	(26, 2, 'スミスマシンショルダープレス'),
	(27, 2, 'マシンサイドレイズ'),
	(28, 2, 'EZバー・フロントレイズ'),
	(29, 1, 'インクラインベンチプレス'),
	(30, 2, 'プレートローテッドショルダープレス'),
	(31, 3, 'ダンベルローイング'),
	(32, 3, 'デッドリフト'),
	(33, 3, 'ロウイング'),
	(34, 1, 'ワイドチェストプレス'),
	(35, 1, 'スーパーインクラインプレス');


--
-- Name: menu_master_menu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."menu_master_menu_id_seq"', 39, true);


--
-- Name: old_menu_master_menu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."old_menu_master_menu_id_seq"', 1, false);


--
-- Name: old_part_master_part_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."old_part_master_part_id_seq"', 1, false);


--
-- Name: old_record_record_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."old_record_record_id_seq"', 1, false);


--
-- Name: old_set_detail_set_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."old_set_detail_set_detail_id_seq"', 1, false);


--
-- Name: part_master_part_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."part_master_part_id_seq"', 6, true);


--
-- Name: record_record_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."record_record_id_seq"', 601, true);


--
-- Name: set_detail_set_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."set_detail_set_detail_id_seq"', 1869, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;

-- Master table sequences
SELECT pg_catalog.setval('"public"."part_master_part_id_seq"', 6, true);
SELECT pg_catalog.setval('"public"."menu_master_menu_id_seq"', 39, true);
SELECT pg_catalog.setval('"public"."old_part_master_part_id_seq"', 5, true);
SELECT pg_catalog.setval('"public"."old_menu_master_menu_id_seq"', 35, true);

-- Record tables are intentionally empty
SELECT pg_catalog.setval('"public"."record_record_id_seq"', 1, false);
SELECT pg_catalog.setval('"public"."set_detail_set_detail_id_seq"', 1, false);
SELECT pg_catalog.setval('"public"."old_record_record_id_seq"', 1, false);
SELECT pg_catalog.setval('"public"."old_set_detail_set_detail_id_seq"', 1, false);
