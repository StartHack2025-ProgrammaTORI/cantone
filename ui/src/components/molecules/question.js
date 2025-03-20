import CardComponent from "../atomics/card";
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

function QuestionComponent({question, options, status, handleClick, indexAnswer, setIndexAnswer, textStyle}) {
    return (
        <div style={{ textAlign: 'center' }}>
            <CardComponent
                textStyle={textStyle}
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

export default QuestionComponent