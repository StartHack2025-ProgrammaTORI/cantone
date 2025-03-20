import CardComponent from "../atomics/card";
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

const question = {
    question: 'What is the capital of France?',
    options: ['New York', 'London', 'Paris', 'Dublin'],
    answer: 'Paris'
};

export const QuestionComponent = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <CardComponent
                title={question.question}
                content={
                    <FormControl>
                        <RadioGroup>
                            {question.options.map((option) => (
                                <FormControlLabel
                                    key={option}
                                    value={option}
                                    control={<Radio />}
                                    label={option}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                }
            />
        </div>
    );
};