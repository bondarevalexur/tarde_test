// Кастомный компонент тултипа
import {IKlineData} from "../interface.ts";

function CustomTooltip({active, payload, label}: any) {
    if (active && payload && payload.length) {
        const data = payload[0].payload as IKlineData; // Получаем все данные точки

        return (
            <div className="custom-tooltip bg-white p-3 shadow-lg rounded border">
                <p className="font-bold mb-2">{label}</p>
                <div className="grid grid-cols-[34px_1fr] gap-2">
                    <span className="text-gray-600">Opn:</span>
                    <span className="text-lime-600">{data.open}</span>

                    <span className="text-gray-600">Cls:</span>
                    <span className="text-red-600">{data.close}</span>


                    <span className="text-gray-600">High:</span>
                    <span className="text-green-600">{data.high}</span>


                    <span className="text-gray-600">Low:</span>
                    <span className="text-orange-600">{data.low}</span>


                    {data.volume && (<><span className="text-gray-600">Volm:</span>
                        <span className="text-orange-600">{data.volume}</span></>)}


                </div>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;