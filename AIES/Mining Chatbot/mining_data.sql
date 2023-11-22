create database SIH_Mining_Chatbot;
use SIH_Mining_Chatbot;
CREATE TABLE Acts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);
CREATE TABLE Corrigenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);
CREATE TABLE Guidelines (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);
CREATE TABLE Methodology (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);
CREATE TABLE Regulations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);
CREATE TABLE Rules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

INSERT INTO Acts (title, content) VALUES 
('Mining Act', 'The Mining Act governs mining operations in India. It covers various aspects of mining, including exploration, licensing, and environmental regulations. The Act is designed to ensure the sustainable and responsible extraction of minerals while safeguarding the environment and the rights of local communities.'),
('Minerals Development Act', 'The Minerals Development Act outlines the legal framework for mineral exploration, extraction, and trading. It defines the rights and obligations of mining companies and provides guidelines for environmental protection and community engagement.'),
('Mining Safety and Health Act', 'The Mining Safety and Health Act focuses on ensuring the safety and well-being of mining workers. It establishes standards for workplace safety, equipment usage, and emergency response. Compliance with this act is mandatory to prevent accidents and protect miners.'),
('Minerals Export Control Act', 'The Minerals Export Control Act regulates the exportation of minerals from the country. It specifies licensing requirements, export quotas, and quality standards. This act aims to manage the country\'s mineral resources and prevent illegal exports.'),
('Mining Revenue Act', 'The Mining Revenue Act governs the taxation and revenue generation from mining activities. It outlines the royalty rates, tax deductions, and reporting requirements for mining companies. Adherence to this act is crucial for the financial sustainability of mining projects.');

INSERT INTO Corrigenda (title, content) VALUES 
('Corrigendum 1', 'This corrigendum provides corrections to inaccuracies in the previous mining regulations. It includes updated legal references and clarifications to ensure accurate interpretation and implementation of the regulations.'),
('Corrigendum 2', 'This corrigendum addresses typographical errors in the mining guidelines. It rectifies spelling mistakes and ensures consistency in terminology, making the guidelines more user-friendly for mining professionals.'),
('Corrigendum 3', 'This corrigendum updates the contact information of regulatory authorities mentioned in the mining regulations. It provides the correct addresses and phone numbers for miners to reach out for inquiries and compliance-related matters.'),
('Corrigendum 4', 'This corrigendum introduces new safety protocols in the mining rules. It includes amendments related to the usage of personal protective equipment (PPE) and safety gear, enhancing the overall safety standards for mining operations.'),
('Corrigendum 5', 'This corrigendum revises the environmental impact assessment procedures outlined in the regulations. It includes additional requirements for comprehensive environmental studies and biodiversity assessments before initiating mining projects.');

INSERT INTO Guidelines (title, content) VALUES 
('Sustainable Mining Guidelines', 'These guidelines promote sustainable mining practices, emphasizing environmental conservation and community welfare. They provide recommendations for eco-friendly mining methods, reforestation initiatives, and community development projects.'),
('Ethical Mining Guidelines', 'Ethical Mining Guidelines focus on fair trade practices and ethical sourcing of minerals. They address issues such as child labor, conflict minerals, and human rights violations. Adhering to these guidelines ensures responsible sourcing for industries.'),
('Community Engagement Guidelines', 'Community Engagement Guidelines outline strategies for involving local communities in mining projects. They emphasize open communication, consultation, and fair compensation for land usage. These guidelines foster positive relationships between mining companies and affected communities.'),
('Mining Equipment Safety Guidelines', 'These guidelines provide specifications for safe mining equipment design and usage. They cover topics such as equipment maintenance, operator training, and safety inspections. Compliance with these guidelines prevents accidents and equipment failures.'),
('Biodiversity Conservation Guidelines', 'Biodiversity Conservation Guidelines focus on preserving local flora and fauna during mining activities. They mandate habitat assessments, conservation plans, and restoration efforts. Following these guidelines minimizes the ecological impact of mining projects.');

