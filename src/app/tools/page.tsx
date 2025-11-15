'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';

const ToolsPage: FC = () => {
    const [bmiData, setBmiData] = useState({ weight: '', height: '', result: null as number | null, category: '' });
    const [activeTab, setActiveTab] = useState<'bmi' | 'workout' | 'diet'>('bmi');
    
    // Workout AI State
    const [workoutInputs, setWorkoutInputs] = useState({
        goal: '',
        experience: '',
        daysPerWeek: '',
        equipment: ''
    });
    const [workoutPlan, setWorkoutPlan] = useState('');
    const [workoutLoading, setWorkoutLoading] = useState(false);
    
    // Diet AI State
    const [dietInputs, setDietInputs] = useState({
        goal: '',
        weight: '',
        height: '',
        age: '',
        gender: '',
        activityLevel: ''
    });
    const [dietPlan, setDietPlan] = useState('');
    const [dietLoading, setDietLoading] = useState(false);

    const calculateBMI = () => {
        const weight = parseFloat(bmiData.weight);
        const height = parseFloat(bmiData.height) / 100; // convert cm to m
        
        if (weight > 0 && height > 0) {
            const bmi = weight / (height * height);
            let category = '';
            
            if (bmi < 18.5) category = 'Underweight';
            else if (bmi < 25) category = 'Normal weight';
            else if (bmi < 30) category = 'Overweight';
            else category = 'Obese';
            
            setBmiData({ ...bmiData, result: parseFloat(bmi.toFixed(1)), category });
        }
    };

    const generateWorkoutPlan = () => {
        setWorkoutLoading(true);
        
        // Simulate AI generation
        setTimeout(() => {
            const plans: Record<string, string> = {
                'muscle-gain': `**MUSCLE BUILDING PROGRAM - ${workoutInputs.daysPerWeek} Days/Week**

**Day 1: Chest & Triceps**
- Bench Press: 4 sets x 8-10 reps
- Incline Dumbbell Press: 3 sets x 10-12 reps
- Cable Flyes: 3 sets x 12-15 reps
- Tricep Dips: 3 sets x 10-12 reps
- Overhead Tricep Extension: 3 sets x 12-15 reps

**Day 2: Back & Biceps**
- Deadlifts: 4 sets x 6-8 reps
- Pull-ups: 3 sets x 8-10 reps
- Barbell Rows: 3 sets x 10-12 reps
- Barbell Curls: 3 sets x 10-12 reps
- Hammer Curls: 3 sets x 12-15 reps

**Day 3: Legs & Shoulders**
- Squats: 4 sets x 8-10 reps
- Romanian Deadlifts: 3 sets x 10-12 reps
- Leg Press: 3 sets x 12-15 reps
- Overhead Press: 4 sets x 8-10 reps
- Lateral Raises: 3 sets x 12-15 reps

💪 Rest 48-72 hours between muscle groups
🔥 Progressive overload is key - increase weight weekly`,
                
                'fat-loss': `**FAT LOSS PROGRAM - ${workoutInputs.daysPerWeek} Days/Week**

**Day 1: Full Body Circuit**
- Burpees: 3 sets x 15 reps
- Goblet Squats: 3 sets x 15 reps
- Push-ups: 3 sets x 15 reps
- Mountain Climbers: 3 sets x 30 seconds
- Plank: 3 sets x 60 seconds

**Day 2: HIIT Cardio**
- 30 seconds sprint / 30 seconds rest x 20 rounds
- Jump Rope: 5 sets x 2 minutes
- Box Jumps: 4 sets x 12 reps

**Day 3: Strength & Cardio Mix**
- Deadlifts: 4 sets x 12 reps
- Rowing Machine: 15 minutes steady state
- Kettlebell Swings: 4 sets x 20 reps
- Battle Ropes: 4 sets x 30 seconds

🔥 Keep heart rate elevated throughout
💧 Stay hydrated and maintain calorie deficit`,
                
                'strength': `**STRENGTH TRAINING PROGRAM - ${workoutInputs.daysPerWeek} Days/Week**

**Day 1: Lower Body Power**
- Back Squats: 5 sets x 5 reps (heavy)
- Front Squats: 3 sets x 6 reps
- Bulgarian Split Squats: 3 sets x 8 reps per leg
- Calf Raises: 4 sets x 15 reps

**Day 2: Upper Body Power**
- Bench Press: 5 sets x 5 reps (heavy)
- Overhead Press: 4 sets x 6 reps
- Weighted Pull-ups: 4 sets x 6 reps
- Face Pulls: 3 sets x 15 reps

**Day 3: Deadlift Day**
- Conventional Deadlifts: 5 sets x 5 reps (heavy)
- Deficit Deadlifts: 3 sets x 6 reps
- Good Mornings: 3 sets x 10 reps
- Core Circuit: 3 rounds

⚡ Focus on compound movements
📈 Track all lifts and aim for weekly PRs`
            };
            
            setWorkoutPlan(plans[workoutInputs.goal] || plans['muscle-gain']);
            setWorkoutLoading(false);
        }, 1500);
    };

    const generateDietPlan = () => {
        setDietLoading(true);
        
        // Simulate AI generation
        setTimeout(() => {
            const weight = parseFloat(dietInputs.weight);
            const height = parseFloat(dietInputs.height);
            const age = parseFloat(dietInputs.age);
            
            // Calculate BMR (Mifflin-St Jeor)
            let bmr = 0;
            if (dietInputs.gender === 'male') {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }
            
            // Activity multiplier
            const multipliers: Record<string, number> = {
                'sedentary': 1.2,
                'light': 1.375,
                'moderate': 1.55,
                'active': 1.725,
                'very-active': 1.9
            };
            
            const tdee = Math.round(bmr * (multipliers[dietInputs.activityLevel] || 1.5));
            const goalCalories = dietInputs.goal === 'lose' ? tdee - 500 : 
                                dietInputs.goal === 'gain' ? tdee + 500 : tdee;
            
            const protein = Math.round(weight * 2.2); // 2.2g per kg
            const fat = Math.round(weight * 1); // 1g per kg
            const carbs = Math.round((goalCalories - (protein * 4) - (fat * 9)) / 4);
            
            const plan = `**PERSONALIZED NUTRITION PLAN**

**Daily Calorie Target:** ${goalCalories} kcal
**Goal:** ${dietInputs.goal === 'lose' ? 'Fat Loss' : dietInputs.goal === 'gain' ? 'Muscle Gain' : 'Maintenance'}

**Macronutrient Breakdown:**
- Protein: ${protein}g (${Math.round((protein * 4 / goalCalories) * 100)}%)
- Carbs: ${carbs}g (${Math.round((carbs * 4 / goalCalories) * 100)}%)
- Fats: ${fat}g (${Math.round((fat * 9 / goalCalories) * 100)}%)

**Sample Meal Plan:**

🍳 **Breakfast (${Math.round(goalCalories * 0.25)} kcal)**
- 4 whole eggs scrambled
- 2 slices whole grain toast
- 1 cup mixed berries
- Black coffee

🥗 **Lunch (${Math.round(goalCalories * 0.35)} kcal)**
- 200g grilled chicken breast
- 2 cups brown rice
- Large mixed salad with olive oil
- 1 apple

🍗 **Dinner (${Math.round(goalCalories * 0.30)} kcal)**
- 200g lean beef or salmon
- Sweet potato (medium)
- Steamed broccoli and green beans
- Side salad

🥤 **Snacks (${Math.round(goalCalories * 0.10)} kcal)**
- Greek yogurt with almonds
- Protein shake
- Rice cakes with peanut butter

💊 **Supplement Recommendations:**
- Whey Protein: 1-2 scoops daily
- Creatine: 5g daily
- Multivitamin: 1 daily
- Fish Oil: 2-3g daily

💧 Water: Minimum ${Math.round(weight * 0.033)}L per day
📊 Track your intake and adjust as needed`;
            
            setDietPlan(plan);
            setDietLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-jet-black pt-24">
            {/* Hero Section */}
            <section className="bg-jet-black text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">Performance <span className="text-accent">Tools</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Advanced calculators and AI-powered planning to optimize your training and nutrition</p>
                </div>
            </section>

            {/* Tools Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Tab Navigation */}
                    <div className="flex justify-center gap-4 mb-12 flex-wrap">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab('bmi')}
                            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                                activeTab === 'bmi' 
                                    ? 'bg-accent text-white shadow-lg shadow-accent/50' 
                                    : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]'
                            }`}
                        >
                            📊 BMI Calculator
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab('workout')}
                            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                                activeTab === 'workout' 
                                    ? 'bg-accent text-white shadow-lg shadow-accent/50' 
                                    : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]'
                            }`}
                        >
                            💪 AI Workout Planner
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab('diet')}
                            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                                activeTab === 'diet' 
                                    ? 'bg-accent text-white shadow-lg shadow-accent/50' 
                                    : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]'
                            }`}
                        >
                            🥗 AI Diet Planner
                        </motion.button>
                    </div>

                    {/* BMI Calculator */}
                    {activeTab === 'bmi' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl shadow-2xl border border-[#2a2a2a]">
                                <h2 className="text-3xl font-black text-white mb-8">BMI Calculator</h2>
                                
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Weight (kg)</label>
                                        <input
                                            type="number"
                                            value={bmiData.weight}
                                            onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value })}
                                            className="w-full px-6 py-4 bg-[#0f0f0f] text-white rounded-xl border border-[#2a2a2a] focus:border-accent focus:outline-none transition-all"
                                            placeholder="e.g., 75"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Height (cm)</label>
                                        <input
                                            type="number"
                                            value={bmiData.height}
                                            onChange={(e) => setBmiData({ ...bmiData, height: e.target.value })}
                                            className="w-full px-6 py-4 bg-[#0f0f0f] text-white rounded-xl border border-[#2a2a2a] focus:border-accent focus:outline-none transition-all"
                                            placeholder="e.g., 175"
                                        />
                                    </div>
                                    
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={calculateBMI}
                                        className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-red-600 transition-all shadow-lg"
                                    >
                                        Calculate BMI
                                    </motion.button>
                                    
                                    {bmiData.result && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="mt-8 p-6 bg-accent/10 border-2 border-accent rounded-2xl"
                                        >
                                            <div className="text-center">
                                                <div className="text-5xl font-black text-accent mb-2">{bmiData.result}</div>
                                                <div className="text-xl font-bold text-white mb-4">{bmiData.category}</div>
                                                <div className="text-gray-300 text-sm">
                                                    {bmiData.category === 'Normal weight' && '✓ Your BMI is in a healthy range!'}
                                                    {bmiData.category === 'Underweight' && '⚠️ Consider gaining some weight for optimal health'}
                                                    {bmiData.category === 'Overweight' && '⚠️ Consider a calorie deficit and regular exercise'}
                                                    {bmiData.category === 'Obese' && '⚠️ Consult with a healthcare professional for guidance'}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Workout AI Planner */}
                    {activeTab === 'workout' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl shadow-2xl border border-[#2a2a2a]">
                                <h2 className="text-3xl font-black text-white mb-2">AI Workout Planner</h2>
                                <p className="text-gray-400 mb-8">Get a personalized workout plan based on your goals and experience</p>
                                
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Primary Goal</label>
                                        <select
                                            value={workoutInputs.goal}
                                            onChange={(e) => setWorkoutInputs({ ...workoutInputs, goal: e.target.value })}
                                            className="w-full px-6 py-4 bg-[#0f0f0f] text-white rounded-xl border border-[#2a2a2a] focus:border-accent focus:outline-none transition-all"
                                        >
                                            <option value="">Select goal...</option>
                                            <option value="muscle-gain">Muscle Gain</option>
                                            <option value="fat-loss">Fat Loss</option>
                                            <option value="strength">Strength Training</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Experience Level</label>
                                        <select
                                            value={workoutInputs.experience}
                                            onChange={(e) => setWorkoutInputs({ ...workoutInputs, experience: e.target.value })}
                                            className="w-full px-6 py-4 bg-[#0f0f0f] text-white rounded-xl border border-[#2a2a2a] focus:border-accent focus:outline-none transition-all"
                                        >
                                            <option value="">Select level...</option>
                                            <option value="beginner">Beginner</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="advanced">Advanced</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Days Per Week</label>
                                        <select
                                            value={workoutInputs.daysPerWeek}
                                            onChange={(e) => setWorkoutInputs({ ...workoutInputs, daysPerWeek: e.target.value })}
                                            className="w-full px-6 py-4 bg-[#0f0f0f] text-white rounded-xl border border-[#2a2a2a] focus:border-accent focus:outline-none transition-all"
                                        >
                                            <option value="">Select days...</option>
                                            <option value="3">3 Days</option>
                                            <option value="4">4 Days</option>
                                            <option value="5">5 Days</option>
                                            <option value="6">6 Days</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Available Equipment</label>
                                        <select
                                            value={workoutInputs.equipment}
                                            onChange={(e) => setWorkoutInputs({ ...workoutInputs, equipment: e.target.value })}
                                            className="w-full px-6 py-4 bg-[#0f0f0f] text-white rounded-xl border border-[#2a2a2a] focus:border-accent focus:outline-none transition-all"
                                        >
                                            <option value="">Select equipment...</option>
                                            <option value="full-gym">Full Gym</option>
                                            <option value="home-gym">Home Gym</option>
                                            <option value="minimal">Minimal Equipment</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={generateWorkoutPlan}
                                    disabled={!workoutInputs.goal || !workoutInputs.experience || workoutLoading}
                                    className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-red-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {workoutLoading ? 'Generating Your Plan...' : '🤖 Generate Workout Plan'}
                                </motion.button>
                                
                                {workoutPlan && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-8 p-8 bg-[#0f0f0f] rounded-2xl border border-accent/20"
                                    >
                                        <div className="prose prose-invert max-w-none">
                                            <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                                                {workoutPlan}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Diet AI Planner */}
                    {activeTab === 'diet' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl shadow-2xl border border-[#2a2a2a]">
                                <h2 className="text-3xl font-black text-white mb-2">AI Diet Planner</h2>
                                <p className="text-gray-400 mb-8">Get a personalized nutrition plan tailored to your goals</p>
                                
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Goal</label>
                                        <select
                                            value={dietInputs.goal}
                                            onChange={(e) => setDietInputs({ ...dietInputs, goal: e.target.value })}
                                            className="w-full px-6 py-4 bg-[#0f0f0f] text-white rounded-xl border border-[#2a2a2a] focus:border-accent focus:outline-none transition-all"
                                        >
                                            <option value="">Select goal...</option>
                                            <option value="lose">Lose Weight</option>
                                            <option value="maintain">Maintain Weight</option>
                                            <option value="gain">Gain Muscle</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Gender</label>
                                        <select
                                            value={dietInputs.gender}
                                            onChange={(e) => setDietInputs({ ...dietInputs, gender: e.target.value })}
                                            className="w-full px-6 py-4 bg-[#0f0f0f] text-white rounded-xl border border-[#2a2a2a] focus:border-accent focus:outline-none transition-all"
                                        >
                                            <option value="">Select gender...</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Weight (kg)</label>
                                        <input
                                            type="number"
                                            value={dietInputs.weight}
                                            onChange={(e) => setDietInputs({ ...dietInputs, weight: e.target.value })}
                                            className="w-full px-6 py-4 bg-[#0f0f0f] text-white rounded-xl border border-[#2a2a2a] focus:border-accent focus:outline-none transition-all"
                                            placeholder="e.g., 75"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Height (cm)</label>
                                        <input
                                            type="number"
                                            value={dietInputs.height}
                                            onChange={(e) => setDietInputs({ ...dietInputs, height: e.target.value })}
                                            className="w-full px-6 py-4 bg-[#0f0f0f] text-white rounded-xl border border-[#2a2a2a] focus:border-accent focus:outline-none transition-all"
                                            placeholder="e.g., 175"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Age</label>
                                        <input
                                            type="number"
                                            value={dietInputs.age}
                                            onChange={(e) => setDietInputs({ ...dietInputs, age: e.target.value })}
                                            className="w-full px-6 py-4 bg-[#0f0f0f] text-white rounded-xl border border-[#2a2a2a] focus:border-accent focus:outline-none transition-all"
                                            placeholder="e.g., 25"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Activity Level</label>
                                        <select
                                            value={dietInputs.activityLevel}
                                            onChange={(e) => setDietInputs({ ...dietInputs, activityLevel: e.target.value })}
                                            className="w-full px-6 py-4 bg-[#0f0f0f] text-white rounded-xl border border-[#2a2a2a] focus:border-accent focus:outline-none transition-all"
                                        >
                                            <option value="">Select activity level...</option>
                                            <option value="sedentary">Sedentary (Little/no exercise)</option>
                                            <option value="light">Light (1-3 days/week)</option>
                                            <option value="moderate">Moderate (3-5 days/week)</option>
                                            <option value="active">Active (6-7 days/week)</option>
                                            <option value="very-active">Very Active (2x per day)</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={generateDietPlan}
                                    disabled={!dietInputs.goal || !dietInputs.weight || !dietInputs.height || dietLoading}
                                    className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-red-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {dietLoading ? 'Generating Your Plan...' : '🤖 Generate Diet Plan'}
                                </motion.button>
                                
                                {dietPlan && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-8 p-8 bg-[#0f0f0f] rounded-2xl border border-accent/20"
                                    >
                                        <div className="prose prose-invert max-w-none">
                                            <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                                                {dietPlan}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default ToolsPage;
