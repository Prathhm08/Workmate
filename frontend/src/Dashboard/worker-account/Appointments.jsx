/* eslint-disable react/prop-types */
import { formateDate } from "../../utils/formatDate";
import avatar from "../../assets/images/avatar.png";

const Appointments = ({ appointments }) => {
  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-center">
            Name
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Gender
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Payment
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Price
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Booked on
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments?.map((item) => (
          <tr key={item._id}>
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap gap-2 text-center"
            >
              <img
                src={item.user.photo || avatar}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="text-base font-semibold">{item.user.name}</div>
              <div className="text-normal text-gray-500">{item.user.email}</div>
            </th>
            <td className="px-6 py-4 text-center">{item.user.gender}</td>
            <td className="px-6 py-4 text-center">
              {item.isPaid && (
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                  Paid
                </div>
              )}
              {!item.isPaid && (
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                  Unpaid
                </div>
              )}
            </td>
            <td className="px-6 py-4 text-center">{item.ticketPrice}</td>
            <td className="px-6 py-4 text-center">
              {formateDate(item.createdAt)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Appointments;