INSERT INTO Methodology (title, content) VALUES 
('Surface Mining Methodology', 'Surface Mining Methodology involves extracting minerals from the earth\'s surface. It includes techniques such as open-pit mining, quarrying, and placer mining. This methodology is suitable for shallow mineral deposits and large-scale operations.'),
('Underground Mining Methodology', 'Underground Mining Methodology is used for deep-seated mineral deposits. It includes methods like shaft mining, drift mining, and room and pillar mining. Safety measures and efficient ore extraction techniques are integral to this methodology.'),
('Placer Mining Methodology', 'Placer Mining Methodology focuses on extracting minerals from riverbeds and other sedimentary deposits. It utilizes water currents to separate valuable minerals from sand and gravel. This methodology is environmentally friendly and often used for gold and precious metal mining.'),
('Blasting and Drilling Techniques', 'Blasting and Drilling Techniques are essential for breaking hard rocks and accessing mineral deposits. Modern techniques involve computer-controlled drilling and precision explosives. Proper drilling and blasting minimize environmental impact and improve mining efficiency.'),
('Ore Processing Methodology', 'Ore Processing Methodology involves refining extracted ores into usable products. It includes crushing, grinding, smelting, and refining processes. This methodology ensures the extraction of pure minerals for industrial applications.');

INSERT INTO Regulations (title, content) VALUES 
('Mining Lease Application Regulations', 'These regulations specify the procedures and requirements for applying for a mining lease. They outline documentation, environmental impact assessment, and public consultation processes. Compliance with these regulations is essential for obtaining mining permits.'),
('Mining Safety Inspection Regulations', 'Mining Safety Inspection Regulations focus on regular safety inspections at mining sites. They cover equipment checks, ventilation systems, and emergency response protocols. Adherence to these regulations ensures a safe working environment for miners and prevents accidents.'),
('Royalty Calculation Regulations', 'Royalty Calculation Regulations outline the methods for calculating mineral royalties payable to the government. They specify royalty rates based on the type and quantity of minerals extracted. Accurate royalty calculations are crucial for legal and financial compliance.'),
('Environmental Impact Assessment Regulations', 'These regulations detail the requirements for conducting environmental impact assessments (EIA) for mining projects. They specify the scope of EIA studies, public consultation procedures, and mitigation measures. Compliance with these regulations is mandatory to obtain environmental clearance.'),
('Mineral Export Documentation Regulations', 'Mineral Export Documentation Regulations outline the paperwork required for exporting minerals. They include licenses, certificates of origin, and shipping documentation. Compliance with these regulations is essential to facilitate legal mineral exports and prevent smuggling.');

INSERT INTO Rules (title, content) VALUES 
('Mining Site Safety Rules', 'Mining Site Safety Rules focus on on-site safety protocols. They cover personal protective equipment (PPE) usage, safety signage, and accident reporting procedures. Strict adherence to these rules prevents injuries and ensures the well-being of mining personnel.'),
('Mineral Transport Rules', 'Mineral Transport Rules specify the guidelines for transporting minerals from mining sites to processing units or export hubs. They cover transportation modes, loading and unloading procedures, and security measures. Compliance with these rules prevents theft and unauthorized mineral trading.'),
('Reclamation and Rehabilitation Rules', 'Reclamation and Rehabilitation Rules outline the process of restoring mined areas after extraction. They include land reforestation, soil stabilization, and water body restoration techniques. Compliance with these rules mitigates environmental damage and ensures sustainable land use.'),
('Mining Equipment Maintenance Rules', 'Mining Equipment Maintenance Rules provide schedules and procedures for maintaining mining machinery. Regular inspections, lubrication, and replacement protocols are outlined. Proper equipment maintenance extends lifespan and prevents unexpected breakdowns during operations.'),
('Mineral Export Inspection Rules', 'Mineral Export Inspection Rules specify inspection procedures for exported minerals. They cover quality checks, quantity verification, and packaging standards. Compliance with these rules ensures that exported minerals meet international quality standards and customer expectations.');

drop table Acts;
drop table Corrigenda;
drop table Guidelines;
drop table Methodology;
drop table Regulations;
drop table Rules;

CREATE TABLE mining_data (
    category VARCHAR(255),
    title VARCHAR(255),
    content TEXT
);

