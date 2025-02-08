# Dynamic Scorecard Tool for Performance Evaluation

## Objective
The **Dynamic Scorecard Tool** is a web-based application designed to evaluate and display performance metrics in a user-friendly format. The tool allows users to input data, calculate scores based on predefined criteria, and present results visually.

## Features and Functionalities
### 1. Data Input Interface
- Intuitive form to input data manually or via file upload (Excel/CSV).
- Supports multiple criteria categories (e.g., productivity, quality, timeliness).

### 2. Score Calculation
- Implements formulas or weighted algorithms to calculate scores based on predefined rules.
- Allows dynamic customization of weights and scoring logic.

### 3. Dashboard and Visualization
- Presents scores using charts, graphs, and tables.
- Suggested visualizations: bar charts, pie charts, radar charts, etc.
- Displays summaries like total score, category-wise breakdown, and trends over time.

### 4. Comparative Analysis
- Allows comparison of multiple entities (e.g., employees, projects, departments) side-by-side.
- Highlights top performers and areas needing improvement.

### 5. Export and Sharing Options
- Exports scorecards in **PDF, Excel, or CSV** formats.
- Enables sharing via email or links.

### 6. Authentication (Optional)
- User authentication for secure access.
- Multiple roles (e.g., **admin, viewer**) with different permission levels.

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/badboyz1812/dynamic-scorecard.git
cd dynamic-scorecard
```

### 2. Backend (Django)
#### Create and Activate Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate    # On Windows
```
#### Install Dependencies
```bash
pip install -r requirements.txt
```
#### Configure the Database
Ensure Microsoft SQL Server is running and update the database settings in `settings.py`:
```python
DATABASES = {
    'default': {
        'ENGINE': 'mssql',
        'NAME': 'scoreboard_db',
        'HOST': 'PRADEEP\\SQLEXPRESS',
        'PORT': '1433',
        'OPTIONS': {
            'driver': 'ODBC Driver 17 for SQL Server',
            'Trusted_Connection': 'yes',
            'Encrypt': 'yes',
            'TrustServerCertificate': 'yes',
        },
    },
}
```
#### Run Migrations
```bash
python manage.py makemigrations api
python manage.py migrate
```
#### Create Superuser (Optional for Admin Access)
```bash
python manage.py createsuperuser
```
#### Run the Backend Server
```bash
python manage.py runserver
```

---

### 3. Frontend (ReactJS)
#### Navigate to the React Frontend Directory
```bash
cd frontend
```
#### Install Dependencies
```bash
npm install
```
#### Start the Frontend Server
```bash
npm start
```

---

### 4. Running with Docker (Optional)
Ensure **Docker and Docker Compose** are installed.
```bash
docker-compose -f dynamic-scorecard/docker-compose.yml up -d --build
```

---

## API Endpoints
### 1. Upload CSV
**Endpoint:** `POST /api/upload-csv/`
```json
{
    "file": "data.csv"
}
```

### 2. Generate Graph Data
**Endpoint:** `GET /api/generate-graph/`

### 3. Fetch Score Data
**Endpoint:** `GET /api/scoredata/`

---

## Deployment
For **production deployment**, use **Gunicorn + Nginx** or **Docker**.

**Example:** Deploy Django with Gunicorn
```bash
pip install gunicorn
gunicorn --bind 0.0.0.0:8000 scorecard.wsgi:application
```

---

## Contributors
- **Pradeep-P** 
- Open to contributions!

## License
This project is **open-source** under the MIT License.

---

## Contact
For any queries or contributions, reach out at **pradeepp18122001@gmail.com**.

