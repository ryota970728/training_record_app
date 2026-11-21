

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


CREATE EXTENSION IF NOT EXISTS "pgsodium";






COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";





SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."menu_master" (
    "menu_id" integer NOT NULL,
    "part_id" integer NOT NULL,
    "menu_name" character varying(50)
);


ALTER TABLE "public"."menu_master" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."menu_master_menu_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."menu_master_menu_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."menu_master_menu_id_seq" OWNED BY "public"."menu_master"."menu_id";



CREATE TABLE IF NOT EXISTS "public"."old_menu_master" (
    "menu_id" integer NOT NULL,
    "part_id" integer NOT NULL,
    "menu_name" character varying(50)
);


ALTER TABLE "public"."old_menu_master" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."old_menu_master_menu_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."old_menu_master_menu_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."old_menu_master_menu_id_seq" OWNED BY "public"."old_menu_master"."menu_id";



CREATE TABLE IF NOT EXISTS "public"."old_part_master" (
    "part_id" integer NOT NULL,
    "part_name" character varying(50),
    "part_color" "text"
);


ALTER TABLE "public"."old_part_master" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."old_part_master_part_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."old_part_master_part_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."old_part_master_part_id_seq" OWNED BY "public"."old_part_master"."part_id";



CREATE TABLE IF NOT EXISTS "public"."old_record" (
    "record_id" integer NOT NULL,
    "part_id" integer NOT NULL,
    "menu_id" integer NOT NULL,
    "set_count" integer,
    "create_date" "date",
    "note" character varying(255)
);


ALTER TABLE "public"."old_record" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."old_record_record_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."old_record_record_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."old_record_record_id_seq" OWNED BY "public"."old_record"."record_id";



CREATE TABLE IF NOT EXISTS "public"."old_set_detail" (
    "set_detail_id" integer NOT NULL,
    "record_id" integer,
    "current_set" integer,
    "weight" numeric(5,2),
    "reps" integer
);


ALTER TABLE "public"."old_set_detail" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."old_set_detail_set_detail_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."old_set_detail_set_detail_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."old_set_detail_set_detail_id_seq" OWNED BY "public"."old_set_detail"."set_detail_id";



CREATE TABLE IF NOT EXISTS "public"."part_master" (
    "part_id" integer NOT NULL,
    "part_name" character varying(50),
    "part_color" "text"
);


ALTER TABLE "public"."part_master" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."part_master_part_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."part_master_part_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."part_master_part_id_seq" OWNED BY "public"."part_master"."part_id";



CREATE TABLE IF NOT EXISTS "public"."record" (
    "record_id" integer NOT NULL,
    "part_id" integer NOT NULL,
    "menu_id" integer NOT NULL,
    "set_count" integer,
    "create_date" "date",
    "note" character varying(255)
);


ALTER TABLE "public"."record" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."record_record_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."record_record_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."record_record_id_seq" OWNED BY "public"."record"."record_id";



CREATE TABLE IF NOT EXISTS "public"."set_detail" (
    "set_detail_id" integer NOT NULL,
    "record_id" integer,
    "current_set" integer,
    "weight" numeric(5,2),
    "reps" integer
);


ALTER TABLE "public"."set_detail" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."set_detail_set_detail_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."set_detail_set_detail_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."set_detail_set_detail_id_seq" OWNED BY "public"."set_detail"."set_detail_id";