-- Insert statements for Acts category
INSERT INTO mining_data (category, title, content) VALUES
('Acts', 'Mining Act', 'The Mining Act governs mining operations in India. It covers various aspects of mining, including exploration, licensing, and environmental regulations. The Act is designed to ensure the sustainable and responsible extraction of minerals while safeguarding the environment and the rights of local communities.'),
('Acts', 'Minerals Development Act', 'The Minerals Development Act outlines the legal framework for mineral exploration, extraction, and trading. It defines the rights and obligations of mining companies and provides guidelines for environmental protection and community engagement.'),
('Acts', 'Mining Safety and Health Act', 'The Mining Safety and Health Act focuses on ensuring the safety and well-being of mining workers. It establishes standards for workplace safety, equipment usage, and emergency response. Compliance with this act is mandatory to prevent accidents and protect miners.'),
('Acts', 'Minerals Export Control Act', 'The Minerals Export Control Act regulates the exportation of minerals from the country. It specifies licensing requirements, export quotas, and quality standards. This act aims to manage the country\'s mineral resources and prevent illegal exports.'),
('Acts', 'Mining Revenue Act', 'The Mining Revenue Act governs the taxation and revenue generation from mining activities. It outlines the royalty rates, tax deductions, and reporting requirements for mining companies. Adherence to this act is crucial for the financial sustainability of mining projects.');

-- Insert statements for Rules category
INSERT INTO mining_data (category, title, content) VALUES
('Rules', 'Mining Site Safety Rules', 'Mining Site Safety Rules focus on on-site safety protocols. They cover personal protective equipment (PPE) usage, safety signage, and accident reporting procedures. Strict adherence to these rules prevents injuries and ensures the well-being of mining personnel.'),
('Rules', 'Mineral Transport Rules', 'Mineral Transport Rules specify the guidelines for transporting minerals from mining sites to processing units or export hubs. They cover transportation modes, loading and unloading procedures, and security measures. Compliance with these rules prevents theft and unauthorized mineral trading.'),
('Rules', 'Reclamation and Rehabilitation Rules', 'Reclamation and Rehabilitation Rules outline the process of restoring mined areas after extraction. They include land reforestation, soil stabilization, and water body restoration techniques. Compliance with these rules mitigates environmental damage and ensures sustainable land use.'),
('Rules', 'Mining Equipment Maintenance Rules', 'Mining Equipment Maintenance Rules provide schedules and procedures for maintaining mining machinery. Regular inspections, lubrication, and replacement protocols are outlined. Proper equipment maintenance extends lifespan and prevents unexpected breakdowns during operations.'),
('Rules', 'Mineral Export Inspection Rules', 'Mineral Export Inspection Rules specify inspection procedures for exported minerals. They cover quality checks, quantity verification, and packaging standards. Compliance with these rules ensures that exported minerals meet international quality standards and customer expectations.');

-- Insert statements for Guidelines category
INSERT INTO mining_data (category, title, content) VALUES
('Guidelines', 'Sustainable Mining Guidelines', 'These guidelines promote sustainable mining practices, emphasizing environmental conservation and community welfare. They provide recommendations for eco-friendly mining methods, reforestation initiatives, and community development projects.'),
('Guidelines', 'Ethical Mining Guidelines', 'Ethical Mining Guidelines focus on fair trade practices and ethical sourcing of minerals. They address issues such as child labor, conflict minerals, and human rights violations. Adhering to these guidelines ensures responsible sourcing for industries.'),
('Guidelines', 'Community Engagement Guidelines', 'Community Engagement Guidelines outline strategies for involving local communities in mining projects. They emphasize open communication, consultation, and fair compensation for land usage. These guidelines foster positive relationships between mining companies and affected communities.'),
('Guidelines', 'Mining Equipment Safety Guidelines', 'These guidelines provide specifications for safe mining equipment design and usage. They cover topics such as equipment maintenance, operator training, and safety inspections. Compliance with these guidelines prevents accidents and equipment failures.'),
('Guidelines', 'Biodiversity Conservation Guidelines', 'Biodiversity Conservation Guidelines focus on preserving local flora and fauna during mining activities. They mandate habitat assessments, conservation plans, and restoration efforts. Following these guidelines minimizes the ecological impact of mining projects.');

