// Importing necessary dependencies from React and Material-UI
import * as React from 'react';
import { useState, useEffect, Suspense } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import data from './stepsData.json'; // Importing step data from a JSON file

// Lazy loading components
const ConfirmBookingComponent = React.lazy(() => import('./components/confirmbooking.js'));
const InvoiceComponent = React.lazy(() => import('./components/invoice.js'));
const CompleteComponent = React.lazy(() => import('./components/complete.js'));

function App() {
    const [activeStep, setActiveStep] = useState(0); // State for tracking active step
    const [completed, setCompleted] = useState({}); // State for tracking completed steps

    const steps = data.map(step => step.type); // Extracting step labels from the data

    useEffect(() => {
        // Initializing completed steps based on data
        const initialCompleted = {};
        data.forEach((step, index) => {
            initialCompleted[index] = step.state === "completed";
        });
        setCompleted(initialCompleted);
    }, []);

    const totalSteps = () => {
        return steps.length; // Calculating total steps
    };

    const completedSteps = () => {
        return Object.values(completed).filter(value => value).length; // Calculating completed steps
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1; // Checking if the current step is the last one
    };

    const handleNext = () => {
        // Handling next step logic
        const newActiveStep =
            isLastStep() && completedSteps() !== totalSteps()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1); // Handling previous step logic
    };

    const handleStep = (step) => () => {
        setActiveStep(step); // Handling step click logic
    };

    const handleComplete = () => {
        // Handling completion of a step
        const newCompleted = { ...completed };
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        // Handling reset button click
        setActiveStep(0);
        setCompleted({});
    };

    return (
        // Rendering the main UI structure
        <div class="bg-white shadow-md rounded pt-6 pb-8 mb-4 border-2" style={{ marginLeft: '100px', marginRight: '100px', marginTop: '20px' }}>
            <Box sx={{ width: '70%', margin: '0 auto', textAlign: 'left' }}>
                <div>
                    <Typography variant="h5" gutterBottom>
                        Process move-in
                    </Typography>
                </div>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'auto auto 1fr', gap: '1rem', marginY: '0' }}>
                    <Stepper nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => (
                            // Rendering each step in the Stepper component
                            <Step key={label} completed={completed[index]}>
                                <StepButton color="inherit" onClick={handleStep(index)} sx={{ '&.MuiStepButton-root': { width: '100%' } }}>
                                    <div className={`step${activeStep === index ? ' active' : ''}`} sx={{ position: 'relative' }}>
                                        {label}
                                    </div>
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {/* Lazy loading components based on active step */}
                        {activeStep === 0 && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <ConfirmBookingComponent />
                            </Suspense>
                        )}
                        {activeStep === 1 && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <InvoiceComponent />
                            </Suspense>
                        )}
                        {activeStep === 2 && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <CompleteComponent />
                            </Suspense>
                        )}
                    </div>
                    <div>
                        {/* Rendering navigation buttons */}
                        {completedSteps() === totalSteps() ? (
                            <React.Fragment>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button
                                        onClick={handleReset}
                                        sx={{ mr: 1, backgroundColor: '#007bff', color: 'white', '&:hover': { backgroundColor: '#0056b3' }, fontSize: '12px', fontWeight: 'semibold' }}
                                    >Reset</Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1, backgroundColor: '#007bff', color: 'white', '&:hover': { backgroundColor: '#0056b3' }, fontSize: '12px', fontWeight: 'semibold' }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button
                                        onClick={handleComplete}
                                        disabled={completedSteps() === totalSteps()} // Disable when all steps are completed
                                        sx={{ mr: 1, backgroundColor: '#007bff', color: 'white', '&:hover': { backgroundColor: '#0056b3' }, fontSize: '12px', fontWeight: 'semibold' }}
                                    >
                                        {completedSteps() === totalSteps() ? 'Finish' : 'Continue'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </div>
                </Box>
            </Box>
        </div>
    );
}

export default App;