ALTER TABLE ONLY "public"."menu_master" ALTER COLUMN "menu_id" SET DEFAULT "nextval"('"public"."menu_master_menu_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."old_menu_master" ALTER COLUMN "menu_id" SET DEFAULT "nextval"('"public"."old_menu_master_menu_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."old_part_master" ALTER COLUMN "part_id" SET DEFAULT "nextval"('"public"."old_part_master_part_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."old_record" ALTER COLUMN "record_id" SET DEFAULT "nextval"('"public"."old_record_record_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."old_set_detail" ALTER COLUMN "set_detail_id" SET DEFAULT "nextval"('"public"."old_set_detail_set_detail_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."part_master" ALTER COLUMN "part_id" SET DEFAULT "nextval"('"public"."part_master_part_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."record" ALTER COLUMN "record_id" SET DEFAULT "nextval"('"public"."record_record_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."set_detail" ALTER COLUMN "set_detail_id" SET DEFAULT "nextval"('"public"."set_detail_set_detail_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."menu_master"
    ADD CONSTRAINT "menu_master_pkey" PRIMARY KEY ("menu_id");



ALTER TABLE ONLY "public"."old_menu_master"
    ADD CONSTRAINT "old_menu_master_pkey" PRIMARY KEY ("menu_id");



ALTER TABLE ONLY "public"."old_part_master"
    ADD CONSTRAINT "old_part_master_pkey" PRIMARY KEY ("part_id");



ALTER TABLE ONLY "public"."old_record"
    ADD CONSTRAINT "old_record_pkey" PRIMARY KEY ("record_id");



ALTER TABLE ONLY "public"."old_set_detail"
    ADD CONSTRAINT "old_set_detail_pkey" PRIMARY KEY ("set_detail_id");



ALTER TABLE ONLY "public"."part_master"
    ADD CONSTRAINT "part_master_pkey" PRIMARY KEY ("part_id");



ALTER TABLE ONLY "public"."record"
    ADD CONSTRAINT "record_pkey" PRIMARY KEY ("record_id");



ALTER TABLE ONLY "public"."set_detail"
    ADD CONSTRAINT "set_detail_pkey" PRIMARY KEY ("set_detail_id");



ALTER TABLE ONLY "public"."menu_master"
    ADD CONSTRAINT "menu_master_part_id_fkey" FOREIGN KEY ("part_id") REFERENCES "public"."part_master"("part_id");



ALTER TABLE ONLY "public"."old_menu_master"
    ADD CONSTRAINT "old_menu_master_part_id_fkey" FOREIGN KEY ("part_id") REFERENCES "public"."old_part_master"("part_id");



ALTER TABLE ONLY "public"."old_record"
    ADD CONSTRAINT "old_record_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "public"."old_menu_master"("menu_id");



ALTER TABLE ONLY "public"."old_record"
    ADD CONSTRAINT "old_record_part_id_fkey" FOREIGN KEY ("part_id") REFERENCES "public"."old_part_master"("part_id");



ALTER TABLE ONLY "public"."old_set_detail"
    ADD CONSTRAINT "old_set_detail_record_id_fkey" FOREIGN KEY ("record_id") REFERENCES "public"."old_record"("record_id");



ALTER TABLE ONLY "public"."record"
    ADD CONSTRAINT "record_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "public"."menu_master"("menu_id");



ALTER TABLE ONLY "public"."record"
    ADD CONSTRAINT "record_part_id_fkey" FOREIGN KEY ("part_id") REFERENCES "public"."part_master"("part_id");



ALTER TABLE ONLY "public"."set_detail"
    ADD CONSTRAINT "set_detail_record_id_fkey" FOREIGN KEY ("record_id") REFERENCES "public"."record"("record_id");



CREATE POLICY "Enable delete for all users" ON "public"."record" FOR DELETE USING (true);



CREATE POLICY "Enable delete for all users" ON "public"."set_detail" FOR DELETE USING (true);



CREATE POLICY "Enable insert for all users" ON "public"."menu_master" FOR INSERT WITH CHECK (true);



CREATE POLICY "Enable insert for all users" ON "public"."part_master" FOR INSERT WITH CHECK (true);



CREATE POLICY "Enable insert for all users" ON "public"."record" FOR INSERT WITH CHECK (true);



CREATE POLICY "Enable insert for all users" ON "public"."set_detail" FOR INSERT WITH CHECK (true);



CREATE POLICY "Enable read access for all users" ON "public"."menu_master" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."old_menu_master" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."old_part_master" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."old_record" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."old_set_detail" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."part_master" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."record" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."set_detail" FOR SELECT USING (true);



ALTER TABLE "public"."menu_master" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."old_menu_master" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."old_part_master" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."old_record" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."old_set_detail" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."part_master" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."record" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."set_detail" ENABLE ROW LEVEL SECURITY;




ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";


GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";









































































































































































































GRANT ALL ON TABLE "public"."menu_master" TO "anon";
GRANT ALL ON TABLE "public"."menu_master" TO "authenticated";
GRANT ALL ON TABLE "public"."menu_master" TO "service_role";



GRANT ALL ON SEQUENCE "public"."menu_master_menu_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."menu_master_menu_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."menu_master_menu_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."old_menu_master" TO "anon";
GRANT ALL ON TABLE "public"."old_menu_master" TO "authenticated";
GRANT ALL ON TABLE "public"."old_menu_master" TO "service_role";



GRANT ALL ON SEQUENCE "public"."old_menu_master_menu_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."old_menu_master_menu_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."old_menu_master_menu_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."old_part_master" TO "anon";
GRANT ALL ON TABLE "public"."old_part_master" TO "authenticated";
GRANT ALL ON TABLE "public"."old_part_master" TO "service_role";



GRANT ALL ON SEQUENCE "public"."old_part_master_part_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."old_part_master_part_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."old_part_master_part_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."old_record" TO "anon";
GRANT ALL ON TABLE "public"."old_record" TO "authenticated";
GRANT ALL ON TABLE "public"."old_record" TO "service_role";



GRANT ALL ON SEQUENCE "public"."old_record_record_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."old_record_record_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."old_record_record_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."old_set_detail" TO "anon";
GRANT ALL ON TABLE "public"."old_set_detail" TO "authenticated";
GRANT ALL ON TABLE "public"."old_set_detail" TO "service_role";



GRANT ALL ON SEQUENCE "public"."old_set_detail_set_detail_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."old_set_detail_set_detail_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."old_set_detail_set_detail_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."part_master" TO "anon";
GRANT ALL ON TABLE "public"."part_master" TO "authenticated";
GRANT ALL ON TABLE "public"."part_master" TO "service_role";



GRANT ALL ON SEQUENCE "public"."part_master_part_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."part_master_part_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."part_master_part_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."record" TO "anon";
GRANT ALL ON TABLE "public"."record" TO "authenticated";
GRANT ALL ON TABLE "public"."record" TO "service_role";



GRANT ALL ON SEQUENCE "public"."record_record_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."record_record_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."record_record_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."set_detail" TO "anon";
GRANT ALL ON TABLE "public"."set_detail" TO "authenticated";
GRANT ALL ON TABLE "public"."set_detail" TO "service_role";



GRANT ALL ON SEQUENCE "public"."set_detail_set_detail_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."set_detail_set_detail_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."set_detail_set_detail_id_seq" TO "service_role";









ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";






























RESET ALL;
