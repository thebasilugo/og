"use client";

import { useState } from "react";

interface Mentee {
	name: string;
	project: string;
	year: string;
	qualification: string;
}

const mentees: Mentee[] = [
	{
		name: "Fowora Oluwatobi Ayokunle",
		project:
			"An Improved Mobile Network Bandwidth Model Using Wi-Fi Offloading Technique",
		year: "2021/2022",
		qualification: "Masters",
	},
	{
		name: "Anakhu Naomi Itseoghena",
		project:
			"Development of Machine Learning-Based Predictive Farm Land Optimization and Crop Monitoring System",
		year: "2018/2019",
		qualification: "Bachelors",
	},
	{
		name: "Olaniyan Lonimi",
		project: "Development of a Hand Gesture Recognition-Based CAPTCHA",
		year: "2018/2019",
		qualification: "Bachelors",
	},
	{
		name: "Uba Kaneto Kingson",
		project:
			"Development of a Web Portal to Process Requests of Infrastructure Repair and Maintenance in Students’ Hostel",
		year: "2018/2019",
		qualification: "Bachelors",
	},
	{
		name: "Segun-Owolabi Tobe",
		project:
			"Design And Implementation of An Automated Web Application Security Testing System",
		year: "2019/2020",
		qualification: "Bachelors",
	},
	{
		name: "Adeniyi Praise Ayomide",
		project: "Implementation of RSA algorithm to enhance security in QR codes",
		year: "2019/2020",
		qualification: "Bachelors",
	},
	{
		name: "Umoru Dennison",
		project:
			"Development of a Cardiovascular Prediction System Using CNN And Logistic Regression Algorithms",
		year: "2019/2020",
		qualification: "Bachelors",
	},
	{
		name: "Seriki Emmanuel",
		project:
			"Development Of a Mobile Application for The Formulation of Local Poultry Feeds Using Pearson Square and Adaptive Genetic Algorithm",
		year: "2019/2020",
		qualification: "Bachelors",
	},
	{
		name: "Adeyemi David Ademola",
		project:
			"Development Of a Predictive Model for Brain Tumor Using Lasso Regression and Deep Learning Algorithms",
		year: "2020/2021",
		qualification: "Bachelors",
	},
	{
		name: "Udotai Joshua",
		project:
			"Classification of Gene Expression Dataset Using Modified Greywolf Optimizer and Deep Learning Algorithms",
		year: "2020/2021",
		qualification: "Bachelors",
	},
	{
		name: "Ibrahim Jennifer Jummai",
		project:
			"Development of a Diagnostic System for COVID-19 Disease using Modified Grey Wolf Optimizer and Classifiers",
		year: "2020/2021",
		qualification: "Bachelors",
	},
	{
		name: "Iyke-Ikiriko El-Nathan",
		project:
			"Development of a Diagnostic and Management System for Diabetes Retinopathy using Deep Learning Algorithms",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Oyeniyi Favour Jesusemilogo",
		project:
			"Implementation of Two-Phase AES for the Encryption of Information in QR CODE",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Onawola Paul Ire-Oluwa",
		project:
			"Development of a Diabetic Retinopathy Detection System using Deep Learning-Based Ensemble Learning Approach",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Douglas Mychal",
		project:
			"Development of an IoT-based Approach for Breast Cancer Diagnosis using Machine Learning Algorithms.",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Iwuoha Chimereze Tamunomiebaka",
		project: "Credit Card Fraud Detection Using Deep Learning Algorithms",
		year: "2020/2021",
		qualification: "Bachelors",
	},
	{
		name: "Onah Stephen Obumneme",
		project:
			"Diagnosis Of Acute Myeloid Leukemia (AML) Dataset Using Ant Colony Optimizer and Deep Learning Algorithms",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Aboyeji Monijesu Victor",
		project:
			"Development of a Sitting Posture Detection System using Deep Learning Algorithms",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Afolayan Oluwanifemi Isaac",
		project:
			"Development of a Mobile-based Fake News Detection System using Deep Learning Algorithms",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Oyeniji David",
		project:
			"Development of a DeepFake Detection System using Viola-Jones Algorithm",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Ibok Eloisa Emmanuella",
		project:
			"Development of a Real Estate Price Prediction System using Deep Learning Algorithms",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Chujor Dobo-Obari",
		project:
			"Development of a CNN-Based Expert System for Diagnosis of COVID-19",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Akande Samuel",
		project:
			"Development of an Efficient Deep Learning-Based Phishing Detection System",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Idumufinide Tamara-Bode",
		project:
			"Development of Mobile-based Customer Churn Prediction System using Deep Learning Algorithms",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Jigah Miracle",
		project:
			"Development of a Web-based Expert System for Diagnosing Diabetes Retinopathy using Deep Learning Algorithms",
		year: "2021/2022",
		qualification: "Bachelors",
	},
	{
		name: "Abiodun Olarewaju",
		project: "Development of Phishing URL Detection System using DNN-LSTM",
		year: "2022/2023",
		qualification: "Bachelors",
	},
	{
		name: "Akintewe Oluwasola Jonathan",
		project:
			"Development of a Deep Learning Model Based on a Concatenation Approach for the Detection of Tomato leaf Disease Detection",
		year: "2022/2023",
		qualification: "Bachelors",
	},
	{
		name: "Basil-Kamanu Ugochukwu",
		project:
			"Development of a Cyber Attack Detection System using a Hybrid CNN-MLP model",
		year: "2022/2023",
		qualification: "Bachelors",
	},
	{
		name: "Ashaolu David",
		project:
			"Development of a Diagnostic System for Infants with ASD using Pre-Trained Models",
		year: "2022/2023",
		qualification: "Bachelors",
	},
	{
		name: "Jacobs David",
		project:
			"Development of a Fall Detection System using Deep Learning Algorithms",
		year: "2022/2023",
		qualification: "Bachelors",
	},
	{
		name: "Abuh Solomon Onu",
		project:
			"Development of a Mobile-based Covid-19 Detection System using Lung/Chest Ultra-Sound Images",
		year: "2022/2023",
		qualification: "Bachelors",
	},
	{
		name: "Emereonyeokwe Godson",
		project:
			"Development of a Credit Card Fraud Detection System using Deep Learning on an E-commerce Website",
		year: "2022/2023",
		qualification: "Bachelors",
	},
	{
		name: "Olukaejor Godstime Nwolu",
		project:
			"Development of a Driver Drowsiness Detection System using Pre-Trained VGG-16 and EfficientNet",
		year: "2022/2023",
		qualification: "Bachelors",
	},
	{
		name: "Shodunke Joseph",
		project:
			"Development of a Deep Learning Based Model for Breast Cancer Detection Using Mammography Images",
		year: "2022/2023",
		qualification: "Bachelors",
	},
	{
		name: "Majekodunmi David",
		project:
			"Development of an Animal Disease Detection System using Pre-Trained Algorithms",
		year: "2022/2023",
		qualification: "Bachelors",
	},
	{
		name: "Akande Oladipupo David",
		project:
			"Development of an Intrusion Detection Model using Ensemble Machine Learning Algorithms",
		year: "2022/2023",
		qualification: "Bachelors",
	},
	{
		name: "Kennedy-Ukaga Prince Chukwuemeka",
		project:
			"Development of a Predictive Cryptocurrency Price System using Hybridize CNN and LSTM Model",
		year: "2022/2023",
		qualification: "Bachelors",
	},
];

export default function MenteeCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextMentee = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % mentees.length);
	};

	const prevMentee = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + mentees.length) % mentees.length
		);
	};

	const currentMentee = mentees[currentIndex];

	return (
		<section className="py-16 bg-gray-100">
			<div className="container min-h-max mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center">Mentees</h2>
				<p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
					The following individuals have been directly mentored by Dr. Roseline
					Ogundokun.
				</p>
				<div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
					<h3 className="text-xl font-semibold mb-4 text-center">
						{currentMentee.name}
					</h3>
					<div className="space-y-2 mb-6">
						<p>
							<strong className="text-blue-700">Project:</strong>{" "}
							{currentMentee.project}
						</p>
						<p>
							<strong className="text-blue-700">Year:</strong>{" "}
							{currentMentee.year}
						</p>
						<p>
							<strong className="text-blue-700">Qualification:</strong>{" "}
							{currentMentee.qualification}
						</p>
					</div>
					<div className="flex justify-between">
						<button
							onClick={prevMentee}
							className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
						>
							Previous
						</button>
						<button
							onClick={nextMentee}
							className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
