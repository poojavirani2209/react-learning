import Button from "./Button";

export default function PerformOperations() {
    return (
        /**Sending event as props. Inner component does not know the behavior but just knows It has to execute this. */
        <Button handleClick={() => { alert(new Date()) }}>Show todays Date</Button>
    );

}