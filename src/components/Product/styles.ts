import styled, { css } from 'styled-components';

interface IFoodPlateProps {
    available: boolean;
}

export const Container = styled.div<IFoodPlateProps>`
    background: #f0f0f5;
    border-radius: 8px;
    justify-content: center;
    font-family: 'Roboto';
    width: 210px;
    height: 340px;
    display: flex;
    flex-direction: column;

    header {
        border-radius: 4px 4px 0px 0px;
        height: 152px;
        overflow: hidden;
        transition: 0.3s opacity;
        text-align: center;

        ${(props) =>
            !props.available &&
            css`
                opacity: 0.3;
            `};

        img {
            border-radius: 8px;
            margin-top: 8px;
            width: 188px;
            height: 140px;
            object-fit: cover;
            pointer-events: none;
            user-select: none;
        }
    }

    section.body {
        flex: 1 0 auto;
        h2 {
            font-family: 'Roboto';
            font-weight: 700;
            text-align: center;
            color: #3d3d4d;
        }

        p {
            margin-top: 8px;
            font-family: 'Roboto';
            font-weight: 700;
            text-align: center;
            color: #3d3d4d;
            padding: 0px 12px;
        }

        .desc {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 300;
            margin-top: 15px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size: 14px;
            flex: 1;
            color: #3d3d4d;
            padding: 0px 12px;
        }

        .price {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex: 1;
            font-style: normal;
            font-size: 12x;
            line-height: 20px;
            /* text-align: center;
            align-content: center;
            align-items: center;
            align-self: center; */
            padding: 0px 10px;

            b {
                font-weight: 600;
            }

            & + .price {
                padding: 0px 8px;
            }
        }
    }

    section.footer {
        flex-shrink: 0;
        padding: 8px 8px;
        border-radius: 0px 0px 8px 8px;

        div.icon-container {
            display: flex;
            flex: 1;
            justify-content: center;

            button {
                font-family: 'Roboto';
                font-weight: 700;
                display: flex;
                flex-direction: row;
                align-items: center;
                background: #c4c4c4;

                padding: 8px;
                border-radius: 8px;
                border: none;
                transition: 0.1s;

                p {
                    margin: 0px 0px 0px 4px;
                    color: #3d3d4d;
                    font-size: 14px;
                }
                svg {
                    /* color: #3d3d4d; */
                }

                & + button {
                    margin-left: 12px;
                }
            }
        }

        /* div.availability-container {
            display: flex;
            align-items: center;

            p {
                color: #3d3d4d;
            }

            .switch {
                position: relative;
                display: inline-block;
                width: 64px;
                height: 24px;
                margin-left: 12px;

                & input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #c72828;
                    -webkit-transition: 0.4s;
                    transition: 0.4s;
                    border-radius: 16px;

                    &:before {
                        position: absolute;
                        content: '';
                        height: 20px;
                        width: 40px;
                        left: 8px;
                        bottom: 6px;
                        background-color: white;
                        -webkit-transition: 0.4s;
                        transition: 0.4s;
                        border-radius: 10px;
                    }
                }

                input:checked + .slider {
                    background-color: #39b100;
                }

                input:focus + .slider {
                    box-shadow: 0 0 1px #2196f3;
                }

                input:checked + .slider:before {
                    -webkit-transform: translateX(32px);
                    -ms-transform: translateX(32px);
                    transform: translateX(32px);
                }
            }
        } */
    }
`;
