import { useNavigate } from "react-router-dom";

const OtherServicesDropdown = () => {
  const navigate = useNavigate();

  const services = [
    { name: "Retaining Walls", url: "/services/retaining-walls" },
    { name: "Pole Walls", url: "/services/pole-walls" },
    { name: "Crib Walls", url: "/services/block-walls" },
    { name: "Concrete/Spray Walls", url: "/services/concrete-walls" },
    { name: "Wall Repairs", url: "/services/wall-repairs" },
    { name: "Landscaping", url: "/services/landscaping" },
    { name: "Piling & Drilling", url: "/services/piling-drilling" },
    { name: "Anchors", url: "/services/anchors" },
    { name: "Micropiles & Grouting", url: "/services/micropiles-grouting" },
  ];

  return (
    <div className="other-services-holder">
      <div className="other-services-dropdown">
      <label htmlFor="service-select">Other Services:</label>
      <select
        id="service-select"
        onChange={(e) => {
          const selectedUrl = e.target.value;
          if (selectedUrl) navigate(selectedUrl);
        }}
      >
        <option value="">Select a service</option>
        {services.map((service, i) => (
          <option key={i} value={service.url}>
            {service.name}
          </option>
        ))}
      </select>
    </div>
    </div>
  );
};

export default OtherServicesDropdown;
