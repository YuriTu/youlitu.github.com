package buildingJavaProgramClass8;

public class ShareAsset implements Asset {
	private String symbol;
	private double totalCost;
	private double currentPrice;
	public ShareAsset(String theSymbol,double currentPrice){
		if (theSymbol == null) {
			throw new NullPointerExcption();			
		}
		symbol = theSymbol;
		this.currentPrice = currentPrice;
		totalCost = 0;
	}
	// adds a cost of the given amount to this asset
	public void addCost(double cost){
		totalCost += cost;
	}
	// return the price per share of this asset
	public double getCurrentPrice(){
		return currentPrice;
	}
	public double getTotalCost(){
		return totalCost;
	}
	public void setCurrentPrice(double currentPrice){
		this.currentPrice = currentPrice;
	}
	public getProfit(double currentPrice){

	}
}