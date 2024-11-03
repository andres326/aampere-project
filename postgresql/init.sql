-- Table: public.vehicles

-- DROP TABLE IF EXISTS public.vehicles;
-- USE EVS_Aampere;

CREATE TABLE IF NOT EXISTS public.vehicles
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    brand text COLLATE pg_catalog."default" NOT NULL,
    model text COLLATE pg_catalog."default" NOT NULL,
    year integer NOT NULL,
    price integer NOT NULL,
    range_km integer NOT NULL,
    color text COLLATE pg_catalog."default" NOT NULL,
    condition text COLLATE pg_catalog."default" NOT NULL,
    battery_capacity_kwh integer NOT NULL,
    charging_speed_kw integer NOT NULL,
    seats integer NOT NULL,
    drivetrain text COLLATE pg_catalog."default" NOT NULL,
    location text COLLATE pg_catalog."default" NOT NULL,
    autopilot boolean NOT NULL,
    kilometer_count integer NOT NULL,
    accidents boolean NOT NULL,
    accident_description text COLLATE pg_catalog."default",
    CONSTRAINT vehicles_pkey PRIMARY KEY (id)
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.vehicles
    OWNER to postgres;

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Tesla', 'Model S', 2020, 79999, 610, 'Red', 'Used', 100, 250, 5, 'AWD', 'Berlin', true, 25000, true, 'Rear bumper scratch repaired');

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Nissan', 'Leaf', 2019, 29999, 270, 'White', 'New', 40, 50, 5, 'FWD', 'München', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('BMW', 'i3', 2021, 45999, 300, 'Black', 'New', 42, 50, 4, 'RWD', 'Hamburg', false, 500, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Audi', 'e-tron', 2022, 69999, 400, 'Blue', 'New', 95, 150, 5, 'AWD', 'Frankfurt am Main', true, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Volkswagen', 'ID.3', 2020, 34999, 420, 'Silver', 'New', 58, 100, 5, 'RWD', 'Köln', false, 100, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Renault', 'Zoe', 2018, 19999, 300, 'Grey', 'Used', 41, 22, 5, 'FWD', 'Stuttgart', false, 35000, true, 'Front fender replaced after minor collision');

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Hyundai', 'Kona Electric', 2021, 37999, 484, 'Blue', 'New', 64, 100, 5, 'FWD', 'Düsseldorf', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Kia', 'e-Niro', 2020, 35999, 455, 'White', 'New', 64, 77, 5, 'FWD', 'Leipzig', false, 200, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Jaguar', 'I-PACE', 2019, 64999, 470, 'Red', 'Used', 90, 100, 5, 'AWD', 'München', false, 15000, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Mercedes-Benz', 'EQC', 2021, 72999, 417, 'Silver', 'New', 80, 110, 5, 'AWD', 'Berlin', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Tesla', 'Model 3', 2021, 49999, 560, 'White', 'New', 75, 250, 5, 'RWD', 'Berlin', true, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Volkswagen', 'e-Golf', 2019, 27999, 230, 'Blue', 'Used', 35.8, 40, 5, 'FWD', 'Hamburg', false, 15000, true, 'Scratches on side doors repaired');

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Peugeot', 'e-208', 2020, 30999, 340, 'Yellow', 'New', 50, 100, 5, 'FWD', 'Köln', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Opel', 'Corsa-e', 2021, 28999, 330, 'Red', 'New', 50, 100, 5, 'FWD', 'Stuttgart', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Honda', 'e', 2021, 34999, 220, 'Grey', 'New', 35.5, 7.4, 4, 'RWD', 'Berlin', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Porsche', 'Taycan', 2020, 104999, 450, 'White', 'Used', 93.4, 270, 4, 'AWD', 'Frankfurt am Main', false, 5000, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Tesla', 'Model X', 2019, 89999, 507, 'Black', 'Used', 100, 250, 7, 'AWD', 'Berlin', true, 30000, true, 'Rear collision with no structural damage');

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Fiat', '500e', 2020, 24999, 320, 'Green', 'New', 42, 85, 4, 'FWD', 'München', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Mazda', 'MX-30', 2021, 26999, 200, 'Silver', 'New', 35.5, 50, 5, 'FWD', 'Köln', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Mini', 'Cooper SE', 2021, 31999, 235, 'Yellow', 'New', 32.6, 50, 4, 'FWD', 'Berlin', false, 0, false, NULL);
INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Tesla', 'Model Y', 2021, 59999, 505, 'Blue', 'New', 75, 250, 5, 'AWD', 'Berlin', true, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Ford', 'Mustang Mach-E', 2021, 53999, 480, 'Red', 'New', 88, 150, 5, 'RWD', 'Frankfurt am Main', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Skoda', 'Enyaq iV', 2021, 39999, 510, 'Grey', 'New', 77, 125, 5, 'RWD', 'Leipzig', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Citroën', 'ë-C4', 2021, 34999, 350, 'Blue', 'New', 50, 100, 5, 'FWD', 'Düsseldorf', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Renault', 'Twingo Z.E.', 2020, 21999, 190, 'White', 'New', 22, 22, 4, 'RWD', 'Stuttgart', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Volvo', 'XC40 Recharge', 2021, 58999, 400, 'Black', 'New', 78, 150, 5, 'AWD', 'München', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Audi', 'e-tron GT', 2021, 99999, 488, 'Silver', 'New', 93.4, 270, 4, 'AWD', 'Frankfurt am Main', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('BMW', 'iX3', 2021, 67999, 460, 'White', 'New', 80, 150, 5, 'RWD', 'Leipzig', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Mercedes-Benz', 'EQA', 2021, 47999, 426, 'Blue', 'New', 66.5, 100, 5, 'FWD', 'Düsseldorf', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Hyundai', 'Ioniq Electric', 2020, 32999, 311, 'Silver', 'Used', 38.3, 100, 5, 'FWD', 'Stuttgart', false, 25000, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Kia', 'Soul EV', 2020, 36999, 452, 'Red', 'Used', 64, 100, 5, 'FWD', 'München', false, 5000, true, 'Windshield replaced due to small crack');

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Polestar', '2', 2021, 59999, 470, 'White', 'New', 78, 150, 5, 'AWD', 'Hamburg', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Nissan', 'Ariya', 2021, 47999, 500, 'Gold', 'New', 87, 130, 5, 'FWD', 'Leipzig', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Tesla', 'Model 3', 2022, 51999, 580, 'Red', 'New', 82, 250, 5, 'AWD', 'Berlin', true, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Renault', 'Megane E-Tech', 2021, 35999, 470, 'Blue', 'New', 60, 130, 5, 'FWD', 'Stuttgart', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Volkswagen', 'ID.4', 2021, 44999, 520, 'White', 'New', 77, 125, 5, 'RWD', 'Hamburg', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Audi', 'Q4 e-tron', 2021, 49999, 520, 'Black', 'New', 77, 125, 5, 'AWD', 'Frankfurt am Main', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Opel', 'Mokka-e', 2021, 32999, 322, 'Green', 'New', 50, 100, 5, 'FWD', 'Düsseldorf', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('BMW', 'i4', 2022, 56999, 590, 'Blue', 'New', 83.9, 200, 5, 'RWD', 'München', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Mercedes-Benz', 'EQB', 2021, 52999, 419, 'Silver', 'New', 66.5, 100, 5, 'AWD', 'Hamburg', false, 0, false, NULL);
INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Peugeot', 'e-2008', 2021, 37999, 320, 'Orange', 'New', 50, 100, 5, 'FWD', 'Leipzig', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Fiat', '500e 3+1', 2021, 26999, 320, 'Pink', 'New', 42, 85, 4, 'FWD', 'Berlin', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Mazda', 'MX-30', 2020, 25999, 200, 'White', 'Used', 35.5, 50, 5, 'FWD', 'München', false, 8000, true, 'Minor dent on rear door fixed');

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Honda', 'e Advance', 2021, 36999, 210, 'Yellow', 'New', 35.5, 100, 4, 'RWD', 'Hamburg', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Nissan', 'Leaf e+', 2020, 34999, 385, 'Silver', 'Used', 62, 100, 5, 'FWD', 'Stuttgart', false, 12000, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Kia', 'EV6', 2021, 45999, 528, 'Red', 'New', 77.4, 220, 5, 'RWD', 'Düsseldorf', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Hyundai', 'Ioniq 5', 2021, 46999, 481, 'Grey', 'New', 77.4, 220, 5, 'AWD', 'Leipzig', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Porsche', 'Taycan Cross Turismo', 2021, 109999, 456, 'Blue', 'New', 93.4, 270, 5, 'AWD', 'Frankfurt am Main', false, 0, false, NULL);

INSERT INTO vehicles(brand, model, year, price, range_km, color, condition, battery_capacity_kwh, charging_speed_kw, seats, drivetrain, location, autopilot, kilometer_count, accidents, accident_description)
VALUES ('Tesla', 'Model S Plaid', 2021, 129999, 628, 'Black', 'New', 100, 250, 5, 'AWD', 'Berlin', true, 0, false, NULL);
