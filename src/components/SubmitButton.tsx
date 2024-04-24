import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
    name: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ name }) => {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" className="bg-cerulean-blue-700 text-2xl" variant="shadow" isLoading={pending}>
            {name}
        </Button>
    );
};
