import time
import requests
import subprocess
import sys

def test_status():
    print("Starting local backend test...")
    # Start app.py in background
    process = subprocess.Popen(
        [sys.executable, "app.py"],
        cwd=".",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    
    time.sleep(20) # wait for startup
    
    try:
        res = requests.get("http://localhost:8000/api/status")
        print(f"Status response code: {res.status_code}")
        print(f"Status body: {res.json()}")
        if res.status_code == 200:
            print("Status endpoint verification: SUCCESS")
            success = True
        else:
            print("Status endpoint verification: FAILED")
            success = False
    except Exception as e:
        print(f"Request failed: {e}")
        success = False
        
    process.terminate()
    try:
        process.wait(timeout=2)
    except subprocess.TimeoutExpired:
        process.kill()
        
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    test_status()