-- Insert statements for Corrigenda category
INSERT INTO mining_data (category, title, content) VALUES
('Corrigenda', 'Corrigendum 1', 'This corrigendum provides corrections to inaccuracies in the previous mining regulations. It includes updated legal references and clarifications to ensure accurate interpretation and implementation of the regulations.'),
('Corrigenda', 'Corrigendum 2', 'This corrigendum addresses typographical errors in the mining guidelines. It rectifies spelling mistakes and ensures consistency in terminology, making the guidelines more user-friendly for mining professionals.'),
('Corrigenda', 'Corrigendum 3', 'This corrigendum updates the contact information of regulatory authorities mentioned in the mining regulations. It provides the correct addresses and phone numbers for miners to reach out for inquiries and compliance-related matters.'),
('Corrigenda', 'Corrigendum 4', 'This corrigendum introduces new safety protocols in the mining rules. It includes amendments related to the usage of personal protective equipment (PPE) and safety gear, enhancing the overall safety standards for mining operations.'),
('Corrigenda', 'Corrigendum 5', 'This corrigendum revises the environmental impact assessment procedures outlined in the regulations. It includes additional requirements for comprehensive environmental studies and biodiversity assessments before initiating mining projects.');

-- Insert statements for Methodology category
INSERT INTO mining_data (category, title, content) VALUES
('Methodology', 'Surface Mining Methodology', 'Surface Mining Methodology involves extracting minerals from the earth\'s surface. It includes techniques such as open-pit mining, quarrying, and placer mining. This methodology is suitable for shallow mineral deposits and large-scale operations.'),
('Methodology', 'Underground Mining Methodology', 'Underground Mining Methodology is used for deep-seated mineral deposits. It includes methods like shaft mining, drift mining, and room and pillar mining. Safety measures and efficient ore extraction techniques are integral to this methodology.'),
('Methodology', 'Placer Mining Methodology', 'Placer Mining Methodology focuses on extracting minerals from riverbeds and other sedimentary deposits. It utilizes water currents to separate valuable minerals from sand and gravel. This methodology is environmentally friendly and often used for gold and precious metal mining.'),
('Methodology', 'Blasting and Drilling Techniques', 'Blasting and Drilling Techniques are essential for breaking hard rocks and accessing mineral deposits. Modern techniques involve computer-controlled drilling and precision explosives. Proper drilling and blasting minimize environmental impact and improve mining efficiency.'),
('Methodology', 'Ore Processing Methodology', 'Ore Processing Methodology involves refining extracted ores into usable products. It includes crushing, grinding, smelting, and refining processes. This methodology ensures the extraction of pure minerals for industrial applications.');

-- Insert statements for Regulations category
INSERT INTO mining_data (category, title, content) VALUES
('Regulations', 'Mining Lease Application Regulations', 'These regulations specify the procedures and requirements for applying for a mining lease. They outline documentation, environmental impact assessment, and public consultation processes. Compliance with these regulations is essential for obtaining mining permits.'),
('Regulations', 'Mining Safety Inspection Regulations', 'Mining Safety Inspection Regulations focus on regular safety inspections at mining sites. They cover equipment checks, ventilation systems, and emergency response protocols. Adherence to these regulations ensures a safe working environment for miners and prevents accidents.'),
('Regulations', 'Royalty Calculation Regulations', 'Royalty Calculation Regulations outline the methods for calculating mineral royalties payable to the government. They specify royalty rates based on the type and quantity of minerals extracted. Accurate royalty calculations are crucial for legal and financial compliance.'),
('Regulations', 'Environmental Impact Assessment Regulations', 'These regulations detail the requirements for conducting environmental impact assessments (EIA) for mining projects. They specify the scope of EIA studies, public consultation procedures, and mitigation measures. Compliance with these regulations is mandatory to obtain environmental clearance.'),
('Regulations', 'Mineral Export Documentation Regulations', 'Mineral Export Documentation Regulations outline the paperwork required for exporting minerals. They include licenses, certificates of origin, and shipping documentation. Compliance with these regulations is essential to facilitate legal mineral exports and prevent smuggling.');

drop table mining_data;
select * from mining_data;
ALTER TABLE mining_data CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
