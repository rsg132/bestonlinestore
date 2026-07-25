interface Props {
  title: string;
  value: string;
  icon: string;
  color: string;
}

export default function DashboardCard({
  title,
  value,
  icon,
  color,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>

        </div>

        <div
          className={`h-16 w-16 rounded-2xl ${color} flex items-center justify-center text-3xl text-white`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}