from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter(
    prefix= "/api/fpl",
    tags = ["FPL"]
)

FPL_API_BASE_URL = "https://fantasy.premierleague.com/api"

async def fetch_fpl_data(endpoint: str):
    url = f"{FPL_API_BASE_URL}/{endpoint}/"
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Error fetching data from FPL API")
        return response.json()

@router.get("/leagues/1")
async def get_league():
    """
    Fetch a list of all teams in the FPL.
    """
    return await fetch_fpl_data("leagues-classic/1185158/standings")

@router.get("/leagues/2")
async def get_league_2():
    """
    Fetch a list of all teams in the FPL.
    """
    return await fetch_fpl_data("leagues-classic/1144835/standings")

@router.get("/teams")
async def get_teams():
    """
    Fetch a list of all teams in the FPL.
    """
    return await fetch_fpl_data("bootstrap-static")

@router.get("/player/{player_id}")
async def get_player(player_id: int):
    """
    Fetch detailed information about a specific player by their ID.
    """
    return await fetch_fpl_data(f"element-summary/{player_id}")

@router.get("/team/{team_id}")
async def get_team(team_id: int):
    """
    Fetch detailed information about a specific team by their ID.
    """
    return await fetch_fpl_data(f"entry/{team_id}")