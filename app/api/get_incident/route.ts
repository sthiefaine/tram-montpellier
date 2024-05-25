const startDate = {
  weekdays: {
    start: "04h30",
    end: "01h00",
  },
  friday: {
    start: "04h30",
    end: "02h00",
  },
  saturday: {
    start: "04h30",
    end: "02h00",
  },
  sunday: {
    start: "05h30",
    end: "00h00",
  },
  offday: {
    start: "05:30",
    end: "23:30",
  },
};

export const GET = async () => {
  const data = "no implementation yet";
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
    },
  });
};
