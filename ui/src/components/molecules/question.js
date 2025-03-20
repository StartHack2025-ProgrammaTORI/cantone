import CardComponent from "../atomics/card";
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

export const QuestionComponent = ({question, options, status, handleClick, indexAnswer, setIndexAnswer}) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <CardComponent
                title={question}
                content={
                    <FormControl>
                        <RadioGroup
                            onChange={(event) => {
                                const selectedValue = event.target.value;
                                const selectedIndex = options.indexOf(selectedValue);
                                setIndexAnswer(selectedIndex);
                            }}
                        >
                            {options.map((option, index) => (
                                <FormControlLabel
                                    key={option}
                                    value={option}
                                    control={<Radio checked={index === indexAnswer} />}
                                    label={option}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                }
                status={status}
                handleClick={handleClick}
            />
        </div>
    );
};