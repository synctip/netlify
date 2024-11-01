import { colors } from "@/styles/colors";

type GoogleFontSvgComponent = React.FC<React.PropsWithChildren<{
    text?: string;
    value?: string | number;
}>>;

const GoogleFontSvg: GoogleFontSvgComponent = ({ children, text, value }) => {
    if (!text) return children;

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'center',
                background: colors.text.primary.dark,
                color: colors.primary.light,
                padding: '8px 0'
            }}
        >
            {
                text &&
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <h3
                        style={{
                            margin: 0,
                            padding: 0,
                            fontWeight: 'normal'
                        }}
                    >{text}</h3>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 5,
                            justifyContent: 'center',
                            fontSize: 24,
                            color: colors.primary.main,
                            fontWeight: 100
                        }}
                    >
                        {children}
                        {
                            value &&
                            <h4
                                style={{
                                    margin: 0,
                                    color: colors.secondary.main,
                                    fontSize: 18
                                }}
                            >
                                {value}
                            </h4>
                        }
                    </div>
                </div>
            }
        </div>
    )
};

export default GoogleFontSvg;