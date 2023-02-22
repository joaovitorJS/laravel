import React, {
    FunctionComponent,
    InputHTMLAttributes,
    LabelHTMLAttributes,
    ReactNode, TextareaHTMLAttributes
} from "react";
import clsx from "clsx";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    children: string;
}

interface RootProps {
    label?: string;
    children: ReactNode;
}

type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

type InputFileProps = InputHTMLAttributes<HTMLInputElement> & {
    type: "file";
};

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

type InputSubComponents = {
    Label?: FunctionComponent<LabelProps>;
    Root: FunctionComponent<RootProps>;
    Text: FunctionComponent<InputTextProps>;
    File: FunctionComponent<InputFileProps>;
    TextArea: FunctionComponent<TextAreaProps>;
}

const Input: InputSubComponents = {} as InputSubComponents;

const getChildrenOnDisplayName = (children, displayName) =>
    React.Children.map(children, (child) =>
        child.type.displayName === displayName ? child : null
    );

function Label({children, className,...props}: LabelProps) {
   return (
       <label {...props} className={clsx("font-heebo text-textColor text-sm", className)}>
           {children}
       </label>
   );
}

Label.displayName = "Label";
Input.Label = Label;

function Root(props: RootProps) {
    const label = getChildrenOnDisplayName(props.children, 'Label');
    const inputText = getChildrenOnDisplayName(props.children, 'Text');
    const inputFile = getChildrenOnDisplayName(props.children, 'File');
    const textarea =  getChildrenOnDisplayName(props.children, 'TextArea')

    return (
        <div className="mt-6 flex flex-col space-y-[10px]">
            {label}
            {inputText}
            {inputFile}
            {textarea}
        </div>
    );
}

Root.displayName = "InputRoot";
Input.Root = Root;

function Text({className, type = "text",...props}: InputTextProps) {
    return (
        <input
            type={type}
            className={clsx("bg-background border border-shapes rounded-[10px] h-14", className)}
            {...props}
        />
    );
}

Text.displayName = "Text";
Input.Text = Text;

function File({className, type="file", title="Escolha uma foto", ...props}: InputFileProps) {
    return (
        <div className="border-2 border-dashed border-shapes h-40 rounded-2xl bg-background relative transition-all hover:opacity-[0.8]">
            <input
                type={type}
                className={clsx("opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer z-10", className)}
                accept="image/*"
                multiple={false}
                title={title}
                {...props}
            />
            <span className="font-heebo text-base text-orange absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">+ Adicionar uma foto</span>
        </div>
    );
}

File.displayName = "File";
Input.File = File;

function TextArea({className, maxLength=320, ...props}) {
    return (
        <div className="relative w-full h-52">
            <textarea
                className={clsx("bg-background border border-shapes rounded-[10px] resize-none w-full h-full", className)}
                maxLength={maxLength}
                {...props}
            >

            </textarea>
            <span className="font-heebo text-textComplement text-xs absolute bottom-2 right-4">Máximo {maxLength} caracteres</span>
        </div>
    );
}

TextArea.displayName = "TextArea";
Input.TextArea = TextArea;

export {Input};

