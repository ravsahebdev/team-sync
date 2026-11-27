export const exportEmployeesCSV = (employees) => {
    const headers = [
        "Name",
        "Email",
        "Role",
        "Department",
        "Status",
    ];

    const rows = employees.map((employee) => [
        employee.name,
        employee.email,
        employee.role,
        employee.department,
        employee.status,
    ]);

    const csvContent = [
        headers,
        ...rows,
    ]
        .map((row) =>
            row
                .map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`)
                .join(",")
        )
        .join("\n");

    const blob = new Blob(
        ["\uFEFF" + csvContent],
        { type: "text/csv;charset=utf-8;" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "team-sync-employees.csv";
    link.click();

    URL.revokeObjectURL(url);
};